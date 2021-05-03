<template>
  <div id="navbar-default-content">
    <img
      id="profile-image"
      src="@assets/images/profile.jpeg"
    >
    <div id="profile-info">
      <h1>Carles Mitjans Coma</h1>
      <h2>Software Engineer</h2>
      <div id="email-container">
        <MailIcon
          id="mail-icon"
          size="0.5x"
        />
        <a href="mailto:mitjans.coma@gmail.com">
          mitjans.coma@gmail.com
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { MailIcon } from '@heroicons/vue/solid';

export default {
  components: {
    MailIcon,
  },
};
</script>

<style>
#navbar-default-content {
  @apply flex space-x-10 items-center pl-20 pr-20;
}

#profile-image {
  @apply rounded-full w-80 h-80 shadow-xl;
}

#profile-info {
  @apply flex flex-col space-y-2 text-white;
}

#profile-info h1 {
  @apply text-5xl font-bold;
}

#profile-info h2 {
  @apply text-2xl font-semibold;
}

#email-container {
  @apply flex space-x-2;
}

#mail-icon {
  @apply inline-flex;
}

#email-container a {
  @apply text-xl underline;
}
</style>
