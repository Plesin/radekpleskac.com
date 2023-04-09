import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Header from '~/components/Header'
import ProjectPreview from '~/components/ProjectPreview'
import { getProjects } from '~/models/projects.server'

export async function loader() {
  return json({ projects: await getProjects(10) })
}

export default function About() {
  const { projects } = useLoaderData<typeof loader>()
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
          <h1 className="pb-6 text-5xl font-bold">Projects</h1>
          {projects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </main>
      </div>
    </>
  )
}
