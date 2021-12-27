<template>
  <div id="areas-served">
    <p id="heading">San Francisco Neighborhoods</p>
    <div id="row">
      <div id="neighborhood">
        <img
          id="area-image"
          alt=""
          src="https://static.overlay-tech.com/assets/182d2aeb-cb2d-40b2-9b58-607643febb8e.png"
        />
        <p id="area-label">Sunset</p>
      </div>
      <div id="neighborhood">
        <img
          id="area-image"
          alt=""
          src="https://static.overlay-tech.com/assets/455b96ad-7fa0-4759-bdbd-f3c67145df67.png"
        />
        <p id="area-label">Noe Valley</p>
      </div>
      <div id="neighborhood">
        <img
          id="area-image"
          alt=""
          src="https://static.overlay-tech.com/assets/33588001-9214-4594-9785-49f2e6b34f41.png"
        />
        <p id="area-label">Bernal Heights</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
