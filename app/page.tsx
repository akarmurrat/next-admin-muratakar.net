export default function Home(){
  return (
    <main className="container">
      <section className="grid md:grid-cols-2 gap-7 items-center py-16">
        <div className="card">
          <h1 className="text-4xl font-bold">Merhaba, ben <span style={{color:'var(--accent)'}}>Murat</span> 👋</h1>
          <p className="text-muted mt-2">Kişisel siteme hoş geldin. Projeler, yazılar ve deneyimlerimi burada topluyorum.</p>
          <div className="flex flex-wrap gap-2 mt-4 text-sm">
            <span className="badge">Satış & İş Geliştirme</span>
            <span className="badge">Proje Yönetimi</span>
            <span className="badge">Robotik / Otomasyon</span>
          </div>
          <div className="flex gap-3 mt-4">
            <a className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold" href="/contact">Benimle iletişime geç</a>
            <a className="px-4 py-2 rounded-2xl border border-white/20" href="/timeline">Zaman Çizelgesi</a>
          </div>
        </div>
        <div className="card">
          <h2 className="text-2xl font-semibold">Öne çıkanlar</h2>
          <ul className="mt-2 list-disc pl-5 text-muted"><li>🔧 Başarı 1</li><li>🤝 Başarı 2</li><li>🚀 Başarı 3</li></ul>
        </div>
      </section>
    </main>
  )
}
