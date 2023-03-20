import { Project, Image } from '@prisma/client'

export default function ProjectPreview(project: Project) {
  const { title, description, images, slug } = project
  return (
    <section>
      <img
        className="md:max-w-sm"
        src={`./images/${images[0]?.fileName}`}
        alt={title}
      />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-base">{description}</p>
      <a className="text-base text-[#fca311]" href={`/projects/${slug}`}>
        Read more...
      </a>
    </section>
  )
}
