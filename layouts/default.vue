<template>
  <div id="__layout">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
#__layout {
  background: url(@/assets/images/top-mobile.svg) no-repeat top center, url(@/assets/images/bottom-mobile.svg) no-repeat center bottom, #f2fdfd;
  background-size: 100% auto;
  @include screen($lg) {
    background-size: 100% auto, 121% auto;
    background-position: center 0, center bottom;
    background-image: url(@/assets/images/top.svg), url(@/assets/images/bottom.svg);
  }
  @include screen($xl) {
    background-size: 1440px auto, 1736px auto;
    background-position: center 0, center bottom;
  }
}
</style>
