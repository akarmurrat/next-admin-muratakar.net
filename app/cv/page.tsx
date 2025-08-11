export const metadata = { title: 'CV — Murat Akar' };
export default function CVPage(){
  return (
    <main className="container">
      <h1 className="text-3xl font-bold my-6">Özgeçmiş</h1>
      <div className="card">
        <div className="mt-4 flex gap-3">
          <a className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold" href="/cv.pdf" target="_blank" rel="noopener">PDF'yi Aç</a>
          <a className="px-4 py-2 rounded-2xl border border-white/20" href="/cv.pdf" download>İndir</a>
        </div>
        <div className="mt-6">
          <iframe src="/cv.pdf#view=FitH" title="Murat Akar CV" className="w-full" style={{height:'80vh', border:0}} />
        </div>
      </div>
      <p className="text-muted mt-3 text-sm">Not: Repo'da <code>public/cv.pdf</code> dosyasını kendi CV'nizle değiştirin.</p>
    </main>
  )
}
