<template>
  <div  @mousewheel="checkRoute" class="home">
    <home-header-component />
    <home-nav-bar />
    <home-main-component />
    <home-footer-component />
  </div>
</template>

<script>
import homeHeaderComponent from "@/components/home-component/header";
import homeNavBar from "@/components/home-component/nav-bar";
import homeMainComponent from "@/components/home-component/main";
import homeFooterComponent from "@/components/home-component/footer";
export default {
  name: "home-app",
  components: {
    homeHeaderComponent,
    homeMainComponent,
    homeFooterComponent,
    homeNavBar,
  },
  data() {
    return {};
  },
  methods: {
    checkRoute(e) {
      console.log(e);
    console.info("Home mounted", this.$route);
    console.info("Home mounted", this.$router);

    },
  },
  mounted() {
    console.info("Home mounted", this.$router);
    // let lastKnownScrollPosition = 0;
    // let ticking = false;
    // function doSomething(scrollPos) {
    //   // Do something with the scroll position
    //   console.log(scrollPos)
    // }
    // document.addEventListener("scroll", function (e) {
    //     console.log(e)
    //     lastKnownScrollPosition = window.scrollY;
    //     if (!ticking) {
    //       window.requestAnimationFrame(function () {
    //         doSomething(lastKnownScrollPosition);
    //         ticking = false;
    //       });

    //       ticking = true;
    //     }
    //   });
  },
};
</script>

<style lang="scss" scoped></style>
