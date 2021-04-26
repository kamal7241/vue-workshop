<template>
  <!-- section 2  starts-->
  <section id="section2" class="container">
    <p class="title">section 2</p>
    <div class="card-collabse">
      <form class="form-group">
        <input
          class="card-checkbox"
          id="checkId"
          ref="checkBoxRef"
          type="checkbox"
          :checked="checkBox"
          @click="toggleCheckBox"
        />
        <label class="inlinelabel" for="checkId">1779</label>
      </form>
      <p class="card-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod
        dolorem optio, repellendus possimus, hic consequatur aperiam vero velit
        recusandae facere a ducimus. Totam a quis ad, quasi aliquam excepturi!
      </p>
      <transition name="fade">
        <ul class="card-body" @click="test" v-show="checkBox">
          <li v-for="(item, index) in items" :key="index" class="card-item">
            <span>{{ item }}</span>
            <span class="arrow">
              <span class="arrow-head"></span>
            </span>
          </li>
        </ul>
      </transition>
      <span v-show="checkBox" class="line-indicator"></span>
    </div>
  </section>
</template>
<script>
export default {
  name: "main-app",
  data() {
    return {
      checkBox: false,
      items: [1997, 1998, 1779, 1774, 1820],
    };
  },
  methods: {
    toggleCheckBox() {
      this.checkBox = !this.checkBox;
    },
  },
};
</script>
<style lang="scss" scoped>
$section2Color: #0a527b;
$fontTitle: 3em;
$fontSubTitle: 2em;
$secPadding: 2em;
// section2 starts
// title starts
.title {
  font-size: $fontTitle;
  text-transform: capitalize;
  text-align: start;
}
.card-collabse {
  position: relative;
  z-index: 1;
  // padding: $secPadding;

  // form style
  .form-group {
    display: grid;
    grid-template-columns: 100px 1fr;
    justify-items: start;
    align-items: center;
    position: relative;
    .card-checkbox {
      all: unset;
      display: inline-block;
      background-color: white;
      border: 1px solid $section2Color;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      position: relative;
      box-sizing: border-box;
      &:checked::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 60%;
        height: 60%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        background-color: $section2Color;
      }
    }
    label {
      color: $section2Color;
      font-weight: bold;
      font-size: 4em;
      font-family: "font-regular", serif;
    }
  }
  // description
  .card-description {
    padding-left: 100px;
    text-align: start;
    font-weight: bold;
    color: black;
  }
  // toggle body
  ul.card-body {
    display: flex;
    flex-direction: column;
    list-style: none;
    justify-content: start;
    li.card-item {
      margin: 10px 0px 10px 100px;
      color: $section2Color;
      font-size: $fontSubTitle;
      font-weight: bold;
      font-family: "font-regular", serif;
      position: relative;
      display: flex;
      align-items: center;
      &::before {
        content: "";
        width: 8px;
        height: 8px;
        background-color: #a3a3a3;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(calc(calc(-100px + 10px) - 50%), -50%);
      }
      .arrow {
        position: relative;
        display: flex;
        align-items: center;
        width: 15px;
        height: 15px;
        margin-left: 80px;
        .arrow-head {
          overflow: hidden;
          display: inline-block;
          width: 100%;
          height: 100%;
          position: relative;
          &::after {
            content: "";
            border: 2px solid $section2Color;
            width: 100%;
            height: 100%;
            transform: rotate(45deg);
            transform-origin: center;
            position: absolute;
            right: 50%;
            top: 0;
            box-sizing: border-box;
          }
        }
        &::before {
          content: "";
          width: 50px;
          border: 1px solid $section2Color;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translate(calc(-50px + calc(16px / 2)), -50%);
          box-sizing: border-box;
        }
      }
    }
  }
  .line-indicator {
    content: "";
    height: calc(100% - calc(calc(calc(36px / 2) + 10px) + calc(73px / 2)));
    border: solid black;
    border-width: 0 0 0 0.5px;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    opacity: 0.5;
    z-index: -1;
    transform: translate(calc(-50% + 10px), calc(73px / 2));
  }
  // transition effect
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>
