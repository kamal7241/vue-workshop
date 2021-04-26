<template>
  <footer>
    <div class="container">
      <p>all right reserved copyright @2021</p>
      <ul>
        <li><a>sitmap</a></li>
        <li><a>terms and conditions</a></li>
        <li><a>privacy</a></li>
        <li><a>help</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: "footer-app",
};
</script>
<style lang="scss" scoped>
footer {
  background-color: black;
  .container {
    margin: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    color: white;
    align-items: center;
    & > p:first-child {
      text-transform: capitalize;
    }
    ul {
      list-style: none;
      width: 50%;
      display: flex;
      justify-content: flex-end;
      li {
        padding: 10px 0px 10px 10px;
        margin-left: 5px;
        a {
          text-decoration: underline;
          cursor: pointer;
          text-transform: capitalize;
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      width: 100%;
    }
  }
  @media only screen and (max-width: 576px) {
    .container {
      flex-direction: column;
      ul {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        li {
          margin: 0;
          // padding-left: 0;
        }
      }
    }
  }
}
</style>
