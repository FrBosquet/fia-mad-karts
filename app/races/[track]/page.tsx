
import { RaceChart } from "@/app/_components/RaceChart";
import { getRaces } from "@/app/_lib/db";

export default function Races({ params: { track: paramsTrackName } }: { params: { track: string } }) {
  const races = getRaces()
  const race = races.find(({ track }) => track.toLowerCase().replace(' ', '') === paramsTrackName)

  if (!race) throw new Error('Race not found')

  const { track, date, location, fastlap, positions, image } = race

  return <article className="flex flex-col gap-8">
    <section className="w-full relative">
      <img src={`/tracks${image}`} className='w-full aspect-video md:h-60 object-cover' />
      <div className="absolute inset-0 flex flex-col justify-end gap-2 p-4 bg-slate-900/70">
        <h1 className='font-semibold text-4xl'>{track}</h1>
        <p className='text-xs opacity-70'>{location}</p>
        <p className='text-xs opacity-70'>{date}</p>
      </div>
    </section>

    <section className="grid grid-cols-2 grid-row-2 p-2">
      <article className="flex flex-col col-span-2">
        <p className="text-center text-xs">ganador</p>
        <h1 className="uppercase text-center text-xl text-yellow-300">{positions[0]}</h1>
      </article>
      <article className="flex flex-col">
        <p className="text-center text-xs">segundo</p>
        <h1 className="uppercase text-center text-xl text-gray-300">{positions[1]}</h1>
      </article>
      <article className="flex flex-col">
        <p className="text-center text-xs">tercero</p>
        <h1 className="uppercase text-center text-xl text-orange-300">{positions[2]}</h1>
      </article>
    </section>

    <RaceChart race={race} />
  </article>
}