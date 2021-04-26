<template>
  <main>
    <!-- section 1 starts-->
    <app-section1/>
    <app-section2/>
    <app-section3/>
  </main>
</template>

<script>
// components
import AppSection1 from "./main-section1";
import AppSection2 from "./main-section2";
import AppSection3 from "./main-section3";

export default {
  name: "main-app",
  components: {
    AppSection1 ,
    AppSection2 ,
    AppSection3 ,
  },
};
</script>

<style lang="scss" scoped>
$section2Color: #0a527b;
$fontTitle: 3em;
$fontSubTitle: 2em;
$secPadding: 2em;
.container {
  width: 85%;
  margin: auto;
}
@media only screen and (max-width: 768px) {
  .container {
    width: 95%;
  }
}
main {
  background-color: #f8f8f8;
  > section {
    border: solid #eaeaea;
    border-width: 0 0 1px 0;
  }


}
</style>
