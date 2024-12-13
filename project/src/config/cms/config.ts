import { blogCollection } from './collections';

export const cmsConfig = {
  backend: {
    name: "git-gateway",
    branch: "main"
  },
  media_folder: "public/images/uploads",
  public_folder: "/images/uploads",
  collections: [
    blogCollection
  ]
};