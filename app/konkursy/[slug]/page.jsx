import Post from '@/template/post'
import { getCompetitionBySlug } from '@/lib/queries'

export async function generateMetadata({ params }) {
  const competition = await getCompetitionBySlug(params)
  const title = competition ? competition.title : '404'

  return {
    title: title,
  }
}

export default async function KonkursyPost({ params }) {
  const competition = await getCompetitionBySlug(params)
  const data = [competition]

  return <Post data={data} params="konkursy" />
}
