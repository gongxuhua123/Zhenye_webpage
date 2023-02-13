import { defineConfig } from 'umi';
import routes from "./routes";
import Settings from "./defaultSetting";

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{
    locale: false,
    siderWidth: 250,
    ...Settings
  },
  routes,
  fastRefresh: {},
});
