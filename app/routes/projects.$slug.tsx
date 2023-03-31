import { json, type LoaderArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'
import { getProject } from '~/models/projects.server'
import { marked } from 'marked'

import Header from '~/components/Header'
import Badge from '~/components/Badge'

import { type TTechnologyOnProject } from '~/types'

export async function loader({ params }: LoaderArgs) {
  const project = await getProject(params.slug || '')
  const html = marked(project?.content || '')
  console.log('CLOG ~ loader ~ html:', html)
  return json({ project, html })
}

export default function ProjectDetail() {
  const { project, html } = useLoaderData<typeof loader>()

  return (
    <>
      <Header />
      {project ? (
        <div className="min-h-screen">
          <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
            <h1 className="text-5xl font-bold">{project?.title}</h1>
            <h3 className="mt-3">{project?.description}</h3>
            {project.url ? (
              <Link
                className="text-base text-[#fca311] inline-block my-4"
                to={project.url}
                target="_blank"
              >
                {project.url}
              </Link>
            ) : null}
            <img
              className="md:max-w-sm"
              src={`/images/${project.images[0].fileName}`}
              alt={project.title}
            />
            <div>
              {project.technologies.map((item: TTechnologyOnProject) => (
                <Badge key={item.technology.id}>{item.technology.name}</Badge>
              ))}
            </div>
            <div
              className="my-3 markdown-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
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
