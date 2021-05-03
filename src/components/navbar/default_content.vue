<template>
  <div id="navbar-default-content">
    <img
      id="profile-image"
      src="@assets/images/profile.jpeg"
    >
    <div id="profile-info">
      <div id="name-container">
        <h1>Carles Mitjans Coma</h1>
        <h2>Software Engineer</h2>
      </div>
      <div id="email-container">
        <FontAwesomeIcon icon="envelope" />
        <a href="mailto:mitjans.coma@gmail.com">
          mitjans.coma@gmail.com
        </a>
      </div>
      <div id="phone-container">
        <FontAwesomeIcon icon="phone" />
        <a href="tel:+34690136640">
          +34 690 136 640
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style>
#navbar-default-content {
  @apply flex space-x-10 items-center pl-16 pr-16;
}

#profile-image {
  @apply rounded-full w-80 h-80 shadow-xl;
}

#profile-info {
  @apply flex flex-col space-y-5 text-white;
}

#profile-info h1 {
  @apply text-5xl font-bold;
}

#profile-info h2 {
  @apply text-2xl font-semibold;
}

#name-container {
  @apply flex flex-col space-y-2;
}

#email-container, #phone-container {
  @apply flex items-center space-x-2;
}

#mail-icon {
  @apply inline-flex;
}

#email-container, #phone-container a {
  @apply text-xl underline;
}
</style>
