<template>
  <v-app>
     <Hearder/>
     <router-view path="$router.key"/>
  </v-app>
</template>

<script>
import Hearder from './components/Hearder.vue';
import './styles/global.css'
export default {
  name: 'App',

  components: {
    Hearder,
  },

  data: () => ({
    //
  }),
};
</script>
