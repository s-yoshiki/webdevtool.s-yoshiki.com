<template>
  <v-container>
    <v-row dense class="d-inline-block mx-auto" v-for="item in apps" v-bind:key="item.title" style="width:100%">
      <v-col cols="12">
        <v-card>
          <v-card-title class="headline">
            <nuxt-link :to="item.to" style="color:#000;" class="card-title">{{item.title}}</nuxt-link >
          </v-card-title>
          <v-card-subtitle>{{item.description}}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data() {
    return {
      apps: []
    };
  }
};
</script>

<style>
.card-title {
  text-decoration: none;
  color:#000;
}
</style>