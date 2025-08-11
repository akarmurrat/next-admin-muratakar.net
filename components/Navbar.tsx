export default function Navbar(){
  return (
    <header className="sticky top-0 backdrop-blur bg-black/40 border-b border-white/10 z-10">
      <nav className="container flex items-center justify-between py-3">
        <a href="/" className="font-bold tracking-wide">Murat Akar</a>
        <ul className="flex flex-wrap gap-4 text-sm">
          <li><a href="/about" className="hover:opacity-80">Hakkımda</a></li>
          <li><a href="/timeline" className="hover:opacity-80">Zaman Çizelgesi</a></li>
          <li><a href="/work" className="hover:opacity-80">İşlerim</a></li>
          <li><a href="/blog" className="hover:opacity-80">Yazılar</a></li>
          <li><a href="/cv" className="hover:opacity-80">CV</a></li>
          <li><a href="/contact" className="hover:opacity-80">İletişim</a></li>
          <li><a href="/admin" className="hover:opacity-80">Admin</a></li>
        </ul>
      </nav>
    </header>
  )
}
