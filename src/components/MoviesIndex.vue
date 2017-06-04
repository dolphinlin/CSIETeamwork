<template lang="html">
  <div class="movies">
    <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
