<template>
  <div id="container">
    <UnderConstruction />
  </div>
</template>

<script lang="ts">
import UnderConstruction from '@components/under_construction.vue';

export default {
  components: {
    UnderConstruction,
  },
};
</script>

<style>
#container {
  @apply h-screen w-screen;
}

#under-construction {
  @apply text-5xl;
  @apply font-extrabold;
  @apply p-5;
}
</style>
