export const revalidate = 60;

type Item = { year:number; date?:string; title:string; description?:string; tags?:string[] };

export default async function TimelinePage(){
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/timeline?select=*&order=year.desc';

  let rows: Item[] = [];
  try {
    const res = await fetch(url, {
      headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! },
      next: { revalidate: 60 }
    });
    const data = await res.json();
    rows = Array.isArray(data) ? data : [];
  } catch {
    rows = [];
  }

  const byYear: Record<string, Item[]> = {};
  rows.forEach(r => { (byYear[r.year] ||= []).push(r) });

  return (
    <main className="container">
      <h1 className="text-3xl font-bold my-6">Zaman Çizelgesi</h1>
      {Object.keys(byYear).length === 0 && <div className="text-muted">Henüz kayıt yok.</div>}
      {Object.keys(byYear).sort((a,b)=>Number(b)-Number(a)).map(yr => (
        <section key={yr} className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{yr}</h2>
          <div className="grid gap-3">
            {byYear[yr].map((it,i)=>(
              <div key={i} className="card">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{it.title}</h3>
                  {it.date && <span className="text-xs text-muted">{it.date}</span>}
                </div>
                {it.description && <p className="text-muted mt-1">{it.description}</p>}
                {it.tags && it.tags.length>0 && <div className="flex flex-wrap gap-2 mt-2 text-sm">{it.tags.map(t=><span key={t} className="badge">{t}</span>)}</div>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
