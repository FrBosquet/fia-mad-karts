
import { getRaces } from '@/app/_lib/db';
import { RacerChart } from './_lib/RacerChart';

export default function Home() {
  const races = getRaces()

  return <RacerChart races={races} />
}
