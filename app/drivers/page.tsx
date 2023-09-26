
import { getDrivers } from '@/app/_lib/db';
import Link from 'next/link';

export default function Races() {
  const drivers = getDrivers()

  return <article className='grid grid-cols-2 md:grid-cols-3 gap-4'>
    {
      drivers.map(({ name, alias }) => {

        return <div className='aspect-square relative flex flex-col justify-end gap-2 p-2' key={name}>
          <img alt={name} src={`/drivers/${name.toLowerCase()}.webp`} className='absolute inset-0 object-cover w-full h-full' />
          <Link href={`/drivers/${name.toLowerCase().replace(' ', '')}`} className="absolute bottom-0 left-0 p-4 w-full bg-slate-900/70 hover:text-yellow-300 transition">
            <h1 className='font-semibold text-xl'>{name}</h1>
            <p className='text-xs opacity-70'>{alias}</p>
            {/* <p className='text-xs opacity-70'>{dateString}</p> */}
          </Link>
        </div>
      })
    }
  </article>
}
