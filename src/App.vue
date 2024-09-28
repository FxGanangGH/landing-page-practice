<template>
  <div
    class="flex size-full min-h-screen flex-col items-center bg-primary-violet bg-[url('/images/bg-mobile.svg')] bg-contain bg-no-repeat p-10 md:py-16 lg:py-20 desktop-lg:bg-cover xl:items-center xl:bg-[url('/images/bg-desktop.svg')]"
  >
    <div
      class="flex size-full max-w-80 flex-col items-center md:max-w-md lg:max-w-xl xl:w-11/12 xl:max-w-screen-2xl"
    >
      <header class="w-full">
        <img alt="logo" class="max-w-32 md:max-w-48 lg:max-w-56" src="/images/logo.svg" />
      </header>
      <main
        class="mt-14 flex w-full flex-col items-center md:mt-16 lg:mt-20 xl:mt-32 xl:flex-row xl:gap-x-20"
      >
        <img alt="mockup" class="xl:w-7/12" src="/images/illustration-mockups.svg" />
        <div
          class="relative mt-14 flex flex-col items-center md:mt-16 lg:mt-20 xl:mt-0 xl:w-5/12 xl:items-start 2xl:mb-20"
        >
          <h1
            class="text-center font-poppins text-2xl font-semibold text-white md:text-3xl lg:text-5xl xl:text-left xl:leading-[70px]"
          >
            Build The Community<br />
            Your Fans Will Love
          </h1>
          <p
            class="mt-8 max-w-80 text-center font-open-sans leading-6 text-white/80 md:mt-10 md:max-w-md md:text-lg lg:mt-16 lg:max-w-lg lg:text-2xl xl:mt-10 xl:max-w-none xl:text-left"
          >
            Huddle re-imagines the way we build communities. You have a voice, but so does
            your audience. Create connections with your users as you engage in genuine
            discussion.
          </p>
          <button
            class="mt-10 w-full max-w-60 rounded-full bg-white py-4 font-open-sans text-sm font-semibold text-primary-violet/80 hover:bg-primary-soft-magenta hover:text-white md:mt-12 md:text-base lg:mt-16 lg:max-w-80 lg:text-xl xl:mt-10"
          >
            Register
          </button>
          <div
            class="mt-16 flex items-center gap-x-5 xl:absolute xl:-bottom-32 xl:right-0"
          >
            <FontAwesomeIcon
              class="size-6 rounded-full border border-white p-3 text-white hover:border-primary-soft-magenta hover:text-primary-soft-magenta xl:size-7 xl:p-4"
              :icon="faFacebook"
            />
            <FontAwesomeIcon
              class="size-6 rounded-full border border-white p-3 text-white hover:border-primary-soft-magenta hover:text-primary-soft-magenta xl:size-7 xl:p-4"
              :icon="faTwitter"
            />
            <FontAwesomeIcon
              class="size-6 rounded-full border border-white p-3 text-white hover:border-primary-soft-magenta hover:text-primary-soft-magenta xl:size-7 xl:p-4"
              :icon="faInstagram"
            />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
</script>
