<template>
  <div id="container">
    <NavBar :scrolling="scrolling" />
    <MainContent
      id="content"
      :class="{
        scrolling
      }"
    />
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

    document.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) {
        scrolling.value = true;
      } else if (window.pageYOffset === 0) {
        scrolling.value = false;
      }
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

#content {
  @apply transition-all duration-500 pt-96;
}

#content.scrolling {
  @apply pt-14;
}
</style>
