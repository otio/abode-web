<template>
    <div>
         <div class="jim-social">
          <p class="menu-item">
            James Caldwell<br />
            &#43;1 415 407 2525<br />
            james.caldwell&#64;evrealestate.com
          </p>
          <div class="social-icons">
            <div class="logo-linkedin">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/a299b0ae-30a7-45c9-8804-5a5adadd92e2.svg"
              />
            </div>
            <div class="logo-facebook">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/c5dcaae9-476e-4ef7-bc71-c0f51358efba.svg"
              />
            </div>
            <div class="logo-twitter">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/0ad2cfff-b4df-4ecc-846b-2f9c6eeff05f.svg"
              />
            </div>
            <img
              alt=""
              class="logo-instagram"
              src="https://static.overlay-tech.com/assets/84d735fd-03e0-47d6-a4b4-69b4ad1338d7.svg"
            />
          </div>
        </div>
        <div class="shivani-social">
          <p class="menu-item-two">
            Shivani Desai <br />
            &#43;1 415 632 7599<br />
            shivani.desai&#64;evrealestate.com
          </p>
          <div class="social-icons">
            <div class="logo-linkedin">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/6ef978c2-dc37-4433-914c-76dcd37a66b0.svg"
              />
            </div>
            <div class="logo-facebook">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/7de84ccd-4cc9-4eeb-8efb-677280d2e145.svg"
              />
            </div>
            <div class="logo-twitter">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/f02df7f4-a8f6-4de8-8d61-00cdac20a18b.svg"
              />
            </div>
            <img
              alt=""
              class="logo-instagram"
              src="https://static.overlay-tech.com/assets/faac359c-82d9-4ae9-a813-c97dc86e4b66.svg"
            />
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'SocialCard',
        data() {
            return {
                socialCards: [
                    {
                        name: '',
                        phone: '',
                        email: '',
                        profiles: [
                            { linkedIn: '', icon: '' },
                            { fb: '', icon: '' },
                            { twitter: '', icon: '' },
                            { instagram: '', icon: '' }
                        ]
                    }
                ]
            }
        },
    }
</script>

<style scoped>
.jim-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  left: -88.5px;
  top: 0;
}
.menu-item {
  max-width: 383px;
  color: var(--black-secondary);
  margin-bottom: 25px;
  font-family: var(--inter-24-regular-family);
  font-size: var(--inter-24-regular-size);
  font-weight: var(--inter-24-regular-weight);
  line-height: var(--inter-24-regular-line-height);
}
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
.shivani-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.menu-item-two {
  max-width: 364px;
  color: var(--black-secondary);
  margin-bottom: 25px;
  font-family: var(--inter-24-regular-family);
  font-size: var(--inter-24-regular-size);
  font-weight: var(--inter-24-regular-weight);
  line-height: var(--inter-24-regular-line-height);
}

</style>