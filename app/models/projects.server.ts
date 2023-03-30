import { prisma } from '~/db.server'
import { type Project } from 'prisma/prisma-client'

export async function getProject(slug: Project['slug']) {
  return await prisma.project.findUnique({
    where: {
      slug,
    },
    include: {
      images: {
        include: {
          image: true,
        },
      },
      technologies: {
        include: {
          technology: true,
        },
      },
    },
  })
}

export async function getProjects() {
  // TODO not ideal sinc the structure is nested, images.image etc, figure out later
  return await prisma.project.findMany({
    include: {
      images: {
        include: {
          image: true,
        },
      },
      technologies: {
        include: {
          technology: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}
