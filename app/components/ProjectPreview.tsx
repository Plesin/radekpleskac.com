import { Link } from '@remix-run/react'
import {
  type Project,
  type TechnologiesOnProject,
  type Technology,
  type ImagesOnProject,
  type Image,
} from '@prisma/client'
import Badge from './Badge'

// TODO - not happy about all this type extending but works for now

type TechnologyOnProject = TechnologiesOnProject & {
  technology: Technology
}

type ImageOnProject = ImagesOnProject & {
  image: Image
}

interface IProjectPreviewProps {
  project: Project
  technologies: TechnologyOnProject[]
  images: ImageOnProject[]
}

export default function ProjectPreview(props: IProjectPreviewProps) {
  // TODO find out how to fix the missing images
  const { project, images, technologies } = props
  const firstImg = images[0]?.image

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mb-8">
      <div>
        <img
          className="md:max-w-sm"
          src={`./images/${firstImg.fileName}`}
          alt={project.title}
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-base">{project.description}</p>
        <div>
          {technologies.map((item: TechnologyOnProject) => (
            <Badge key={item.technology.id}>{item.technology.name}</Badge>
          ))}
        </div>
        <Link
          className="text-base text-[#fca311]"
          to={`/projects/${project.slug}`}
        >
          project detail
        </Link>
      </div>
    </section>
  )
}
