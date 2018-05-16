<template>
    <footer class="footer">
        <div class="container text-left" v-once>
            <ul>
                <li>
                    Copyright (c) 2018 &nbsp; 
                    <a href="https://github.com/zzzttt1017/tenseven" rel="nofollow" target="_blank" title="">{{codeVersion}}</a>
                    &nbsp;All Rights Reserved
                </li>
                <li class="sitemap">
                    <a href="http://www.miitbeian.gov.cn/" rel="nofollow" target="_blank">
                        {{systemConfig.data[0].registrationNo}}
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>
<script>
let packageJson = require("../../../package.json");

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Footer",
  async asyncData({ store, route }, config = {}) {
    const { params: path } = route;
    const base = {
      ...config,
      path
    };
    await store.dispatch("global/footerConfigs/getSystemConfig");
  },
  serverCacheKey: props => "footer",
  computed: {
    ...mapGetters({
      systemConfig: "global/footerConfigs/getSystemConfig"
    }),
    codeVersion() {
      return "十七 文创社区 " + packageJson.version;
    }
  }
};
</script>
<style lang="scss">

</style>
