export const metadata = { title: 'İletişim — Murat Akar' };
export default function ContactPage(){
  return (
    <main className="container">
      <h1 className="text-3xl font-bold my-6">İletişim</h1>
      <div className="card">
        <form action="https://formspree.io/f/mldlaova" method="POST" className="max-w-xl grid gap-3">
          <input name="name" placeholder="Adınız" required className="px-3 py-2 rounded-xl border border-white/20 bg-transparent text-white" />
          <input type="email" name="email" placeholder="E-posta" required className="px-3 py-2 rounded-xl border border-white/20 bg-transparent text-white" />
          <textarea name="message" placeholder="Mesajınız" rows={4} required className="px-3 py-2 rounded-xl border border-white/20 bg-transparent text-white"></textarea>
          <input type="text" name="company" style={{display:'none'}} aria-hidden="true" />
          <input type="hidden" name="_next" value="https://www.muratakar.net/tesekkurler" />
          <input type="hidden" name="_subject" value="Yeni mesaj - muratakar.net" />
          <button className="px-4 py-2 rounded-2xl bg-[var(--accent)] text-slate-900 font-bold w-fit">Gönder</button>
        </form>
      </div>
    </main>
  )
}
