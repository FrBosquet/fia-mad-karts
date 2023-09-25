
import { readFileSync, readdirSync } from 'fs';
import path from 'path';

export type RacerStats = {
  points: number
  fastlaps: number
  tracks: Record<string, {
    position: number
    fastlap: boolean
    date: string
  }>
}

export type Race = {
  date: string
  track: string
  location: string
  positions: string[]
  fastlap: string
  image: string
}

const poinstByPosition = [25, 18, 16, 12, 10, 8, 6, 4, 2, 1]
const pointsByFastlap = 1

export const getRaces = () => {
  const raceFiles = readdirSync(path.join(process.cwd(), 'races'))

  const races = raceFiles.map((filename) => {
    return JSON.parse(readFileSync(path.join(process.cwd(), 'races', filename), 'utf8'))
  })

  return races as Race[]
}

export const getRacers = (races: Race[]) => {
  const racers: Record<string, RacerStats> = {}

  races.forEach(race => {
    const { positions, fastlap, track, date } = race

    positions.forEach((name, index) => {
      const isFastlap = fastlap === name

      if (!racers[name]) {
        racers[name] = {
          points: poinstByPosition[index] + (isFastlap ? pointsByFastlap : 0),
          fastlaps: isFastlap ? 1 : 0,
          tracks: {
            [track]: {
              position: index + 1,
              fastlap: isFastlap,
              date
            }
          }
        }
      } else {
        racers[name].points += poinstByPosition[index] + (isFastlap ? pointsByFastlap : 0)

        if (isFastlap) racers[name].fastlaps++

        racers[name].tracks[track] = {
          position: index + 1,
          fastlap: isFastlap,
          date
        }
      }
    })
  })

  return racers
}

