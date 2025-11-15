// El archivo `_includes/base.vto` contiene el HTML base. El contenido de este archivo va en la etiqueta `main`
export const layout = "base.vto";
// El título de la pestaña del navegador. El contenido de esta variable va en la etiqueta `title`
export const title = "Portafolio";

// Items del portafolio (excepto el CV)
export const portfolio = [
  {
    name: "Iguana page",
    figure:
      `<img src="/assets/img/iguana.png" alt="Una imagen del proyecto de Iguana Page">`,
    description:
      "Hecho para el desafío de flexbox. Un prototipo de una página informativa sobre iguanas",
  },
  {
    name: "Cuppon",
    figure:
      `<img src="/assets/img/cuppon.png" alt="Una imagen del proyecto Cuppon">`,
    description:
      "Hecho para el desafío de Bootstrap. Una página de venta de productos",
  },
  {
    name: "CV Git",
    figure: `<img src="/assets/img/cv-git.png">`,
    description: "Un ejemplo de CV administrado por Git",
    link: "https://github.com/SilverTke/cv-dela",
  },
];

// Esos argumentos están de relleno jaja, y esa cadena tiene HTML dentro
export default async ({ comp }: Lume.Data, _filters: Lume.Helpers) => `
    <header class="pt-4 mx-5">
      <h1 class="text-4xl font-bold">Portafolio</h1>
    </header>
    <main class="text-xl mx-5 flex-grow">
      <p>Este es mi portafolio con los proyectos que he hecho hasta ahora en el curso
      de desarrollo full-stack</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${(await Promise.all(portfolio.map(comp.project))).join("\n")}
      </div>
    </main>
`;
