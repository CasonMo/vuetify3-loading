<template>
  <div class="mask" v-show="isShow">
    <div class="loading"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: false
    }
  }
}
</script>
<style lang="scss">
@keyframes rotate {
  0%{
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.mask{
  position: fixed;
  left:0;
  right:0;
  top:0;
  bottom:0;
  background-color: rgba(0,0,0,.7);
  opacity: 0.9;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading{
    width: 30px;
    height: 30px;
    border: 3px solid #7367F0;
    border-radius: 21px;
    border-left-color:transparent;
    animation: rotate 500ms infinite;
  }
}
</style>