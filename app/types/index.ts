import {
  type Project,
  type TechnologiesOnProject,
  type Technology,
  type ImagesOnProject,
  type Image,
} from '@prisma/client'
// TODO - not happy about all this type extending but works for now

export type TTechnologyOnProject = TechnologiesOnProject & {
  technology: Technology
}

export type TImageOnProject = ImagesOnProject & {
  image: Image
}

export interface IProjectPreviewProps {
  project: Project
  technologies: TTechnologyOnProject[]
  images: TImageOnProject[]
}
