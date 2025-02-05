const actions = {
  index: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/index.ts`,
    templateFile: `plop/index.ts.hbs`,
  },
  component: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
    templateFile: `plop/component.tsx.hbs`,
  },
  styles: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/{{pascalCase name}}.module.scss`,
    templateFile: `plop/styles.scss.hbs`,
  },
  types: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/types.ts`,
    templateFile: `plop/types.ts.hbs`,
  },
  utils: {
    type: "add",
    path: `{{destinationpath}}/{{pascalCase name}}/utils.ts`,
    templateFile: `plop/utils.ts.hbs`,
  },
};

export default function (plop) {
  plop.setGenerator("component", {
    description: "empty component",
    prompts: [
      {
        type: "input",
        default: "src/components",
        name: "destinationpath",
        message: "Destination path",
      },
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
    ],
    actions: [
      actions.component,
      actions.index,
      actions.styles,
      actions.types,
      actions.utils,
    ],
  });
};
