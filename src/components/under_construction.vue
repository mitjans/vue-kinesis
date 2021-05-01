<template>
  <div id="under-construction_container">
    <h1>Under construction</h1>
    <img
      id="under-construction_image"
      src="@assets/images/under_construction.jpg"
    >
    <h2>By Carles Mitjans</h2>
  </div>
</template>

<script>
export default {

};
</script>

<style>
#under-construction_container {
  @apply flex flex-col items-center text-center space-y-4;
}

#under-construction_container h1 {
  @apply w-full bg-red-700 text-5xl text-white font-extrabold p-5;
}

img {
  @apply w-1/2;
}
</style>
