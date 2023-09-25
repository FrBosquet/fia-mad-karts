
import { getRaces } from '@/app/_lib/db';
import Link from 'next/link';

export default function Races() {
  const races = getRaces()

  return <article className='grid grid-cols-2 md:grid-cols-3 gap-4'>
    {
      races.map(({ track, location, date, image }) => {
        const dateString = new Date(date).toLocaleDateString('es-AR', { year: 'numeric', month: 'numeric', day: 'numeric' })

        return <div className='aspect-square relative flex flex-col justify-end gap-2 p-2' key={track}>
          <img src={`/tracks${image}`} className='absolute inset-0 object-cover' />
          <Link href={`/races/${track.toLowerCase().replace(' ', '')}`} className="absolute bottom-0 left-0 p-4 w-full bg-slate-900/70 hover:text-yellow-300 transition">
            <h1 className='font-semibold text-xl'>{track}</h1>
            <p className='text-xs opacity-70'>{location}</p>
            <p className='text-xs opacity-70'>{dateString}</p>
          </Link>
        </div>
      })
    }
  </article>
}
