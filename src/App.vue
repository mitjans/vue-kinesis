<template>
  <div id="container">
    <NavBar :scrolling="scrolling" />
    <div
      id="main-content-container"
      :class="{
        scrolling
      }"
    >
      <MainContent />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import NavBar from '@components/navbar/navbar.vue';
import MainContent from '@components/web_content/main_content.vue';

export default {
  components: {
    NavBar,
    MainContent,
  },
  setup() {
    const scrolling = ref(false);

    document.addEventListener('scroll', () => {
      scrolling.value = window.pageYOffset > 0;
    });

    return {
      scrolling,
    };
  },
};
</script>

<style>
#container {
  @apply h-screen;
}

#main-content-container {
  @apply transition-all duration-500 pt-96;
}

#main-content-container.scrolling {
  @apply pt-14;
}
</style>
