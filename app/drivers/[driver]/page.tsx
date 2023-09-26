import { getDriverProfile, getDriverStats } from "@/app/_lib/db";

export default function Races({ params: { driver: paramsDriverSlug } }: { params: { driver: string } }) {
  const driver = getDriverProfile(paramsDriverSlug)
  const driverStats = getDriverStats(paramsDriverSlug)

  const { name, job, alias, description } = driver
  const { tracks, fastlaps } = driverStats

  // Double reverse to only show the last 4 races
  const streak = Object.values(tracks).map(({ position }) => position).reverse().slice(0, 4).reverse().join("/")

  return <article className="flex flex-col gap-8">
    <section className="flex flex-col md:flex-row gap-4">
      <img className="w-full md:w-56 h-56 object-cover placeholder animate-enter" alt={paramsDriverSlug} src={`/drivers/${paramsDriverSlug}.webp`} />
      <article className="flex flex-col justify-end">
        <p className="text-xl animate-appear">&ldquo;El {alias}&rdquo;</p>
        <h1 className="text-8xl font-logo animate-enter">{name}</h1>
        <p className="text-gray-400 animate-appear">{job}</p>
      </article>
    </section>

    <section className="flex w-full justify-around p-4 bg-slate-950 rounded-xl">
      <article>
        <p className="text-xs text-center text-slate-400">puntos</p>
        <p className="text-center text-xl">{driverStats.points}</p>
      </article>

      <article>
        <p className="text-xs text-slate-400">carreras</p>
        <p className="text-center text-xl">{Object.keys(tracks).length}</p>
      </article>

      <article>
        <p className="text-xs text-slate-400">racha</p>
        <p className="text-center text-xl">{streak}</p>
      </article>

      <article>
        <p className="text-xs text-slate-400">vueltas rápidas</p>
        <p className="text-center text-xl">{fastlaps}</p>
      </article>
    </section>

    <section>
      {description.map((paragraph, index) => <p key={index} className="text-gray-300 pb-4 text-lg">{paragraph}</p>)}
    </section>
  </article>
}