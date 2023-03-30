import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import Header from '~/components/Header'
import ProjectPreview from '~/components/ProjectPreview'
import { getProjects } from '~/models/projects.server'

export async function loader() {
  return json({ projects: await getProjects() })
}

export default function Index() {
  const { projects } = useLoaderData<typeof loader>()

  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
          <h1 className="text-[#fca311] my-12 text-3xl md:text-5xl font-bold leading-tight">
            A freelance frontend developer passionate about the craft of
            developing performant, usable, accessible web applications.
          </h1>
          <p className="text-lg  md:text-2xl my-8">
            Hi! I'm Radek, a web developer based in Brno, Czech Republic. I'm
            currently open for new projects. Please check out the projects
            section or my Github, Linked.
          </p>
          <h2 className="py-4">Example work:</h2>
          {projects.map((project) => (
            <ProjectPreview
              key={project.id}
              project={project}
              images={project.images}
              technologies={project.technologies}
            />
          ))}
        </main>
      </div>
    </>
  )
}
