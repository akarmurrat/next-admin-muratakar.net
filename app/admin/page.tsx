'use client'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'
export default function AdminHome(){
  const router = useRouter()
  async function signOut(){ await supabase.auth.signOut(); router.push('/') }
  return (
    <main className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Yönetim Paneli</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <a className="card hover:opacity-90" href="/admin/about">Hakkımda (Düzenle)</a>
        <a className="card hover:opacity-90" href="/admin/timeline">Zaman Çizelgesi</a>
        <a className="card hover:opacity-90" href="/admin/work">İşlerim</a>
        <a className="card hover:opacity-90" href="/admin/posts">Yazılar</a>
      </div>
      <button onClick={signOut} className="mt-6 px-4 py-2 rounded-2xl border border-white/20">Çıkış yap</button>
    </main>
  )
}
