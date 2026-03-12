import List from '@/template/list'
import { getForParentsPosts } from '@/lib/queries'

export const metadata = {
  title: 'Dla Rodziców',
}

export default async function DlaRodzicow() {
  const forParents = await getForParentsPosts()

  return (
    <List
      data={forParents}
      title="Dla Rodziców"
      subtitle="Wszystkie dokumenty dla rodziców!"
      icon="document"
      documents={true}
    />
  )
}
