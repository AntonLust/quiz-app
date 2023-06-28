import postcssImport from "postcss-import";
import postcssPresetEnv from "postcss-preset-env";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
import autoprefixer from "autoprefixer";

export default {
  plugins: [
    postcssImport(),
    postcssPresetEnv({
      stage: 1,
      autoprefixer: {
        grid: true,
      },
    }),
    postcssFlexbugsFixes(),
    autoprefixer(),
  ],
};
