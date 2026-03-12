import Tiles from '@/template/tiles'
import { getCompetitionsPosts } from '@/lib/queries'

export const metadata = {
  title: 'Konkursy',
}

export default async function Konkursy() {
  const competitions = await getCompetitionsPosts()

  return (
    <Tiles
      data={competitions}
      params="konkursy"
      title="Konkursy"
      subtitle="Wszystkie konkursy z Naszej Szkoły!"
      icon="announcement"
    />
  )
}
