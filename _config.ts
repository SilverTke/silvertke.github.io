import lume from "lume/mod.ts";
import unocss from "lume/plugins/unocss.ts";
import { presetWind4 } from "unocss/preset-wind4";

const site = lume();

site.use(unocss({
  reset: "tailwind",
  options: {
    presets: [presetWind4],
  },
}));

site.add("style.css");

export default site;
