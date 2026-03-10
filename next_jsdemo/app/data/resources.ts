export interface Resource {
  slug: string;
  name: string;
  description: string;
  url: string;
  category: string;
}

export const resources: Resource[] = [
  {
    slug: "react-docs",
    name: "React Documentation",
    description:
      "The official React documentation. Learn React from scratch with interactive examples, detailed API references, and best-practice guides for building modern user interfaces.",
    url: "https://react.dev",
    category: "Framework",
  },
  {
    slug: "tailwind",
    name: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup. Rapidly build modern websites without ever leaving your HTML.",
    url: "https://tailwindcss.com",
    category: "Styling",
  },
  {
    slug: "nextjs",
    name: "Next.js",
    description:
      "The React framework for production. Next.js gives you the best developer experience with all the features you need — hybrid rendering, route handlers, middleware, and more.",
    url: "https://nextjs.org",
    category: "Framework",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    description:
      "A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale. Catch errors early and enjoy a richer editing experience.",
    url: "https://www.typescriptlang.org",
    category: "Language",
  },
  {
    slug: "vscode",
    name: "Visual Studio Code",
    description:
      "A lightweight but powerful source code editor with built-in support for JavaScript, TypeScript, Node.js, and a rich ecosystem of extensions for any language.",
    url: "https://code.visualstudio.com",
    category: "Tool",
  },
  {
    slug: "github",
    name: "GitHub",
    description:
      "The world's leading software development platform. Host and review code, manage projects, and build software alongside millions of developers worldwide.",
    url: "https://github.com",
    category: "Platform",
  },
  {
    slug: "vercel",
    name: "Vercel",
    description:
      "The platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration. Deploy Next.js apps with zero configuration.",
    url: "https://vercel.com",
    category: "Platform",
  },
  {
    slug: "mdn-web-docs",
    name: "MDN Web Docs",
    description:
      "The definitive resource for web standards documentation. Comprehensive references and guides for HTML, CSS, JavaScript, and Web APIs maintained by Mozilla.",
    url: "https://developer.mozilla.org",
    category: "Documentation",
  },
];
