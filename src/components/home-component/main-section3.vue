<template>
  <!-- section 3 starts -->
  <section id="section3" class="carousel-container">
    <p>section 3</p>
    <swiper navigation :thumbs="{ swiper: thumbsSwiper }">
      <swiper-slide v-for="image in images" :key="image.id"
        ><img class="img-selected" :src="image.url"
      /></swiper-slide>
    </swiper>
    <swiper
      :slides-per-view="4"
      :space-between="20"
      @slideChange="onSlideChange"
      :scrollbar="{ draggable: true }"
      :virtualIndex="index"
      @swiper="setThumbsSwiper"
      watch-slides-visibility
      watch-slides-progress
    >
      <swiper-slide v-for="image in images" :key="image.id"
        ><img class="img-swipe" :src="image.url"
      /></swiper-slide>
    </swiper>
  </section>
</template>
<script>
const axios = require("axios").default;
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Thumbs,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Virtual, Thumbs]);
export default {
  name: "app-section2",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      images: [],
      Swiper,
      SwiperSlide,
      thumbsSwiper: null,
    };
  },
  methods: {
    onSlideChange() {},
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
      // console.log("thumb:", this.thumbsSwiper);
    },

    async fetchData() {
      let res = await axios.get(
        "https://jsonplaceholder.typicode.com/photos?albumId=1"
      );
      if (res.status == 200) this.images = res.data;
      else alert("faild to get images please try again");
    },
  },
    mounted() {
    this.fetchData();
    // console.log("Current Swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>
<style lang="scss" scoped>
$section2Color: #0a527b;
$fontTitle: 3em;
$fontSubTitle: 2em;
$secPadding: 2em;
//section 3  starts
.carousel-container {
  padding: 2em;
  & > p:first-child {
    font-size: $fontTitle;
    text-transform: capitalize;
  }
  width: 70%;
  margin: auto;
  .img-swipe {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  .img-selected {
    width: 100%;
    // max-width: 100%;
    height: auto;
    max-height: 500px;
    border-radius: 20px;
  }
  .swiper-wrapper .swiper-slide-visible {
    opacity: 0.4;
  }
  .swiper-wrapper .swiper-slide-thumb-active {
    opacity: 1;
  }
}
</style>
