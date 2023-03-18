type TProjectPreview = {
  title: string
  desc: string
  image: string
  slug: string
}

export default function ProjectPreview({
  title,
  desc,
  image,
  slug,
}: TProjectPreview) {
  return (
    <section>
      <img className="md:max-w-sm" src={`./images/${image}`} alt={title} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-base">{desc}</p>
      <a className="text-base text-[#fca311]" href={`/projects/${slug}`}>
        Read more...
      </a>
    </section>
  )
}
