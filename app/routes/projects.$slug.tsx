import { json, type LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getProject } from '~/models/projects.server'

import Header from '~/components/Header'

export async function loader({ params }: LoaderArgs) {
  return json({ project: await getProject(params.slug || '') })
}

export default function ProjectSlug() {
  const { project } = useLoaderData<typeof loader>()

  return (
    <>
      <Header />
      {project ? (
        <div className="min-h-screen">
          <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
            <h1 className="pb-6 text-5xl font-bold">{project?.title}</h1>
            <img
              className="md:max-w-sm"
              src={`/images/${project.images[0].fileName}`}
              alt={project.title}
            />
            <h3>{project?.description}</h3>
            <p>{project?.content}</p>
            <Link className="text-base text-[#fca311]" to={`/projects`}>
              All projects
            </Link>
          </main>
        </div>
      ) : (
        <div>Project does not exist</div>
      )}
    </>
  )
}
