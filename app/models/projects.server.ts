import { prisma } from '~/db.server'
import { type Project } from 'prisma/prisma-client'

export async function getProject(slug: Project['slug']) {
  return await prisma.project.findUnique({
    where: {
      slug,
    },
    include: {
      images: true,
    },
  })
}

export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      images: true,
    },
  })
}
