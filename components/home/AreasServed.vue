<template>
  <div id="areas-served" class="flex flex-col mb-48">
    <p id="heading" class="font-secondary text-5xl pb-20 text-center">
      San Francisco Neighborhoods
    </p>
    <div id="row" class="flex flex-row justify-evenly">
      <div
        v-for="(area, index) in neighborhoods"
        id="neighborhood"
        :key="index"
        class="flex flex-col items-center"
      >
        <img id="area-image" alt="" :src="area.picture" class="pb-12" />
        <p id="area-label" class="font-secondary text-3xl">{{ area.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      neighborhoods: [
        {
          name: 'Sunset',
          picture:
            'https://static.overlay-tech.com/assets/182d2aeb-cb2d-40b2-9b58-607643febb8e.png',
        },
        {
          name: 'Noe Valley',
          picture:
            'https://static.overlay-tech.com/assets/182d2aeb-cb2d-40b2-9b58-607643febb8e.png',
        },
        {
          name: 'Bernal Heights',
          picture:
            'https://static.overlay-tech.com/assets/182d2aeb-cb2d-40b2-9b58-607643febb8e.png',
        },
      ],
    }
  },
}
</script>

<style scoped>
.areas-served {
  padding: 128.72px 96px 67.94px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading {
  height: 72px;
  width: 1171.64px;
  color: var(--black-2);
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 148.22px;
  letter-spacing: 0.75px;
  font-family: var(--acme-gothic-85-regular-family);
  font-size: var(--acme-gothic-85-regular-size);
  font-weight: var(--acme-gothic-85-regular-weight);
  line-height: var(--acme-gothic-85-regular-line-height);
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
}
.neighborhood {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 663.12px;
}
.neighborhood:not(:last-of-type) {
  margin-right: 114px;
}
.area-image {
  flex: 1;
  align-self: stretch;
  object-fit: cover;
}
.area-label {
  color: var(--black-2);
  align-self: stretch;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.75px;
  font-family: var(--hanuman-55-bold-family);
  font-size: var(--hanuman-55-bold-size);
  font-weight: var(--hanuman-55-bold-weight);
  line-height: var(--hanuman-55-bold-line-height);
}
</style>
