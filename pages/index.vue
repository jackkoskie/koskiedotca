<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <main>
    <section id="hero">
      <div class="container">
        <div
          class="d-flex flex-column justify-content-center pt-5 pt-lg-0"
          id="hero-text"
        >
          <h1 class="text-white pt-5 pt-lg-0">Hey, I'm Jack!</h1>
          <h3 class="text-white fw-lighter col-md-6">
            A high school student, web developer, musician,
            and more!
          </h3>
        </div>
      </div>
    </section>

    <section id="contact">
      <div class="container py-5">
        <h1>Contact Me</h1>
        <h3 class="fw-normal col-md-5 my-4">
          Have any questions? Just want to chat?
        </h3>
        <p>
          The best way to reach me is by email. I do my best to reply to
          everything I get within 24-48 hours. Please don't hesitate to reach
          out!
        </p>
        <p class="">
          My email is <a href="mailto:jack@koskie.ca">jack@koskie.ca</a>.
        </p>
        <p>
          Want to know what I'm up to? Check out my <NuxtLink to="/now">/now</NuxtLink> page!
        </p>
      </div>
    </section>
  </main>
</template>

<style>
#hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0.473), rgba(0, 0, 0, 0.473)),
    url('/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
}

#hero-text {
  height: 100vh;
}

#hero-text h1 {
  font-size: 4rem;
}

#contact {
  min-height: fit-content;
}
</style>
