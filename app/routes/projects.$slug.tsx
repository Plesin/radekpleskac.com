import { useParams } from '@remix-run/react'
import Header from '~/components/Header'

export default function ProjectSlug() {
  const params = useParams()
  const slug = params.slug
  console.log('CLOG ~ ProjectSlug ~ slug:', slug)
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
          <h1 className="pb-6 text-5xl font-bold">Project detail for</h1>
          <h2>{slug}</h2>
        </main>
      </div>
    </>
  )
}
