import { technologies, technologiesOnProject, markdown } from './seedData'
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
      id: 7,
      title: 'Badminton Hustopeče',
      description: 'Badmingon sport club website',
      url: '',
      slug: 'badminton-hustopece',
      releaseDate: new Date('2011-04-17'),
      content: markdown.badmintonhustopece,
      images: {
        create: {
          id: 7,
          fileName: 'badmintonhustopece.webp',
          width: 800,
          height: 500,
        },
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.project.create({
    data: {
      id: 6,
      title: 'Villa Richter',
      description: 'Web presentation for a luxury Prague restaurant',
      url: '',
      slug: 'villarichter',
      releaseDate: new Date('2011-12-05'),
      content: markdown.villarichter,
      images: {
        create: {
          id: 6,
          fileName: 'villarichter.webp',
          width: 800,
          height: 500,
        },
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.project.create({
    data: {
      id: 5,
      title: 'My Flatshare',
      description: 'Web appliction for flat sharing',
      url: '',
      slug: 'myflatshare',
      releaseDate: new Date('2012-03-27'),
      content: markdown.myflatshare,
      images: {
        create: {
          id: 5,
          fileName: 'myflatshare.webp',
          width: 800,
          height: 500,
        },
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.project.create({
    data: {
      id: 4,
      title: 'My Way Alaska',
      description: 'Web presentation for a B&B in Alaska',
      url: '',
      slug: 'mywayalaska',
      releaseDate: new Date('2011-05-11'),
      content: markdown.mywayalaska,
      images: {
        create: {
          id: 4,
          fileName: 'mywayalaska.webp',
          width: 800,
          height: 500,
        },
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.project.create({
    data: {
      id: 3,
      title: 'Magická noc',
      description: 'Web presentation for a charity event',
      url: '',
      slug: 'magicka-noc',
      releaseDate: new Date('2010-11-14'),
      content: markdown.magickanoc,
      images: {
        create: {
          id: 3,
          fileName: 'magickanoc.webp',
          width: 800,
          height: 500,
        },
      },

      createdAt: new Date(),
      updatedAt: new Date(),
    },
  })

  await prisma.project.create({
    data: {
      id: 2,
      title: 'Technické Laboratoře Opava',
      description: 'Wordpress web presentation tlo.cz',
      url: '',
      slug: 'technicke-laboratorie-opava',
      releaseDate: new Date('2011-07-14'),
      content: markdown.tlo,
      images: {
        create: {
          id: 2,
          fileName: 'tlo.cz.webp',
          width: 800,
          height: 500,
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
      description: 'Photography studio website with administration',
      url: 'https://fotohustopece.cz',
      slug: 'foto-hustopece',
      content: markdown.fotohustopece,
      releaseDate: new Date('2023-03-27'),
      images: {
        create: {
          id: 1,
          fileName: 'fotohustopece.webp',
          width: 800,
          height: 500,
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
