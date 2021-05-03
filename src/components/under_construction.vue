<template>
  <div id="under-construction_container">
    <h1>
      Coming soon
    </h1>
    <h2>
      by Carles Mitjans
    </h2>
  </div>
</template>

<script>
export default {

};
</script>

<style>
#under-construction_container {
  @apply flex flex-col justify-center text-center space-y-4 bg-gray-600 w-full h-full;
}

#under-construction_container h1 {
  @apply w-full text-5xl text-white font-extrabold;
}

#under-construction_container h2 {
  @apply w-full text-2xl text-white font-thin;
}

img {
  @apply w-1/2;
}
</style>
