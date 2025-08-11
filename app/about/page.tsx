export const revalidate = 60;
export default async function AboutPage(){
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/about?select=body&id=eq.1';
  const res = await fetch(url, { headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! }, next: { revalidate: 60 } });
  const rows = await res.json();
  const body = rows?.[0]?.body || 'Hakkımda içeriği henüz eklenmedi.';
  return (
    <main className="container">
      <h1 className="text-3xl font-bold my-6">Hakkımda</h1>
      <div className="card"><p style={{whiteSpace:'pre-wrap'}}>{body}</p></div>
    </main>
  );
}
