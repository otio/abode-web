<template>
  <section class="section-space meet-team">
    <MeetTeamHeading></MeetTeamHeading>
    <div class="team-content">
      <img
        alt=""
        class="portrait-right"
        src="~/static/team-intro-photo.png"
      />
      <div class="team-intro-text">
        <div class="text-section">
          <h2 class="names-heading">
            James Caldwell &amp; Shivani Desai
          </h2>
          <p class="team-chaser">
            Bespoke - a special experience tailored for each
            client. WE are not all about numbers, it is
            about a life experience that works for you. The
            number of bedrooms or baths is important
            “necessary but not sufficient” as they say. It’s
            all about the lifestyle each property and
            community has to offer and what it can be for
            you. “Home” is a place to either build a legacy
            or enjoy one already created.
          </p>
        </div>
        <button class="meet-team-button">
          <p class="button-text">MEET THE TEAM</p>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import MeetTeamHeading from './MeetTeamHeading'
export default {
  name: "MeetTeam",
  components: {
    MeetTeamHeading
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.meet-team {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10rem;
}
.team-heading {
  height: 153px;
  align-self: stretch;
  margin-bottom: 96px;
  object-fit: cover;
}
.team-content {
  display: flex;
  align-items: center;
  justify-content: center;
}
.portrait-right {
  width: 30.14%;
  align-self: stretch;
  margin-right: 87px;
  box-shadow: 0 0 32px 0 $transparent-black;
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
}
.names-heading {
  width: 1100px;
  color: $black-1;
  margin-bottom: 44px;
  letter-spacing: 0.75px;
  @include hanuman-60-regular;
}
.team-chaser {
  max-width: 1100px;
  color: $black-1;
  text-align: justify;
  letter-spacing: 1px;
  @include roboto-30-regular;
}
.meet-team-button {
  background-color: $secondary-darkmode;
  border-radius: 3px;
  padding: 20px 32px;
  display: flex;
  align-items: center;
  // height: 32px;
  width: 15rem;
  cursor: pointer;
}
.button-text {
  color: $grayscale-off-white;
  flex: 1;
  align-self: stretch;
  text-align: center;
  letter-spacing: 0.75px;
  @include hanuman-20-bold;
}
</style>