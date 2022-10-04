<template>
  <v-app class="site-background">

    <navbar />

  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.site-background {
  background: linear-gradient(rgba(0, 29, 35, .8), rgba(0, 29, 35, .8)),
    url("@/assets/images/background.jpg") no-repeat center center;
  background-size: cover;
}
</style>