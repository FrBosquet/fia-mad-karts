import Link from "next/link"
import { Race, RacerStats, getRacers } from "../_lib/db"
import { getslug } from "../_lib/driver"

const Row = ({ racer, name, even }: { racer: RacerStats, name: string, even: boolean }) => {
  const { tracks, points, fastlaps } = racer

  const slug = getslug(name)

  return <div className={`p-2 flex justify-between uppercase gap-4 ${even ? 'bg-slate-400/20' : 'bg-slate-700/20'}`}>
    <Link href={`/drivers/${slug}`} className='text-left w-[20%] hover:text-teal-300'>{name}</Link>
    <p className='flex-1 text-center'>{Object.keys(tracks).length}</p>
    <p className='flex-1 text-center'>{fastlaps}</p>
    <p className='flex-1 text-center text-yellow-300'>{points}</p>
  </div>
}

export const RacerChart = ({ races }: { races: Race[] }) => {
  const racers = getRacers(races)

  const asArr = Object.entries(racers).sort(([i, a], [j, b]) => a.points > b.points ? -1 : 1)

  return <article>
    <div className='p-2 flex justify-between uppercase font-bold gap-4 text-xs'>
      <h2 className='text-left w-[20%]'>piloto</h2>
      <p className='flex-1 text-center'>carreras</p>
      <p className='flex-1 text-center'>vueltas rápidas</p>
      <p className='flex-1 text-center text-yellow-300'>puntos</p>
    </div>
    {asArr.map(([name, racer], index) => {
      return <Row key={name} racer={racer} name={name} even={index % 2 === 0} />
    })}
  </article>
}