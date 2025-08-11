export const revalidate = 60;
type Work = { company:string; role:string; period:string; descript?:string; link?:string };
export default async function WorkPage(){
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL + '/rest/v1/works?select=*';
  const res = await fetch(url, { headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! }, next: { revalidate: 60 } });
  const items: Work[] = await res.json();
  return (
    <main className="container">
      <h1 className="text-3xl font-bold my-6">Yaptığım İşler</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((w,i)=>(
          <div key={i} className="card">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{w.company}</h3>
              <span className="text-xs text-muted">{w.period}</span>
            </div>
            <p className="text-muted"><strong>{w.role}</strong></p>
            {w.descript && <p className="text-muted">{w.descript}</p>}
            {w.link && <a href={w.link} target="_blank" rel="noopener" className="text-sm" style={{color:'var(--accent)'}}>Detay</a>}
          </div>
        ))}
      </div>
    </main>
  );
}
