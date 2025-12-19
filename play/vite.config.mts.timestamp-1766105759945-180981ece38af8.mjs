// vite.config.mts
import path from "path";
import { defineConfig, loadEnv } from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/vite@5.4.21_@types+node@22.19.3_sass@1.96.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vi_b3d6c181fa943050068cdbfa800ee577/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/@vitejs+plugin-vue-jsx@4.2._6a089e1f496f03013b21479055e26fc0/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import Components from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/unplugin-vue-components@0.2_166167fa5ae812283bdadbf5bceb2f76/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/unplugin-vue-components@0.2_166167fa5ae812283bdadbf5bceb2f76/node_modules/unplugin-vue-components/dist/resolvers.js";
import Inspect from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/vite-plugin-inspect@0.8.9_r_ee64bc8aba21b7b8c1ba013abc45995d/node_modules/vite-plugin-inspect/dist/index.mjs";
import mkcert from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/vite-plugin-mkcert@1.17.9_v_739e6ef0d4c8e40ba51ef9ada76832f3/node_modules/vite-plugin-mkcert/dist/mkcert.mjs";
import { glob } from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/node_modules/.pnpm/tinyglobby@0.2.15/node_modules/tinyglobby/dist/index.mjs";
import {
  epPackage,
  epRoot,
  getPackageDependencies,
  pkgRoot,
  projRoot
} from "file:///D:/%E5%AD%A6%E4%B9%A0/forks/element-plus/internal/build-utils/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\\u5B66\u4E60\\forks\\element-plus\\play";
var vite_config_default = defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  let { dependencies } = getPackageDependencies(epPackage);
  dependencies = dependencies.filter((dep) => !dep.startsWith("@types/"));
  const optimizeDeps = await glob(["dayjs/(locale|plugin)/*.js"], {
    cwd: path.resolve(projRoot, "node_modules")
  });
  return {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@use "/styles/custom.scss" as *;`,
          silenceDeprecations: ["legacy-js-api"]
        }
      }
    },
    resolve: {
      alias: [
        {
          find: /^element-plus(\/(es|lib))?$/,
          replacement: path.resolve(epRoot, "index.ts")
        },
        {
          find: /^element-plus\/(es|lib)\/(.*)$/,
          replacement: `${pkgRoot}/$2`
        }
      ]
    },
    server: {
      port: 3e3,
      host: true,
      https: !!env.HTTPS ? {} : false
    },
    build: {
      sourcemap: true
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        include: `${__vite_injected_original_dirname}/**`,
        resolvers: ElementPlusResolver({
          version: "2.0.0-dev.1",
          importStyle: "sass"
        }),
        dts: false
      }),
      mkcert(),
      Inspect()
    ],
    optimizeDeps: {
      include: ["vue", "@vue/shared", ...dependencies, ...optimizeDeps]
    },
    esbuild: {
      target: "chrome64"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcXHU1QjY2XHU0RTYwXFxcXGZvcmtzXFxcXGVsZW1lbnQtcGx1c1xcXFxwbGF5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxcdTVCNjZcdTRFNjBcXFxcZm9ya3NcXFxcZWxlbWVudC1wbHVzXFxcXHBsYXlcXFxcdml0ZS5jb25maWcubXRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi8lRTUlQUQlQTYlRTQlQjklQTAvZm9ya3MvZWxlbWVudC1wbHVzL3BsYXkvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgeyBFbGVtZW50UGx1c1Jlc29sdmVyIH0gZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzJ1xuaW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCdcbmltcG9ydCBta2NlcnQgZnJvbSAndml0ZS1wbHVnaW4tbWtjZXJ0J1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ3RpbnlnbG9iYnknXG5pbXBvcnQge1xuICBlcFBhY2thZ2UsXG4gIGVwUm9vdCxcbiAgZ2V0UGFja2FnZURlcGVuZGVuY2llcyxcbiAgcGtnUm9vdCxcbiAgcHJvalJvb3QsXG59IGZyb20gJ0BlbGVtZW50LXBsdXMvYnVpbGQtdXRpbHMnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhhc3luYyAoeyBtb2RlIH0pID0+IHtcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpLCAnJylcbiAgbGV0IHsgZGVwZW5kZW5jaWVzIH0gPSBnZXRQYWNrYWdlRGVwZW5kZW5jaWVzKGVwUGFja2FnZSlcbiAgZGVwZW5kZW5jaWVzID0gZGVwZW5kZW5jaWVzLmZpbHRlcigoZGVwKSA9PiAhZGVwLnN0YXJ0c1dpdGgoJ0B0eXBlcy8nKSkgLy8gZXhjbHVkZSBkdHMgZGVwc1xuICBjb25zdCBvcHRpbWl6ZURlcHMgPSBhd2FpdCBnbG9iKFsnZGF5anMvKGxvY2FsZXxwbHVnaW4pLyouanMnXSwge1xuICAgIGN3ZDogcGF0aC5yZXNvbHZlKHByb2pSb290LCAnbm9kZV9tb2R1bGVzJyksXG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBjc3M6IHtcbiAgICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcbiAgICAgICAgc2Nzczoge1xuICAgICAgICAgIC8vIGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIi9zdHlsZXMvY3VzdG9tLnNjc3NcIiBhcyAqO2AsXG4gICAgICAgICAgc2lsZW5jZURlcHJlY2F0aW9uczogWydsZWdhY3ktanMtYXBpJ10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbmQ6IC9eZWxlbWVudC1wbHVzKFxcLyhlc3xsaWIpKT8kLyxcbiAgICAgICAgICByZXBsYWNlbWVudDogcGF0aC5yZXNvbHZlKGVwUm9vdCwgJ2luZGV4LnRzJyksXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmaW5kOiAvXmVsZW1lbnQtcGx1c1xcLyhlc3xsaWIpXFwvKC4qKSQvLFxuICAgICAgICAgIHJlcGxhY2VtZW50OiBgJHtwa2dSb290fS8kMmAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBwb3J0OiAzMDAwLFxuICAgICAgaG9zdDogdHJ1ZSxcbiAgICAgIGh0dHBzOiAhIWVudi5IVFRQUyA/IHt9IDogZmFsc2UsXG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgIH0sXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICB2dWVKc3goKSxcbiAgICAgIENvbXBvbmVudHMoe1xuICAgICAgICBpbmNsdWRlOiBgJHtfX2Rpcm5hbWV9LyoqYCxcbiAgICAgICAgcmVzb2x2ZXJzOiBFbGVtZW50UGx1c1Jlc29sdmVyKHtcbiAgICAgICAgICB2ZXJzaW9uOiAnMi4wLjAtZGV2LjEnLFxuICAgICAgICAgIGltcG9ydFN0eWxlOiAnc2FzcycsXG4gICAgICAgIH0pLFxuICAgICAgICBkdHM6IGZhbHNlLFxuICAgICAgfSksXG4gICAgICBta2NlcnQoKSxcbiAgICAgIEluc3BlY3QoKSxcbiAgICBdLFxuXG4gICAgb3B0aW1pemVEZXBzOiB7XG4gICAgICBpbmNsdWRlOiBbJ3Z1ZScsICdAdnVlL3NoYXJlZCcsIC4uLmRlcGVuZGVuY2llcywgLi4ub3B0aW1pemVEZXBzXSxcbiAgICB9LFxuICAgIGVzYnVpbGQ6IHtcbiAgICAgIHRhcmdldDogJ2Nocm9tZTY0JyxcbiAgICB9LFxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFxUyxPQUFPLFVBQVU7QUFDdFQsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLGFBQWE7QUFDcEIsT0FBTyxZQUFZO0FBQ25CLFNBQVMsWUFBWTtBQUNyQjtBQUFBLEVBQ0U7QUFBQSxFQUNBO0FBQUEsRUFDQTtBQUFBLEVBQ0E7QUFBQSxFQUNBO0FBQUEsT0FDSztBQWZQLElBQU0sbUNBQW1DO0FBaUJ6QyxJQUFPLHNCQUFRLGFBQWEsT0FBTyxFQUFFLEtBQUssTUFBTTtBQUM5QyxRQUFNLE1BQU0sUUFBUSxNQUFNLFFBQVEsSUFBSSxHQUFHLEVBQUU7QUFDM0MsTUFBSSxFQUFFLGFBQWEsSUFBSSx1QkFBdUIsU0FBUztBQUN2RCxpQkFBZSxhQUFhLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLFNBQVMsQ0FBQztBQUN0RSxRQUFNLGVBQWUsTUFBTSxLQUFLLENBQUMsNEJBQTRCLEdBQUc7QUFBQSxJQUM5RCxLQUFLLEtBQUssUUFBUSxVQUFVLGNBQWM7QUFBQSxFQUM1QyxDQUFDO0FBRUQsU0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gscUJBQXFCO0FBQUEsUUFDbkIsTUFBTTtBQUFBO0FBQUEsVUFFSixxQkFBcUIsQ0FBQyxlQUFlO0FBQUEsUUFDdkM7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0w7QUFBQSxVQUNFLE1BQU07QUFBQSxVQUNOLGFBQWEsS0FBSyxRQUFRLFFBQVEsVUFBVTtBQUFBLFFBQzlDO0FBQUEsUUFDQTtBQUFBLFVBQ0UsTUFBTTtBQUFBLFVBQ04sYUFBYSxHQUFHLE9BQU87QUFBQSxRQUN6QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPLENBQUMsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJO0FBQUEsSUFDNUI7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxJQUFJO0FBQUEsTUFDSixPQUFPO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDVCxTQUFTLEdBQUcsZ0NBQVM7QUFBQSxRQUNyQixXQUFXLG9CQUFvQjtBQUFBLFVBQzdCLFNBQVM7QUFBQSxVQUNULGFBQWE7QUFBQSxRQUNmLENBQUM7QUFBQSxRQUNELEtBQUs7QUFBQSxNQUNQLENBQUM7QUFBQSxNQUNELE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFFQSxjQUFjO0FBQUEsTUFDWixTQUFTLENBQUMsT0FBTyxlQUFlLEdBQUcsY0FBYyxHQUFHLFlBQVk7QUFBQSxJQUNsRTtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
