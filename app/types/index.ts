import {
  type Project,
  type TechnologiesOnProject,
  type Technology,
  type Image,
} from "@prisma/client";
// TODO - not happy about all this type extending but works for now

export type TTechnologyOnProject = TechnologiesOnProject & {
  technology: Technology;
};

export interface IProjectPreviewProps extends Project {
  images: Image[];
  technologies: TTechnologyOnProject[];
}
