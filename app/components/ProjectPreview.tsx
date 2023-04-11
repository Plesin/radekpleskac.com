import { Link } from '@remix-run/react'
import Badge from './Badge'

import { ArrowIcon } from './Icon'
import { getReleaseDate } from '~/utils'
import { type IProjectPreviewProps, type TTechnologyOnProject } from '~/types'

export default function ProjectPreview({
  project,
}: {
  project: IProjectPreviewProps
}) {
  const { images, technologies } = project
  const firstImg = images[0]

  let releasedDate = getReleaseDate(project.releaseDate)
  console.log('CLOG ~ releasedDate:', typeof project.releaseDate)

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 mb-8 bg-base text-dark rounded p-4">
      <div>
        <img
          className="rounded"
          src={`./images/${firstImg.fileName}`}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className="md:pl-4 relative">
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="leading-6">{project.description}</p>
        {releasedDate ? (
          <span className="text-xs text-gray-500 uppercase font-bold">
            Released: {releasedDate}
          </span>
        ) : null}
        <div className="py-2 my-2 border-t border-gray-300">
          {technologies.map((item: TTechnologyOnProject) => (
            <Badge key={item.technology.id}>{item.technology.name}</Badge>
          ))}
        </div>
        <Link
          className="inline-flex items-center text-sm text-primary absolute bottom-0 right-0"
          to={`/projects/${project.slug}`}
        >
          project detail <ArrowIcon />
        </Link>
      </div>
    </section>
  )
}
