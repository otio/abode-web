<template>
  <div id="meet-team" class="flex flex-col items-center justify-center my-24">
    <div class="flex flex-row items-center justify-center self-stretch mb-16">
      <h2 class="hidden">Meet the Abode Team</h2>
      <p class="flex items-center mr-8 font-display text-6xl">Meet the</p>
      <div class="flex flex-row items-center">
        <img alt="" class="mr-1" src="~/static/abode-minimal-logo.svg" />
        <p class="font-display text-6xl">bode Team</p>
      </div>
    </div>
    <div class="flex flex-row justify-center items-start self-stretch mx-36">
      <img alt="" class="mr-16" src="~/static/team-intro-photo.png" />
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-start pb-16">
          <h2 class="font-secondary text-5xl pb-16">
            James Caldwell &amp; Shivani Desai
          </h2>
          <p class="font-body text-3xl leading-loose">
            Bespoke - a special experience tailored for each client. WE are not
            all about numbers, it is about a life experience that works for you.
            The number of bedrooms or baths is important "necessary but not
            sufficient" as they say. It's all about the lifestyle each property
            and community has to offer and what it can be for you. "Home" is a
            place to either build a legacy or enjoy one already created.
          </p>
        </div>
        <button class="rounded bg-firebrick p-1.5rem cursor-pointer">
          <p class="text-white text-lg">MEET THE TEAM</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MeetTeam',
}
</script>

<style scoped></style>
