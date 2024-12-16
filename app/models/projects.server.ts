import { prisma } from "~/db.server";
import { type Project } from "prisma/prisma-client";

export async function getProject(slug: Project["slug"]) {
  return await prisma.project.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      title: true,
      description: true,
      url: true,
      content: true,
      slug: true,
      releaseDate: true,
      images: {
        select: {
          fileName: true,
        },
      },
      technologies: {
        include: {
          technology: true,
        },
      },
    },
  });
}

export async function getProjects(limit: number = 3) {
  // TODO not ideal sinc the structure is nested, images.image etc, figure out later
  return await prisma.project.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      url: true,
      content: true,
      slug: true,
      releaseDate: true,
      images: {
        select: {
          fileName: true,
        },
      },
      technologies: {
        include: {
          technology: true,
        },
      },
    },
    orderBy: {
      releaseDate: "desc",
    },
    take: limit,
  });
}
