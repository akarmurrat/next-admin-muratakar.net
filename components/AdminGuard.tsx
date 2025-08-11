'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabaseClient'

export default function AdminGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) router.replace('/admin/login')
      else if (mounted) setReady(true)
    })()
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) router.replace('/admin/login')
    })
    return () => { mounted = false; sub?.subscription?.unsubscribe?.() }
  }, [router])

  if (!ready) return <div className="container py-10">Yükleniyor…</div>
  return <>{children}</>
}
