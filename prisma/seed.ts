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
