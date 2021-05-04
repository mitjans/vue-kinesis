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

#content {
  @apply transition-all duration-500 pt-96;
  height: 1100px;
}

#content.scrolling {
  @apply pt-14;
}
</style>
