export default function Thanks(){
  return (
    <main className="container min-h-[60vh] grid place-items-center">
      <div className="card text-center max-w-xl">
        <h1 className="text-3xl font-bold">Teşekkürler! 🙌</h1>
        <p className="text-muted mt-2">Mesajınız başarıyla gönderildi.</p>
        <a className="inline-block mt-4 px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold" href="/">Ana sayfaya dön</a>
      </div>
    </main>
  )
}
