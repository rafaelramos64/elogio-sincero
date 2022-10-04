<template>
  <v-container fluid class="pa-0">
    <v-row justify="space-around" class="header ma-0 px-12">
      <v-col cols="12" md="8" class="d-flex align-center pa-0">
        <v-icon small color="rgba(255,255,255,0.5)">mdi-map-marker</v-icon> <span class="mx-3">IFPI Campus - Picos-PI</span>
        <v-icon small color="rgba(255,255,255,0.5)">mdi-email</v-icon> <span class="ml-3">mambee@gmail.com</span>
      </v-col>

      <v-col cols="12" md="4" class="d-flex align-center justify-end pa-0">
        <span>Siga a Mambee:</span>
        <v-btn
          v-for="(icon, index) in icons" :key="index"
          icon
          class="header__icon mx-3"
          :href="icon.href"
          target="_blank"
        >
          <v-icon small>{{ icon.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="px-12">
      <v-col>
        <v-app-bar
          class="navbar"
          color="transparent"
          flat
        >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-toolbar-title>
            <v-btn text>
              <h1 class="navbar__logo"> Mambee </h1>
            </v-btn>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <a href="index.html" class="navbar__item">Home</a>
          <a href="about.html" class="navbar__item mx-5">About</a>
          <a href="causes.html" class="navbar__item">Causes</a>
          <a href="causes.html" class="navbar__item mx-5">Contact</a>

          <v-btn class="navbar__btn" outlined color="primary">
            Doar Agora
            <div class="navbar__currency-icon ml-3">
              <v-icon>mdi-currency-brl</v-icon>
            </div>
          </v-btn>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  data () {
    return {
      icons: [
        { icon: 'mdi-facebook', href: '' },
        { icon: 'mdi-twitter', href: '' },
        { icon: 'mdi-linkedin', href: 'https://www.linkedin.com/in/mambee-f%C3%A1brica-escola-de-software-b5bb161b0/' },
        { icon: 'mdi-instagram', href: 'https://instagram.com/mambeeifpi?igshid=YmMyMTA2M2Y=' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/sass/variables.scss";

.header {
  height: 40px;
  background-color: transparent !important;
  color: $header;
  border-bottom: 1px solid rgba(255, 255, 255, .07) !important;

  &__icon {
    color: $header !important;
    transition: 0.5s;

    &:hover {
      transform: scale(1.1);
      color: #fff !important;
    }
  }
}

.navbar {
  &__logo {
    font-size: 2.5rem;
    color: $primary;
  }

  &__item {
    color: #fff;
    transition: .5s;
    font-size: 1rem;
    font-family: Inter, sans-serif;
    font-weight: 500;

    &:hover {
      color: $primary;
      transform: scale(1.1);
    }
  }

  &__btn {
    height: 50px !important;
    width: 200px !important;
    padding: 0.5rem 1rem !important;
    font-weight: 500;
    transition: .5s;
    border-radius: 6px !important;
    font-size: 1.1rem;

    &:hover {
      background-color: $primary;
      color: #fff !important;
      border-color: $primary !important;
    }
  }

  &__currency-icon {
    background-color: #fff;
    padding: 0.3rem;
    border-radius: 50px;
    color: $primary;
  }
}
</style>