import { type Technology, type TechnologiesOnProject } from "@prisma/client";

const commonWordpressTech = (projectId: number) => [
  {
    technologyId: 3,
    projectId,
  },
  {
    technologyId: 10,
    projectId,
  },
  {
    technologyId: 9,
    projectId,
  },
  {
    technologyId: 4,
    projectId,
  },
];

const commonWebTech = (projectId: number) => [
  {
    technologyId: 11,
    projectId,
  },
  {
    technologyId: 12,
    projectId,
  },
  {
    technologyId: 13,
    projectId,
  },
];

const technologies: Technology[] = [
  {
    id: 1,
    name: "Laravel",
    url: "https://laravel.com",
  },
  {
    id: 2,
    name: "Vue.js",
    url: "https://vuejs.org",
  },
  {
    id: 3,
    name: "Wordpress",
    url: "https://wordpress.org",
  },
  {
    id: 4,
    name: "jQuery",
    url: "https://jquery.com",
  },
  {
    id: 5,
    name: "web.components",
    url: "https://developer.mozilla.org/en-US/docs/Web/Web_Components",
  },
  {
    id: 6,
    name: "Playwright",
    url: "https://playwright.dev",
  },
  {
    id: 7,
    name: "Pure.css",
    url: "https://purecss.io/",
  },
  {
    id: 8,
    name: "Bootstrap",
    url: "https://getbootstrap.com/",
  },
  {
    id: 9,
    name: "MySQL",
    url: "https://www.mysql.com/",
  },
  {
    id: 10,
    name: "PHP",
    url: "https://www.php.net/",
  },
  {
    id: 11,
    name: "Javascript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: 12,
    name: "HTML",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: 13,
    name: "CSS",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

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
  ...commonWordpressTech(2),
  // magicka-noc
  ...commonWordpressTech(3),
  // mywayalaska
  ...commonWordpressTech(4),
  // villarichter.cz
  ...commonWebTech(5),
  // myflatshare.com
  ...commonWebTech(6),
  // badmintohustopece.cz
  ...commonWordpressTech(7),
  // shambala.cz
  ...commonWordpressTech(8),
  // prospokojenyzivot.cz
  ...commonWordpressTech(9),
  // studiomaar.cz
  ...commonWordpressTech(10),
];

const markdown = {
  fotohustopece: `
# Project description
## Frontend - public
The user facing frontend of this project is very lightweight with no large UI libraries. consisting of mostly blade templates, small css library and a couple of web components.
The emphasis was on core web vitals (98-96-100-100 score) and SEO and fast page load on mobile as well as desktop.
## Frontend - admin 
There is also administration UI developed with Vue.js and twitter bootstrap.

## Backend
The Backend stack was mostly driven by existing hosting and my desire to learn the Laravel framework.
`.trim(),
  tlo: `
# Project description
A multilanguage Wordpress web presentation optimized for performance via caching.
## My work
- Creating a custom theme based on design
- Generating graphics from psd
- HTML/CSS/Javascript
## Design
[rawen.net](https://rawen.net)
`.trim(),
  magickanoc: `
# Project description
A charity Wordpress presentation, created over a weekend as a replacement developer.
## My work
- Creating a custom theme based on design
- Generating graphics from psd
- HTML/CSS/Javascript
## Design
[rawen.net](https://rawen.net)
`.trim(),
  mywayalaska: `
# Project description
A web presentation for bed and breakfast accomodation in Alaska. Translated into 4 languages.
## My work
- Creating a custom theme based on design
- Generating graphics from psd
- HTML/CSS/Javascript
## Design
[rawen.net](https://rawen.net)
`.trim(),
  myflatshare: `
# Project description
A web application allowing users to register flats for rent or rent them.
## My work
- Creating UI based on design provided
- HTML/CSS/Javascript
## Design
[mobileinternet.cz](http://www.mobileinternet.cz/)
`.trim(),
  villarichter: `
# Project description
Web presentation for a luxury Prague restaurant.
## My work
- Creating UI based on design provided
- HTML/CSS/Javascript
## Design
[mobileinternet.cz](http://www.mobileinternet.cz/)
`.trim(),
  badmintonhustopece: `
# Project description
Web presentation for a badminton club. The page included information about the club, current posts a calendar of events and a gallery.
## My work
- UI Design
- Creating a WP theme
- HTML/CSS/Javascript/PHP
`.trim(),
  shambala: `
# Project description
A multilanguage Wordpress web presentation optimized for performance via caching.
## My work
- Creating a custom theme based on design
- Generating graphics from psd
- HTML/CSS/Javascript
## Design
[rawen.net](https://rawen.net)
`.trim(),
  prospokojenyzivot: `
# Project description
A multilanguage Wordpress web presentation optimized for performance via caching.
## My work
- Creating a custom theme based on design
- Generating graphics from psd
- HTML/CSS/Javascript
## Design
[rawen.net](https://rawen.net)
`.trim(),
  studiomaar: `
# Project description
A Wordpress web presentation optimized for performance via caching.
## My work
- Creating a custom theme based on design
- Generating graphics from psd
- HTML/CSS/Javascript
## Design
[rawen.net](https://rawen.net)
`.trim(),
};

export { technologies, technologiesOnProject, markdown };
