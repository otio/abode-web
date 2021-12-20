<template>
  <div class="flex flex-col items-center justify-center py-24">
    <div
      class="flex flex-row items-center justify-center self-stretch mb-16 py-8"
    >
      <p class="flex items-center mr-8 font-display text-6xl">Meet the</p>
      <div class="flex flex-row items-center">
        <img
          alt=""
          class="mr-1"
          src="https://static.overlay-tech.com/assets/a239be1d-75cb-4e8f-aa80-2efcbfc8150a.svg"
        />
        <p class="font-display text-6xl">bode Team</p>
      </div>
    </div>
    <div class="flex flex-row justify-center items-center self-stretch mx-36">
      <img
        alt=""
        class="rounded-sm mr-16"
        src="https://static.overlay-tech.com/assets/ebd04f40-388f-4e34-b679-4f3569ddb4ae.png"
      />
      <div class="">
        <div class="">
          <h2 class="text-5xl">James Caldwell &amp; Shivani Desai</h2>
          <p class="">
            Bespoke - a special experience tailored for each client. WE are not
            all about numbers, it is about a life experience that works for you.
            The number of bedrooms or baths is important “necessary but not
            sufficient” as they say. It’s all about the lifestyle each property
            and community has to offer and what it can be for you. “Home” is a
            place to either build a legacy or enjoy one already created.
          </p>
        </div>
        <button class="">
          <p class="">MEET THE TEAM</p>
        </button>
      </div>
    </div>
  </div>
  <!-- <div class="meet-team">
    <div class="meet-team-heading">
      <p class="intro-words">Meet the</p>
      <div class="logo-text-combo">
        <img
          alt=""
          class="abode-minimal-logo"
          src="https://static.overlay-tech.com/assets/a239be1d-75cb-4e8f-aa80-2efcbfc8150a.svg"
        />
        <p class="section-heading">bode Team</p>
      </div>
    </div>
    <div class="team-content">
      <img
        alt=""
        class="portrait-right"
        src="https://static.overlay-tech.com/assets/ebd04f40-388f-4e34-b679-4f3569ddb4ae.png"
      />
      <div class="team-intro-text">
        <div class="text-section">
          <h2 class="names-heading">James Caldwell &amp; Shivani Desai</h2>
          <p class="team-chaser">
            Bespoke - a special experience tailored for each client. WE are not
            all about numbers, it is about a life experience that works for you.
            The number of bedrooms or baths is important “necessary but not
            sufficient” as they say. It’s all about the lifestyle each property
            and community has to offer and what it can be for you. “Home” is a
            place to either build a legacy or enjoy one already created.
          </p>
        </div>
        <button class="meet-team-button">
          <p class="button-text">MEET THE TEAM</p>
        </button>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  name: 'MeetTeam',
}
</script>

<style scoped>
.portrait-right {
  width: 26.67%;
  align-self: stretch;
  margin-right: 87px;
  box-shadow: 0 0 32px 0 var(--transparent-black);
  border-radius: 3px;
  object-fit: cover;
}
.team-intro-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-section {
  margin-bottom: 54px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 486px;
}
.names-heading {
  color: rgba(0, 0, 0, 1);
  margin-bottom: 44px;
  letter-spacing: 0.75px;
  font-family: var(--hanuman-60-regular-family);
  font-size: var(--hanuman-60-regular-size);
  font-weight: var(--hanuman-60-regular-weight);
  line-height: var(--hanuman-60-regular-line-height);
}
.team-chaser {
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: 400;
  line-height: 56px;
  color: rgba(0, 0, 0, 1);
  align-self: stretch;
  text-align: justify;
  letter-spacing: 1px;
}
.meet-team-button {
  background-color: var(--primary-default);
  border-radius: 3px;
  padding: 20px 20.87px;
  display: flex;
  align-items: center;
  height: 32px;
  width: 233.26px;
  cursor: pointer;
}
.button-text {
  color: var(--grayscale-off-white);
  flex: 1;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0.75px;
  font-family: var(--acme-gothic-24-bold-family);
  font-size: var(--acme-gothic-24-bold-size);
  font-weight: var(--acme-gothic-24-bold-weight);
  line-height: var(--acme-gothic-24-bold-line-height);
}
</style>
