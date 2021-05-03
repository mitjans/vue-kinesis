<template>
  <div
    id="navbar-container"
    :class="{
      'full-screen': fullScreen,
      scrolling: !fullScreen && scrolling
    }"
  >
    <TransitionRoot
      id="navbar-welcome"
      :show="fullScreen"
      appear
      enter="transition-opacity duration-1000"
      enter-from="opacity-0"
      leave="transition-opacity duration-1000"
      leave-to="opacity-0"
    >
      <h1>Hello</h1>
      <h1>Stranger</h1>
    </TransitionRoot>

    <transition
      name="fade"
      class="absolute left-0 right-0"
    >
      <DefaultContent v-if="!fullScreen && !scrolling" />
    </transition>

    <transition
      name="fade"
      class="absolute left-0 right-0"
    >
      <ScrollingContent v-if="!fullScreen && scrolling" />
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import DefaultContent from '@components/navbar/default_content.vue';
import ScrollingContent from '@components/navbar/scrolling_content.vue';

export default {
  components: {
    TransitionRoot,
    DefaultContent,
    ScrollingContent,
  },
  props: {
    scrolling: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const fullScreen = ref(true);

    setTimeout(() => {
      fullScreen.value = false;
    }, 2000);

    return {
      fullScreen,
    };
  },

};
</script>

<style>
#navbar-container {
  @apply transition-all duration-500 top-0 fixed ease-in-out h-96 w-full bg-indigo-500 flex flex-col justify-center;
}

#navbar-container.scrolling {
  @apply h-14 bg-opacity-80 backdrop-filter backdrop-blur-md;
}

#navbar-container.full-screen {
  @apply h-full;
}

#navbar-welcome {
  @apply absolute transition-all duration-1000 flex flex-col w-full space-y-4;
}

#navbar-welcome h1 {
  @apply text-5xl font-bold text-white text-center;
}

.fade-enter-active {
  @apply transition-all duration-100 delay-100 ease-linear;
}

.fade-leave-active {
  @apply transition-all;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
