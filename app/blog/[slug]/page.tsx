import { mdToHtml } from '@/lib/markdown'
export const revalidate = 60;
export default async function PostPage({ params }:{ params:{ slug:string } }){
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL + `/rest/v1/posts?select=title,body,published_at&slug=eq.${params.slug}&limit=1`;
  const res = await fetch(url, { headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! }, next: { revalidate: 60 } });
  const rows = await res.json();
  const post = rows?.[0];
  if(!post) return <main className="container py-10">Yazı bulunamadı.</main>;
  const html = await mdToHtml(post.body);
  return (
    <main className="container">
      <article className="prose prose-invert max-w-none">
        <h1>{post.title}</h1>
        {post.published_at && <p className="text-muted">{new Date(post.published_at).toLocaleDateString('tr-TR')}</p>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}
