import { technologies, technologiesOnProject } from './seedData'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seed() {
  // delete all technologies
  await prisma.technologiesOnProject.deleteMany()
  await prisma.technology.deleteMany()
  // deleted all projects
  await prisma.project.deleteMany()
  // deleted all images
  await prisma.image.deleteMany()

  technologies.forEach(async (technology) => {
    await prisma.technology.create({
      data: {
        id: technology.id,
        name: technology.name,
        url: technology.url,
      },
    })
  })

  await prisma.project.create({
    data: {
      id: 2,
      title: 'Technické Laboratoře Opava',
      description: 'webová prezentace tlo.cz',
      url: '',
      slug: 'technicke-laboratorie-opava',
      content: 'TODO',
      images: {
        create: {
          id: 2,
          fileName: 'tlo.cz.webp',
          width: 800,
          height: 400,
        },
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.project.create({
    data: {
      id: 1,
      title: 'Foto Hustopeče',
      description: 'webová prezentace pro foto studio Hustopeče',
      url: 'https://fotohustopece.cz',
      slug: 'foto-hustopece',
      content: 'TODO',
      images: {
        create: {
          id: 1,
          fileName: 'fotohustopece.webp',
          width: 800,
          height: 400,
        },
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  // TODO - let's pretend it's not here and fix it soon
  setTimeout(() => {
    technologiesOnProject.forEach(async (technologyOnProject) => {
      await prisma.technologiesOnProject.create({
        data: {
          technologyId: technologyOnProject.technologyId,
          projectId: technologyOnProject.projectId,
        },
      })
    })
  }, 3000)

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
