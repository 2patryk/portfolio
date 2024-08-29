import slugify from "slugify";

export const ROUTES = {
  HOME: "/",
  PROJECTS: "/projects",
};

export const getSlug = (path: string) =>
  slugify(path, { lower: true, remove: /[*+~.,()'"!:@]/g });
