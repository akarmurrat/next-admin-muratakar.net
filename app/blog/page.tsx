export const revalidate = 60;
type Post = { slug:string; title:string; excerpt?:string; published?:boolean; published_at?:string };
export default async function BlogPage(){
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/posts?select=slug,title,excerpt,published,published_at&published=eq.true&order=published_at.desc.nullslast';
  const res = await fetch(url, { headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! }, next: { revalidate: 60 } });
  const posts: Post[] = await res.json();
  return (
    <main className="container">
      <h1 className="text-3xl font-bold my-6">Yazılar</h1>
      <div className="grid gap-4">
        {posts.map(p => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="card hover:opacity-90 transition">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            {p.published_at && <p className="text-muted text-sm mt-1">{new Date(p.published_at).toLocaleDateString('tr-TR')}</p>}
            {p.excerpt && <p className="text-muted mt-2">{p.excerpt}</p>}
          </a>
        ))}
      </div>
    </main>
  );
}
