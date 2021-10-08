<template>
  <footer class="footer">
    <div class="cta">
      <img
        alt=""
        class="logo-james-1"
        src="https://static.overlay-tech.com/assets/d53fd679-0ea2-4ee2-a06c-02016fb4a2ae.png"
      /><img
        alt=""
        class="logo-james-1"
        src="https://static.overlay-tech.com/assets/104b6e72-5575-461f-9ca4-6eaf367dc92a.png"
      />
      <div class="column"></div>
      <div class="right-column">
        <p class="menu-item">
          Subscribe to receive your market report
        </p>
        <div class="subscription-container">
          <input
            class="input"
            placeholder="Email address"
          /><button class="button">
            <p class="label">Subscribe</p>
          </button>
        </div>
      </div>
    </div>
    <div class="footer-content-two">
      <div class="abode-logo">
        <div class="abode-letters">
          <img
            alt=""
            class="vector"
            src="https://static.overlay-tech.com/assets/24b1fc76-2f7e-421c-bd63-cc0fe7bec21e.svg"
          /><img
            alt=""
            class="bode-small"
            src="https://static.overlay-tech.com/assets/801201e2-def4-4a2b-8e5a-c2618feaad24.svg"
          />
        </div>
        <img
          alt=""
          class="real-estate"
          src="https://static.overlay-tech.com/assets/2b660851-ce7e-4aa9-8105-ff6874c8e0d3.svg"
        />
      </div>
      <div class="footer-content">
        <div class="jim-social">
          <p class="menu-item-two">
            James Caldwell<br />
            &#43;1 415 407 2525<br />
            james.caldwell&#64;evrealestate.com
          </p>
          <div class="footer-content">
            <div class="logo-linkedin">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/493601d0-3da4-4f10-ac7d-029972abbec8.svg"
              />
            </div>
            <div class="logo-facebook">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/aeadf1b1-ef4c-44bb-94bf-de6c8c602e74.svg"
              />
            </div>
            <div class="logo-twitter">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/4d7946e1-03fb-42c7-9726-58829365c481.svg"
              />
            </div>
            <img
              alt=""
              class="logo-instagram"
              src="https://static.overlay-tech.com/assets/5c6e538e-a6b5-4c06-aa60-82dacc5c4100.svg"
            />
          </div>
        </div>
        <div class="jim-social">
          <p class="menu-item-three">
            Shivani Desai <br />
            &#43;1 415 632 7599<br />
            shivani.desai&#64;evrealestate.com
          </p>
          <div class="footer-content">
            <div class="logo-linkedin">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/0eb45f27-1184-42db-a554-d387c6d3eaa3.svg"
              />
            </div>
            <div class="logo-facebook">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/d88ba6f1-002c-4ff7-bd24-c9c5c912a426.svg"
              />
            </div>
            <div class="logo-twitter">
              <img
                alt=""
                class="vector-two"
                src="https://static.overlay-tech.com/assets/c1fbb12d-e9c2-4e00-aea3-c40a0b9ef7a9.svg"
              />
            </div>
            <img
              alt=""
              class="logo-instagram"
              src="https://static.overlay-tech.com/assets/d13d2aaa-2ec1-4f94-a1fb-dd10a23a3942.svg"
            />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
@import "~/assets/main.scss";
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
}
.cta {
  margin-bottom: 56px;
  display: flex;
  align-items: flex-start;
}
.logo-james-1 {
  width: 250px;
  height: 61px;
  margin-right: 204px;
}
.column {
  width: 149px;
  height: 58px;
  margin-right: 204px;
}
.right-column {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.menu-item {
  color: $black-primary;
  align-self: stretch;
  text-align: right;
  margin-bottom: 24px;
  @include inter-24-bold;
}
.subscription-container {
  display: flex;
  align-items: flex-start;
  align-self: stretch;
}
.input {
  flex: 1;
  background-color: $secondary-light;
  margin-right: 8px;
  border-radius: 3px;
  padding: 14px 22px;
  border: 2px solid $grey-secondary;
  color: $grey-secondary;
  @include inter-16-regular;
}
.button {
  background-color: $secondary-darkmode;
  border-radius: 3px;
  padding: 16px 32px;
  display: flex;
  align-items: flex-start;
  cursor: pointer;
}
.label {
  color: $grayscale-off-white;
  @include inter-16-semibold;
}
.footer-content-two {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1717px;
}
.abode-logo {
  padding: 0 0 0.01px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.abode-letters {
  margin-bottom: 7px;
  padding: 0 133.18px 0 0;
  position: relative;
}
.vector {
  width: 100%;
  height: 100%;
}
.bode-small {
  width: 126.69px;
  height: 50.42px;
  position: absolute;
  right: 0.01px;
  bottom: -0.01px;
}
.real-estate {
  width: 140.27px;
  height: 18.89px;
}
.footer-content {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.jim-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  &:not(:last-of-type) {
    margin-right: 200px;
  }
}
.menu-item-two {
  max-width: 383px;
  color: $black-secondary;
  margin-bottom: 25px;
  @include inter-24-regular;
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
.menu-item-three {
  max-width: 364px;
  color: $black-secondary;
  margin-bottom: 25px;
  @include inter-24-regular;
}
</style>