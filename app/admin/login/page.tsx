'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function Login(){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState<string|null>(null)
  const router = useRouter()

  async function onSubmit(e:React.FormEvent){
    e.preventDefault()
    setLoading(true)
    setError(null)
    const {error} = await supabase.auth.signInWithPassword({email,password})
    setLoading(false)
    if(error) setError(error.message)
    else router.replace('/admin')
  }

  return (
    <main className="container py-10">
      <div className="card max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Yönetim Girişi</h1>
        <form onSubmit={onSubmit} className="grid gap-3">
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="E-posta" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          <input className="px-3 py-2 rounded-xl border border-white/20 bg-transparent" placeholder="Şifre" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button disabled={loading} className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold">
            {loading?'Giriş yapılıyor…':'Giriş yap'}
          </button>
        </form>
      </div>
    </main>
  )
}
