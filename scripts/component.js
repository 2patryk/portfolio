/**
 * Script to create new components.
 * @arg ComponentName - required
 * To create a COMPONENT: npm run new-component ComponentName
 */
const path = require("path");
const fs = require("fs/promises");
const { styleText } = require("util");
const maxstache = require("maxstache");
const argv = require("minimist")(process.argv.slice(2));

const TYPE = "component";
const COMPONENTS_FOLDER = "./../components/";

if (!argv._[0]) {
  throw new Error(`Error: Must give a ${TYPE} name to create.`);
}

const words = (input) =>
  String(input)
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/([A-Z])([A-Z][a-z])/g, "$1 $2")
    .split(/[^A-Za-z0-9]+/)
    .filter(Boolean)
    .map((word) => word.toLowerCase());

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const pascalCase = (input) => words(input).map(capitalize).join("");
const paramCase = (input) => words(input).join("-");
const capitalCase = (input) => words(input).map(capitalize).join(" ");

const name = pascalCase(argv._[0]);
const targetFolder = `${name}/`;

async function template(input, output) {
  const data = {
    pascal: pascalCase(name),
    param: paramCase(name),
    title: capitalCase(name),
    depth: targetFolder ? "../" : "",
  };
  const str = await fs.readFile(input, "utf8");
  await fs.writeFile(output, maxstache(str, data));
}

async function write(dir) {
  try {
    await fs.mkdir(dir, { recursive: true });

    const templatesDir = path.resolve(__dirname, `templates/${TYPE}`);
    await template(
      path.resolve(templatesDir, "Component.txt"),
      path.resolve(dir, `${name}.tsx`)
    );
    await template(
      path.resolve(templatesDir, "Component.styles.txt"),
      path.resolve(dir, `${name}.styles.ts`)
    );
    console.info(styleText("greenBright", `Created new ${name} ${TYPE} at ${dir}`));
  } catch (error) {
    console.error(styleText("redBright", "Write error"), error);
  }
}

const cwd = process.cwd();
const dir = path.resolve(__dirname, [COMPONENTS_FOLDER, targetFolder].join(""));

fs.stat(dir).then(
  () => console.info(styleText("red", `Path at ${path.relative(cwd, dir)} already exists!`)),
  () => write(dir)
);
