<template>
  <v-app>
    <v-main>
      <Popup/>
    </v-main>
  </v-app>
</template>

<script>
import Popup from './components/Popup';

export default {
  name: 'App',
  components: {
    Popup,
  },
};
</script>
