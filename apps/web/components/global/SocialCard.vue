<template>
  <div
    class="flex flex-col items-start justify-center my-4rem sm:(mx-1rem items-center) xs:(mx-1rem items-center)"
  >
    <p class="sm:(text-center) xs:(text-center)">
      {{ socialCard.name }}<br />
      {{ socialCard.phone }}<br />
      {{ socialCard.email }}
    </p>
    <div class="flex items-center justify-end">
      <!-- <a href="" class="">
        <img
          alt=""
          class="vector-two"
          src="https://static.overlay-tech.com/assets/a299b0ae-30a7-45c9-8804-5a5adadd92e2.svg"
        />
      </a> -->
      <!-- <a :href="socialCard.profiles.fb" class="logo-facebook">
        <img
          alt=""
          class="vector-two"
          src="https://static.overlay-tech.com/assets/c5dcaae9-476e-4ef7-bc71-c0f51358efba.svg"
        />
      </a>
      <a :href="socialCard.profiles.twitter" class="logo-twitter">
        <img
          alt=""
          class="vector-two"
          src="https://static.overlay-tech.com/assets/0ad2cfff-b4df-4ecc-846b-2f9c6eeff05f.svg"
        />
      </a>
      <a :href="socialCard.profiles.instagram" class="logo-instagram">
        <img
          alt=""
          class="vector-2"
          src="https://static.overlay-tech.com/assets/84d735fd-03e0-47d6-a4b4-69b4ad1338d7.svg"
        />
      </a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialCard',
  props: {
    cardInfo: {
      type: Object,
      default: () => ({
        name: 'Agent Name',
        phone: '(555) 555-5555',
        email: 'agent@agency.email',
        profiles: [
          { linkedIn: 'https://www.linkedin.com/' },
          { fb: 'https://www.facebook.com/' },
          { twitter: 'https://twitter.com/' },
          { instagram: 'https://www.instagram.com/' },
        ],
      }),
    },
  },
  data() {
    return {
      socialCard: {
        name: this.cardInfo?.name,
        phone: this.cardInfo?.phone,
        email: this.cardInfo?.email,
        profiles: [
          // { linkedIn: this.cardInfo.profiles.linkedIn },
          // { fb: this.cardInfo.profiles.fb },
          // { twitter: this.cardInfo.profiles.twitter },
          // { instagram: this.cardInfo.profiles.instagram },
        ],
      },
    }
  },
}
</script>

<style scoped>
.social-icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.logo-linkedin {
  margin-right: 24px;
  padding: 2.5px;
  display: flex;
  align-items: center;
  width: 35px;
  height: 35px;
}
.vector-two {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
}
.logo-facebook {
  margin-right: 24px;
  padding: 2.61px 2.5px 2.6px;
  display: flex;
  align-items: center;
  width: 35px;
  height: 34.79px;
}
.logo-twitter {
  margin-right: 24px;
  padding: 5px 1.25px;
  display: flex;
  align-items: center;
  width: 37.5px;
  height: 30px;
}
.logo-instagram {
  width: 40px;
  height: 40px;
}
</style>
