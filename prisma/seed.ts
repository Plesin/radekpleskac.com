import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  // deleted all projects
  await prisma.project.deleteMany()
  // deleted all images
  await prisma.image.deleteMany()

  await prisma.project.create({
    data: {
      id: 1,
      title: 'Foto Hustopeče',
      description: 'webová prezentace pro foto studio Hustopeče',
      slug: 'foto-hustopece',
      content: 'TODO',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.project.create({
    data: {
      id: 2,
      title: 'Technické Laboratoře Opava',
      description: 'webová prezentace tlo.cz',
      slug: 'technicke-laboratorie-opava',
      content: 'TODO',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.image.create({
    data: {
      id: 1,
      fileName: 'fotohustopece.webp',
      width: 800,
      height: 400,
      projectId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.image.create({
    data: {
      id: 2,
      fileName: 'tlo.cz.webp',
      width: 800,
      height: 400,
      projectId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  console.log(`Database has been seeded. 🌱`)
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
