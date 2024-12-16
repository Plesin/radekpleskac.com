import { Link } from "@remix-run/react";
import Badge from "../Badge";

import { ArrowIcon } from "../Icon";
import { getReleaseDate } from "../../utils";
import { type IProjectPreviewProps, type TTechnologyOnProject } from "~/types";

export default function ProjectPreview({
  project,
}: {
  project: IProjectPreviewProps;
}) {
  const { images, technologies } = project;
  const firstImg = images[0];
  let releasedDate = getReleaseDate(project.releaseDate);

  return (
    <section className="mb-8 grid grid-cols-1 rounded bg-base p-4 text-dark sm:grid-cols-2">
      <div>
        <img
          className="rounded"
          src={`./images/${firstImg.fileName}`}
          alt={project.title}
          loading="lazy"
        />
      </div>
      <div className="relative md:pl-4">
        <h2 className="mb-2 text-2xl font-bold">{project.title}</h2>
        <p className="leading-6">{project.description}</p>
        {releasedDate ? (
          <span className="text-xs font-bold uppercase text-gray-500">
            Released: {releasedDate}
          </span>
        ) : null}
        <div className="my-2 border-t border-gray-300 py-2">
          {technologies.map((item: TTechnologyOnProject) => (
            <Badge key={item.technology.id}>{item.technology.name}</Badge>
          ))}
        </div>
        <Link
          className="absolute bottom-0 right-0 inline-flex items-center text-sm text-primary"
          to={`/projects/${project.slug}`}
        >
          project detail <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
