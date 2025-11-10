export const layout = "base.vto";
export const title = "Portafolio";

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
];

export default (data: Lume.Data, filters: Lume.Helpers) => `
    <header class="pt-4 mx-5">
      <h1 class="text-4xl font-bold">Portafolio</h1>
    </header>
    <main class="text-xl mx-5 flex-grow">
      <p>Este es mi portafolio con los proyectos que he hecho hasta ahora en el curso
      de desarrollo full-stack</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      ${
  portfolio.map((it) => `
      <div class="card bg-base-200 shadow-sm">
        <figure>
        ${it.figure}
        </figure>
        <p class="card-title">${it.name}</p>
        <div class="card-body">
          <p>${it.description}</p>
        </div>
      </div>
`).join("\n")
}
      <div class="card bg-base-200 shadow-sm">
        <figure>
          <img src="/assets/img/cv-git.png">
        </figure>
        <p class="card-title">CV Git</p>
        <div class="card-body">
          <p>Un CV hecho con una plantilla para el desafío de Git</p>
        </div>
        <a href="https://github.com/SilverTke/cv-dela" class="card-footer text-primary hover:underline">Link al repositorio</a>
      </div>
    </div>
    </main>
`;
