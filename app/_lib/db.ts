
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

const _DATA = 'app/_data'
const RACES = path.join(_DATA, 'races')
const DRIVERS = path.join(_DATA, 'drivers')

export const getRaces = () => {
  const raceFiles = readdirSync(path.join(process.cwd(), RACES))

  const races = raceFiles.map((filename) => {
    return JSON.parse(readFileSync(path.join(process.cwd(), RACES, filename), 'utf8'))
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

  return racers as Record<string, RacerStats>
}

export type Driver = {
  name: string
  job: string
  alias: string
  description: string[]
}

export const getDriverStats = (target: string) => {
  const races = getRaces()
  const driversStats = getRacers(races)

  for (const driver in driversStats) {
    if (driver === target) {
      return driversStats[driver]
    }
  }

  throw new Error('Driver stats not found')
}

export const getDrivers = () => {
  const driverFiles = readdirSync(path.join(process.cwd(), DRIVERS))

  const drivers = driverFiles.map((filename) => {
    return JSON.parse(readFileSync(path.join(process.cwd(), DRIVERS, filename), 'utf8'))
  })

  return drivers as Driver[]
}

export const getDriverProfile = (name: string) => {
  const driver = readFileSync(path.join(process.cwd(), DRIVERS, `${name}.json`), 'utf-8')

  if (!driver) throw new Error('Driver not found')

  return JSON.parse(driver) as Driver
}