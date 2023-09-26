
import { getRaces } from '@/app/_lib/db';
import { RacerChart } from './_components/RacerChart';

export default function Home() {
  const races = getRaces()

  return <RacerChart races={races} />
}
