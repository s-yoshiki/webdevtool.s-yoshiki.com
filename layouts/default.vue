<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :right="right"
      fixed
      app
    >
      <v-list>
        <template v-for="parent in items">
          <v-list-item
            v-for="item in parent"
            :key="item.id"
            :to="item.to"
            router
            exact
          >
            <span>{{ item.title }}</span>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app flat color="">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="font-weight-bold" v-text="getTitle()" />
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>mdi-repeat</v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app class="darken-2">
      <span class="gray"
        >&copy; {{ new Date().getFullYear() }} webdevtool.s-yoshiki.com</span
      >
    </v-footer>
  </v-app>
</template>

<script>
import { getByCategoryAsNestArray, getInfoById } from "~/data/urlist";

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: getByCategoryAsNestArray(),
      miniVariant: false,
      right: true,
      rightDrawer: false,
      // title: "うぇぶでゔツール",
    };
  },
  methods: {
    getTitle() {
      return `${getInfoById($nuxt.$route.name).title} - webdevtool`;
    },
  },
  created() {},
  watch: {
    $route: function (to, from) {
      if (to.path !== from.path) {
        this.title = this.getTitle();
      }
    },
  },
};
</script>

<style>
/* span {
    font-size: 0.8em;
  } */
</style>