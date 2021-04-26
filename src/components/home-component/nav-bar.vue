<template>
  <nav>
    <ul>
      <li v-for="(link, index) in links" :key="index">
        <!-- <router-link  :class="{active:isActive}"  :to="{ hash: '#section1' ,}" on-complete="activeRoute" exact-path></router-link> -->
        <a :class="{ active: link.isActive }" @click="naveToSection(link)">{{
          link.name
        }}</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "app-nav-bar",
  data() {
    return {
      links: [
        { name: "section1", hash: "#section1", isActive: false },
        { name: "section2", hash: "#section2", isActive: false },
        { name: "section3", hash: "#section3", isActive: false },
      ],
      activeLink: undefined,
    };
  },
  methods: {
    activeRoute(link) {
      if (this.activeLink) this.activeLink.isActive = false;
      this.activeLink = link;
      this.activeLink.isActive = !link.isActive;
    },
    naveToSection(link) {
      this.$router.push(link.hash).then(() => {
        this.activeRoute(link);
      });
    },
    checkRoute() {
      if (window.scrollY >= 990) this.activeRoute(this.links[2]);
      else if (window.scrollY >= 807) this.activeRoute(this.links[1]);
      else if (window.scrollY >= 572) this.activeRoute(this.links[0]);
    },
  },
  mounted() {
    document.addEventListener("scroll", this.checkRoute);
    // this.$router.onReady(this.activeRoute)
  },
};
</script>
<style lang="scss" scoped>
nav {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
  ul {
    display: flex;
    list-style: none;
    border: solid black;
    color: grey;
    border-width: 0 0 0.5px;
  }
  li {
    flex-basis: calc(100% / 3);
    overflow: hidden;
  }
  a {
    display: inline-block;
    width: 100%;
    padding: calc(calc(99px - 18px) / 2) 0;
    text-decoration: none;
    background-color: white;
    position: relative;
    font-weight: 600;
    text-transform: capitalize;
    border: solid transparent;
    color: grey;
    border-width: 0 0 3px;
    cursor: pointer;
    &::after {
      content: "";
      border: 1px solid transparent;
      position: absolute;
      width: 100%;
      bottom: 0%;
      left: 0;
    }
    &.active {
      border: solid #0a527b;
      color: #0a527b;
      border-width: 0 0 3px;
    }
    &:hover {
      background-color: lightgray;
    }
  }
}
</style>
