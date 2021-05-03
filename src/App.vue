<template>
  <div id="container">
    <NavBar />
    <div
      id="content"
      :class="{
        scrolling
      }"
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus quam accusantium, saepe eius cum tempore quod nisi tempora facilis quasi, delectus ratione distinctio laborum maiores molestiae obcaecati dolor, modi excepturi.
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import NavBar from '@components/navbar/navbar.vue';

export default {
  components: {
    NavBar,
  },
  setup() {
    const scrolling = ref(false);
    document.addEventListener('scroll', () => {
      scrolling.value = window.scrollY > 0;
    });
    return {
      scrolling,
    };
  },
};
</script>

<style>
#container {
  @apply h-screen w-screen;
}

#content {
  @apply transition-all duration-500 w-80 pt-96 m-20;
  height: 1200px;
}

#content.scrolling {
  @apply pt-14;
}
</style>
