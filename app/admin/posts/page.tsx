'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import AdminGuard from '@/components/AdminGuard'
type Post = { id?: number; slug: string; title: string; excerpt?: string; body: string; published?: boolean }
export default function AdminPosts() {
  const [rows, setRows] = useState<Post[]>([])
  const [form, setForm] = useState<Post>({ slug: '', title: '', body: '', published: true })
  async function load(){ const { data } = await supabase.from('posts').select('*').order('published_at', { ascending: false, nullsFirst: false }); setRows(data || []) }
  useEffect(() => { load() }, [])
  async function save(){ if (!form.slug || !form.title || !form.body) return; await supabase.from('posts').insert({ ...form }); setForm({ slug: '', title: '', body: '', published: true }); load() }
  async function remove(id?: number){ if (!id) return; await supabase.from('posts').delete().eq('id', id); load() }
  return (
    <AdminGuard>
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Yazılar</h1>
        <div className="card mb-6 grid gap-3">
          <div className="grid md:grid-cols-2 gap-3">
            <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Slug (yazi-basligi)" value={form.slug} onChange={e=>setForm({ ...form, slug: e.target.value })} />
            <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Başlık" value={form.title} onChange={e=>setForm({ ...form, title: e.target.value })} />
          </div>
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Kısa özet (ops.)" value={form.excerpt || ''} onChange={e=>setForm({ ...form, excerpt: e.target.value })} />
          <textarea className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" rows={8} placeholder="Markdown içerik" value={form.body} onChange={e=>setForm({ ...form, body: e.target.value })} />
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={!!form.published} onChange={e=>setForm({ ...form, published: e.target.checked })} /> Yayınla</label>
          <button onClick={save} className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold">Ekle</button>
        </div>
        <div className="grid gap-3">
          {rows.map(r => (
            <div key={r.id} className="card flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{r.title}</div>
                <div className="text-sm text-muted">/{r.slug}</div>
                {r.excerpt && <div className="text-muted">{r.excerpt}</div>}
              </div>
              <div className="flex gap-2">
                <a className="px-3 py-1 rounded-xl border border-white/20" href={`/blog/${r.slug}`} target="_blank" rel="noopener">Görüntüle</a>
                <button onClick={()=>remove(r.id)} className="px-3 py-1 rounded-xl border border-white/20">Sil</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AdminGuard>
  )
}
