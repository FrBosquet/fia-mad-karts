import { getDriverProfile } from "@/app/_lib/db";

export default function Races({ params: { driver: paramsDriverSlug } }: { params: { driver: string } }) {
  const driver = getDriverProfile(paramsDriverSlug)

  const { name, job, alias, description } = driver

  return <article className="flex flex-col gap-8">
    <section className="flex flex-col md:flex-row gap-4">
      <img className="w-full md:w-56 h-56 object-cover placeholder animate-enter" alt={paramsDriverSlug} src={`/drivers/${paramsDriverSlug}.webp`} />
      <article className="flex flex-col justify-end">
        <p className="text-xl animate-appear">"El {alias}"</p>
        <h1 className="text-8xl font-logo animate-enter">{name}</h1>
        <p className="text-gray-400 animate-appear">{job}</p>
      </article>
    </section>

    <section>
      {description.map((paragraph, index) => <p key={index} className="text-gray-300 pb-4 text-lg">{paragraph}</p>)}
    </section>
  </article>
}