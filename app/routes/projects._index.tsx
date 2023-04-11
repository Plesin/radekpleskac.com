import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Header from '~/components/Header'
import { InfoIcon } from '~/components/Icon'
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
          <p className="text-sm mb-4 inline-flex items-center">
            <InfoIcon cssProps="mr-1" /> Below is a collection of side projects
            or a few freelancing projects. For full-time projects please see my
            <a
              href="https://www.linkedin.com/in/radek-pleska%C4%8D-01379620a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary pl-1"
            >
              LinkedIn
            </a>
          </p>
          {projects.map((project) => (
            <ProjectPreview key={project.id} project={project} />
          ))}
        </main>
      </div>
    </>
  )
}
