export const dynamic = 'force-dynamic'; export const revalidate = 0;
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import AdminGuard from '@/components/AdminGuard'
type Work = { id?: number; company: string; role: string; period: string; descript?: string; link?: string }
export default function AdminWork() {
  const [rows, setRows] = useState<Work[]>([])
  const [form, setForm] = useState<Work>({ company: '', role: '', period: '' })
  async function load(){ const { data } = await supabase.from('works').select('*').order('id', { ascending: false }); setRows(data || []) }
  useEffect(() => { load() }, [])
  async function save(){ if (!form.company || !form.role || !form.period) return; await supabase.from('works').insert({ ...form }); setForm({ company: '', role: '', period: '' }); load() }
  async function remove(id?: number){ if (!id) return; await supabase.from('works').delete().eq('id', id); load() }
  return (
    <AdminGuard>
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">İşlerim</h1>
        <div className="card mb-6 grid md:grid-cols-5 gap-3">
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Şirket" value={form.company} onChange={e=>setForm({ ...form, company: e.target.value })} />
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Rol" value={form.role} onChange={e=>setForm({ ...form, role: e.target.value })} />
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Dönem" value={form.period} onChange={e=>setForm({ ...form, period: e.target.value })} />
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent md:col-span-2" placeholder="Link (ops.)" value={form.link || ''} onChange={e=>setForm({ ...form, link: e.target.value })} />
          <textarea className="px-3 py-2 rounded-xl border border-white/20 bg-transparent md:col-span-5" rows={3} placeholder="Açıklama" value={form.descript || ''} onChange={e=>setForm({ ...form, descript: e.target.value })} />
          <button onClick={save} className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold md:col-span-5">Ekle</button>
        </div>
        <div className="grid gap-3">
          {rows.map(r => (
            <div key={r.id} className="card flex items-start justify-between gap-4">
              <div>
                <div className="font-semibold">{r.company} — {r.role}</div>
                <div className="text-sm text-muted">{r.period}</div>
                {r.descript && <div className="text-muted">{r.descript}</div>}
                {r.link && <a className="text-sm" style={{color:'var(--accent)'}} target="_blank" rel="noopener" href={r.link}>Detay</a>}
              </div>
              <button onClick={()=>remove(r.id)} className="px-3 py-1 rounded-xl border border-white/20">Sil</button>
            </div>
          ))}
        </div>
      </main>
    </AdminGuard>
  )
}
