import { Link } from '@remix-run/react'
import Badge from './Badge'

import { type IProjectPreviewProps, type TTechnologyOnProject } from '~/types'

export default function ProjectPreview({
  project,
}: {
  project: IProjectPreviewProps
}) {
  // TODO find out how to fix the missing images
  const { images, technologies } = project
  const firstImg = images[0]
  // TODO move to utils or do some caching
  let releasedDate = null
  if (project.releaseDate) {
    const projectDate = new Date(project.releaseDate)
    const month = projectDate.toLocaleString('default', { month: 'short' })
    const year = projectDate.getFullYear()
    releasedDate = `${month} ${year}`
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 mb-8 bg-base text-dark rounded p-4">
      <div>
        <img
          className="md:max-w-sm"
          src={`./images/${firstImg.fileName}`}
          alt={project.title}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p>{project.description}</p>
        {releasedDate ? (
          <span className="text-sm">Released: {releasedDate}</span>
        ) : null}
        <div>
          {technologies.map((item: TTechnologyOnProject) => (
            <Badge key={item.technology.id}>{item.technology.name}</Badge>
          ))}
        </div>
        <Link className="text-sm text-light" to={`/projects/${project.slug}`}>
          project detail
        </Link>
      </div>
    </section>
  )
}
