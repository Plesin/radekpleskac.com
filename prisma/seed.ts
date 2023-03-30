import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seed() {
  // deleted all projects
  await prisma.project.deleteMany()
  // deleted all images
  await prisma.image.deleteMany()

  await prisma.image.create({
    data: {
      id: 1,
      fileName: 'fotohustopece.webp',
      width: 800,
      height: 400,
    },
  })

  await prisma.image.create({
    data: {
      id: 2,
      fileName: 'tlo.cz.webp',
      width: 800,
      height: 400,
    },
  })

  await prisma.technology.create({
    data: {
      id: 1,
      name: 'Laravel',
      url: 'https://laravel.com',
    },
  })

  await prisma.technology.create({
    data: {
      id: 2,
      name: 'Vue.js',
      url: 'https://vuejs.org',
    },
  })

  await prisma.technology.create({
    data: {
      id: 3,
      name: 'Wordpress',
      url: 'https://wordpress.org',
    },
  })

  await prisma.technology.create({
    data: {
      id: 4,
      name: 'jQuery',
      url: 'https://jquery.com',
    },
  })

  await prisma.project.create({
    data: {
      id: 2,
      title: 'Technické Laboratoře Opava',
      description: 'webová prezentace tlo.cz',
      url: '',
      slug: 'technicke-laboratorie-opava',
      content: 'TODO',

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

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.imagesOnProject.create({
    data: {
      imageId: 1,
      projectId: 1,
    },
  })

  await prisma.imagesOnProject.create({
    data: {
      imageId: 2,
      projectId: 2,
    },
  })

  await prisma.technologiesOnProject.create({
    data: {
      technologyId: 1,
      projectId: 1,
    },
  })

  await prisma.technologiesOnProject.create({
    data: {
      technologyId: 2,
      projectId: 1,
    },
  })

  await prisma.technologiesOnProject.create({
    data: {
      technologyId: 3,
      projectId: 2,
    },
  })

  await prisma.technologiesOnProject.create({
    data: {
      technologyId: 4,
      projectId: 2,
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
