<template>
  <div id="navbar-default-content">
    <div id="left-container">
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
          <FontAwesome icon="envelope" />
          <a
            href="mailto:mitjans.coma@gmail.com"
            target="_blank"
          >
            mitjans.coma@gmail.com
          </a>
        </div>
      </div>
    </div>
    <div id="right-container">
      <div id="link-container">
        <FontAwesome
          :icon="['fab', 'linkedin']"
        />
        <a
          href="https://linkedin.com/in/cmitjans"
          target="_blank"
        >
          linkedin.com/in/cmitjans
        </a>
      </div>
      <div id="link-container">
        <FontAwesome
          :icon="['fab', 'gitlab']"
        />
        <a
          href="https://gitlab.com/cmitjans"
          target="_blank"
        >
          gitlab.com/cmitjans
        </a>
      </div>
      <div id="link-container">
        <FontAwesome
          :icon="['fab', 'github']"
        />
        <a
          href="https://github.com/mitjans"
          target="_blank"
        >
          github.com/mitjans
        </a>
      </div>
      <div id="link-container">
        <FontAwesome
          :icon="['fab', 'stack-overflow']"
        />
        <a
          href="https://stackoverflow.com/u/2148023"
          target="_blank"
        >
          stackoverflow.com/u/2148023
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
  @apply flex justify-between items-center pl-16 pr-16;
}

#left-container {
  @apply flex space-x-10 items-center;
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

#email-container {
  @apply flex items-center space-x-2 text-xl;
}

#email-container a {
  @apply underline;
}

#right-container {
  @apply flex flex-col space-y-4 text-white;
}

#link-container {
  @apply flex space-x-4 items-center text-xl;
}

#link-container a {
  @apply underline;
}

</style>
