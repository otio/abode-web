<template>
  <div class="flex flex-col items-center justify-evenly p-16">
    <div class="flex flex-row justify-around w-screen px-16 xs:(flex-col)">
      <div
        id="ev-logos"
        class="flex flex-row justify-start xs:(flex-col justify-evenly items-center)"
      >
        <div class="object-cover xs:(mb-2rem)">
          <img alt="" src="~/static/EV-Logo-James.png" />
        </div>
        <div class="object-cover">
          <img alt="" src="~/static/EV-Logo-Shivani.png" />
        </div>
      </div>
      <!-- <CallToAction /> -->
    </div>
    <div
      class="flex flex-row justify-around items-center w-screen px-16 mt-16 sm:(flex-col-reverse) xs:(flex-col-reverse)"
    >
      <Logo />
      <div
        v-for="agent in agents"
        id="contact-cards"
        :key="agent.id"
        class="flex flex-col justify-between mb-12"
      >
        <SocialCard :card-info="agent" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      agents: [
        {
          id: 1,
          name: 'Jim Caldwell',
          phone: '(415)-407-2525',
          email: 'james.caldwell@evrealestate.com',
          dreNumber: '01305936',
          // profiles: []
        },
        {
          id: 2,
          name: 'Shivani Desai',
          phone: '(415)-632-7599',
          email: 'shivani.desai@evrealestate.com',
          dreNumber: '02042817',
          // profiles: []
        },
      ],
    }
  },
}
</script>

<style scoped></style>
