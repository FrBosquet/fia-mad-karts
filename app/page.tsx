
import { getRaces } from '@/app/_lib/db';
import { RacerChart } from './_components/RacerChart';
import { Logo } from './_components/logo';

export default function Home() {
  const races = getRaces()

  return <>
    <section className='p-12 flex flex-col items-center'>
      <Logo className='[text-shadow:_0_-2px_0_rgb(255_255_255_/_40%)] animate-enter text-7xl'>Madrid Kart Championship</Logo>
      <p className='text-center text-slate-400 animate-appear'>donde los mejores se matan</p>
    </section>
    <RacerChart races={races} />
  </>
}
