import { prisma } from '~/db.server'

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
