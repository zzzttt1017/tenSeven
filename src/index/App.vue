<style lang="scss">
@import "~front_public";
</style>
<template>
    <div id="app">
        <MyHeader v-if="$route.meta.typeId != 'adminlogin'" />
        <transition :name="transitionName" mode="out-in">
            <router-view :key="$route.fullPath" v-if="$route.meta.notKeepAlive" class="view"></router-view>
        </transition>
        <transition :name="transitionName" mode="out-in">
            <keep-alive>
                <router-view :key="$route.fullPath" v-if="!$route.meta.notKeepAlive" class="view"></router-view>
            </keep-alive>
        </transition>
        <MyFooter v-if="$route.meta.typeId != 'adminlogin'" />
    </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";

import MyHeader from "./components/header";
import MyFooter from "./components/Footer";

export default {
  name: "app",
  components: {
    MyHeader,
    MyFooter
  },
  data() {
    return {
      transitionName:''
    };
  },
  computed: {
    ...mapGetters({
      global: "global/getGlobal"
    }),
    ...mapState("appShell", ["pageTransitionName"]),
    key() {
      return this.$route.path.replace(/\//g, "_");
    },
    backend() {
      return this.$route.path.indexOf("backend") >= 0;
    },
    isLogin() {
      return this.$route.path === "/backend";
    }
  },
  methods: {
    handleBeforeEnter() {
      this.$store.dispatch("appShell/setPageSwitching", true);
    },
    handleAfterEnter() {
      this.$store.dispatch("appShell/setPageSwitching", false);
    },
    handleClickHeaderBack() {
      this.$router.go(-1);
    }
  },
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
};
</script>
