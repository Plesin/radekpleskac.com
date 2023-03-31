import { type Technology, type TechnologiesOnProject } from '@prisma/client'

const technologies: Technology[] = [
  {
    id: 1,
    name: 'Laravel',
    url: 'https://laravel.com',
  },
  {
    id: 2,
    name: 'Vue.js',
    url: 'https://vuejs.org',
  },
  {
    id: 3,
    name: 'Wordpress',
    url: 'https://wordpress.org',
  },
  {
    id: 4,
    name: 'jQuery',
    url: 'https://jquery.com',
  },
  {
    id: 5,
    name: 'web.components',
    url: 'https://developer.mozilla.org/en-US/docs/Web/Web_Components',
  },
  {
    id: 6,
    name: 'Playwright',
    url: 'https://playwright.dev',
  },
  {
    id: 7,
    name: 'Pure.css',
    url: 'https://purecss.io/',
  },
  {
    id: 8,
    name: 'Bootstrap',
    url: 'https://getbootstrap.com/',
  },
  {
    id: 9,
    name: 'MySQL',
    url: 'https://www.mysql.com/',
  },
  {
    id: 10,
    name: 'PHP',
    url: 'https://www.php.net/',
  },
]

const technologiesOnProject: TechnologiesOnProject[] = [
  // fotohustopece.cz
  {
    technologyId: 1,
    projectId: 1,
  },
  {
    technologyId: 6,
    projectId: 1,
  },
  {
    technologyId: 9,
    projectId: 1,
  },
  {
    technologyId: 10,
    projectId: 1,
  },
  {
    technologyId: 2,
    projectId: 1,
  },
  {
    technologyId: 5,
    projectId: 1,
  },
  {
    technologyId: 7,
    projectId: 1,
  },
  {
    technologyId: 8,
    projectId: 1,
  },
  // tlo.cz
  {
    technologyId: 3,
    projectId: 2,
  },
  {
    technologyId: 10,
    projectId: 2,
  },
  {
    technologyId: 9,
    projectId: 2,
  },
  {
    technologyId: 4,
    projectId: 2,
  },
]

export { technologies, technologiesOnProject }
