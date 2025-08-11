'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import AdminGuard from '@/components/AdminGuard'
type Row = { id?: number; year: number; date?: string; title: string; description?: string; tags?: string[] }
export default function AdminTimeline() {
  const [rows, setRows] = useState<Row[]>([])
  const [form, setForm] = useState<Row>({ year: new Date().getFullYear(), title: '' })
  async function load() { const { data } = await supabase.from('timeline').select('*').order('year', { ascending: false }); setRows(data || []) }
  useEffect(() => { load() }, [])
  async function save() { if (!form.title) return; await supabase.from('timeline').insert({ ...form }); setForm({ year: new Date().getFullYear(), title: '' }); load() }
  async function remove(id?: number) { if (!id) return; await supabase.from('timeline').delete().eq('id', id); load() }
  return (
    <AdminGuard>
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Zaman Çizelgesi</h1>
        <div className="card mb-6 grid md:grid-cols-5 gap-3">
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" type="number" placeholder="Yıl" value={form.year} onChange={e=>setForm({ ...form, year: Number(e.target.value) })} />
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Tarih (ops.)" value={form.date || ''} onChange={e=>setForm({ ...form, date: e.target.value })} />
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent md:col-span-2" placeholder="Başlık" value={form.title} onChange={e=>setForm({ ...form, title: e.target.value })} />
          <button onClick={save} className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold">Ekle</button>
          <textarea className="px-3 py-2 rounded-xl border border-white/20 bg-transparent md:col-span-5" rows={3} placeholder="Açıklama" value={form.description || ''} onChange={e=>setForm({ ...form, description: e.target.value })} />
        </div>
        <div className="grid gap-3">
          {rows.map(r => (
            <div key={r.id} className="card flex items-start justify-between gap-4">
              <div>
                <div className="text-sm text-muted">{r.year} {r.date ? `• ${r.date}` : ''}</div>
                <div className="font-semibold">{r.title}</div>
                {r.description && <div className="text-muted">{r.description}</div>}
              </div>
              <button onClick={()=>remove(r.id)} className="px-3 py-1 rounded-xl border border-white/20">Sil</button>
            </div>
          ))}
        </div>
      </main>
    </AdminGuard>
  )
}
