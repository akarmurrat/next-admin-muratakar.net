export const dynamic = 'force-dynamic'; export const revalidate = 0;
'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import AdminGuard from '@/components/AdminGuard'
export default function AdminAbout(){
  const [body,setBody]=useState('')
  const [saving,setSaving]=useState(false)
  const [msg,setMsg]=useState<string|null>(null)
  useEffect(()=>{ supabase.from('about').select('body').eq('id',1).single().then(({data})=>{ if(data?.body) setBody(data.body) }) },[])
  async function save(){
    setSaving(true); setMsg(null)
    const { error } = await supabase.from('about').update({ body }).eq('id',1)
    setSaving(false); setMsg(error ? 'Kaydedilemedi.' : 'Kaydedildi.')
  }
  return (
    <AdminGuard>
      <main className="container py-8">
        <h1 className="text-2xl font-bold mb-4">Hakkımda (Düzenle)</h1>
        <textarea className="w-full h-64 p-3 rounded-xl border border-white/20 bg-transparent" value={body} onChange={e=>setBody(e.target.value)} />
        <div className="mt-3 flex gap-3 items-center">
          <button onClick={save} className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold">{saving?'Kaydediliyor…':'Kaydet'}</button>
          {msg && <span className="text-muted">{msg}</span>}
        </div>
      </main>
    </AdminGuard>
  )
}
