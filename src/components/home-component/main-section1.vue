<template>
  <!-- section 1 starts-->
  <section id="section1" class="container">
    <div class="card">
      <div class="card-image">
        <img src="@/assets/sec-01.png" />
      </div>
      <div class="card-container">
        <p class="card-title">section 1</p>
        <ul class="card-content">
          <li>
            <p class="contnet-head">Population</p>
            <p class="contnet-body">Total (1,415,872), Rank (40th)</p>
          </li>
          <li>
            <p class="contnet-head">Dimensions</p>
            <p class="contnet-body">
              Length 1,522 mi (2,450 km) . Width n/a mi (n/a km)
            </p>
          </li>
          <li>
            <p class="contnet-head">Language</p>
            <p class="contnet-body">Official languages English, Hawaiian</p>
          </li>
          <li>
            <p class="contnet-head">Largest city</p>
            <p class="contnet-body">The capital (Honolulu)</p>
          </li>
          <li>
            <p class="contnet-head">Largest metro</p>
            <p class="contnet-body">The largest metro in Island of O`ahu</p>
          </li>
          <li>
            <p class="contnet-head">Elevation</p>
            <p class="contnet-body">Highest elevation 13,796 ft (4,205.0 m)</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "main-app",
  data() {
    return {
      checkBox: false,
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
// section 1 starts
.card {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto;
  .card-image {
    img {
      width: 100%;
      height: auto;
      padding: 0 15px 0 0;
    }
  }

  .card-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    .card-title {
      text-align: start;
      font-size: $fontTitle;
      text-transform: capitalize;
      margin-bottom: 5px;
    }
    .card-content {
      flex-basis: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      li {
        display: flex;
        margin-top: 5px;
      }
      p {
        text-align: start;
        font-weight: bold;
        &:first-child {
          color: gray;
          flex-basis: 30%;
          margin-right: 10px;
        }
        &:last-child {
          flex-basis: 70%;
        }
      }
    }
  }
}
@media only screen and (max-width: 400px) {
  .card {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    .card-image {
      img {
        padding: 0;
      }
    }
  }
}
</style>
