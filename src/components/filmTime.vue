<template lang="html">
  <div class="filmPage">
    <table class="filmTable">
      <tbody>
        <tr>
          <td class="filmPic" rowspan="3">
            <img src="https://www.in89pier2.com.tw/movie_img/bo2/385/385_big"/>
          </td>
          <td>
            <div class="selectStyle">
              <select name="" id=""></select>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="selectStyle">
              <select name="" id=""></select>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="selectStyle">
              <select name="" id=""></select>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scope>
.filmPage {
  .filmTable {
    border: 1px solid #fed855;
    border-collapse: collapse;
    .filmPic {
      width: 180px;
      padding: 10px;
      border-right: 1px solid #fed855;
      img {
        width: 160px;
      }
    }
    .selectStyle {
      width: 250px;
      display: block;
      margin: 8px 0;
      line-height: 40px;
    }
  }
}
</style>
