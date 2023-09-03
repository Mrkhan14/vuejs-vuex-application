<template>
  <div>
    <div class="container">
      <Navbar></Navbar>
    </div>

    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import { Navbar } from '@/components'
import { RouterView } from 'vue-router';
export default {
  name: 'KhanVue3App',
  components: { Navbar },
  data() {
    return {};
  },

  mounted() {

  },

  methods: {

  },
};
</script>

<style lang="scss" scoped></style>