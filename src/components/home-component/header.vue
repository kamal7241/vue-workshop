<template>
  <header>
    <div class="image-container">
      <div>
        <p>
          <span> what </span> its like to travel to <span>hawaii</span> right
          now
        </p>
        <p><span>free</span><span>flights to remote workers</span></p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "header-app",
  data() {
    return {
      name: "header-app",
    };
  },
};
</script>

<style scoped lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&display=swap');

.image-container {
  height: 491px;
  width: 100%;
  background-image: linear-gradient(
      to right,
      rgba($color: black, $alpha: 0.6),
      transparent
    ),
    url("../../assets/logo.png");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
  position: relative;
  div {
    position: absolute;
    max-width: 80%;
    width: 420px;
    padding: 50px;
    top: 50%;
    left: 0%;
    transform: translate(0, -50%);

    p:first-child {
      text-align: start;
      font-family: "font-regular", serif;
      font-size: 3em;
      color: white;
      padding-bottom: 5px;
      span {
        text-transform: capitalize;
      }
      position: relative;
    }
    p:first-child::after {
      content: "";
      position: absolute;
      width: 100%;
      border: lightgray solid;
      border-width: 1px 0 0 0;
      bottom: 0;
      left: 0;
    }
    p:last-child {
      padding-top: 5px;
      text-align: start;
      font-size: 1.5em;
      color: white;
      span:first-child {
        text-transform: capitalize;
      }
      span::after {
        content: " ";
      }
    }
  }
}
</style>
