<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col>
          <!-- Spinner Start -->
         <!--  <div id="spinner"
            class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
              <div class="spinner-grow text-primary" role="status"></div>
          </div> -->
          <!-- Spinner End -->
        </v-col>
      </v-row>

      <navbar />
    </v-container>

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
