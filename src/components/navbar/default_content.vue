<template>
  <div id="navbar-default-content">
    <img
      id="profile-image"
      src="@assets/images/profile.jpeg"
    >
  </div>
</template>

<script>
export default {

};
</script>

<style>
#navbar-default-content {
  @apply pl-20 pr-20;
}

#profile-image {
  @apply rounded-full w-80 h-80 shadow-xl;
}
</style>
