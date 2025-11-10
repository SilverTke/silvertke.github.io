import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import { presetWind4 } from "unocss/preset-wind4";
import { presetIcons } from "unocss/preset-icons/browser";

const site = lume();

site.use(unocss({
  reset: "tailwind",
  options: {
    presets: [() =>
      presetIcons({
        collections: {
          // @ts-ignore Sí es una colección, cállate
          noto: () =>
            import("iconify/noto/icons.json", { with: { type: "json" } }).then((
              i,
            ) => i.default),
        },
      }), presetWind4],
    theme: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        success: "var(--color-success)",
      },
    },
  },
}));

site.add("style.css");

export default site;
