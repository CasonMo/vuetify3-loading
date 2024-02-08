<template>
  <div v-show="isShow" :class="['mask',loader]">
    <div class="loader"></div>
  </div>
</template>
<script>
export default {
  props: {
    loader: {
      type: String,
      default: 'classical'
    }
  },
  data() {
    return {
      isShow: false
    }
  },
}
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .7);
  opacity: 0.9;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rotate{
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 50px;
    --b: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 1px;
    background: conic-gradient(#0000 10%,#7367F0) content-box;
    -webkit-mask:
        repeating-conic-gradient(#0000 0deg,#000 1deg 20deg,#0000 21deg 36deg),
        radial-gradient(farthest-side,#0000 calc(100% - var(--b) - 1px),#000 calc(100% - var(--b)));
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;
    animation:l4 1s infinite steps(10);
  }
  @keyframes l4 {to{transform: rotate(1turn)}}
}
.classical {
  /* HTML: <div class="loader"></div> */
  .loader {
    --w: 10ch;
    font-weight: bold;
    font-family: monospace;
    font-size: 30px;
    line-height: 1.2em;
    letter-spacing: var(--w);
    width: var(--w);
    overflow: hidden;
    white-space: nowrap;
    color: #0000;
    animation: l19 2s infinite linear;
  }

  .loader:before {
    content: "Loading...";
  }

  @keyframes l19 {
    0% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    4% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    8% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    12% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    16% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    20% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    24% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    28% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    32% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
    36% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0
    }
    40%,
    60% {
      text-shadow: calc(0 * var(--w)) 0 #7367F0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    64% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0 #7367F0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    68% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0 #7367F0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    72% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0 #7367F0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    76% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0 #7367F0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    80% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0 #7367F0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    84% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0 #7367F0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    88% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0 #7367F0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    92% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0 #7367F0, calc(-9 * var(--w)) 0 #7367F0
    }
    96% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0 #7367F0
    }
    100% {
      text-shadow: calc(0 * var(--w)) 0, calc(-1 * var(--w)) 0, calc(-2 * var(--w)) 0, calc(-3 * var(--w)) 0, calc(-4 * var(--w)) 0,
      calc(-5 * var(--w)) 0, calc(-6 * var(--w)) 0, calc(-7 * var(--w)) 0, calc(-8 * var(--w)) 0, calc(-9 * var(--w)) 0
    }
  }
}

.dot {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 60px;
    aspect-ratio: 4;
    --_g: no-repeat radial-gradient(circle closest-side, #7367F0 90%, #0000);
    background: var(--_g) 0% 50%,
    var(--_g) 50% 50%,
    var(--_g) 100% 50%;
    background-size: calc(100% / 3) 100%;
    animation: l7 1s infinite linear;
  }

  @keyframes l7 {
    33% {
      background-size: calc(100% / 3) 0%, calc(100% / 3) 100%, calc(100% / 3) 100%
    }
    50% {
      background-size: calc(100% / 3) 100%, calc(100% / 3) 0%, calc(100% / 3) 100%
    }
    66% {
      background-size: calc(100% / 3) 100%, calc(100% / 3) 100%, calc(100% / 3) 0%
    }
  }
}

.bar {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 45px;
    aspect-ratio: .75;
    --c: no-repeat linear-gradient(#7367F0 0 0);
    background: var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
    animation: l7 1s infinite linear alternate;
  }

  @keyframes l7 {
    0% {
      background-size: 20% 50%, 20% 50%, 20% 50%
    }
    20% {
      background-size: 20% 20%, 20% 50%, 20% 50%
    }
    40% {
      background-size: 20% 100%, 20% 20%, 20% 50%
    }
    60% {
      background-size: 20% 50%, 20% 100%, 20% 20%
    }
    80% {
      background-size: 20% 50%, 20% 50%, 20% 100%
    }
    100% {
      background-size: 20% 50%, 20% 50%, 20% 50%
    }
  }
}

.dot-bar {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 40px;
    height: 26px;
    --c: no-repeat linear-gradient(#7367F0 0 0);
    background: var(--c) 0 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
    background-size: 8px calc(100% - 4px);
    position: relative;
  }

  .loader:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7367F0;
    left: 0;
    top: 0;
    animation: l3-1 1.5s linear infinite alternate,
    l3-2 0.75s cubic-bezier(0, 200, .8, 200) infinite;
  }

  @keyframes l3-1 {
    100% {
      left: calc(100% - 8px)
    }
  }
  @keyframes l3-2 {
    100% {
      top: -0.1px
    }
  }
}

.spinner {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    border: 4px solid #0000;
    border-radius: 50%;
    border-right-color: #7367F0;
    animation: l15 1s infinite linear;
  }

  .loader::before,
  .loader::after {
    content: "";
    grid-area: 1/1;
    margin: 2px;
    border: inherit;
    border-radius: 50%;
    animation: l15 2s infinite;
  }

  .loader::after {
    margin: 8px;
    animation-duration: 3s;
  }

  @keyframes l15 {
    100% {
      transform: rotate(1turn)
    }
  }
}

.progress {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 120px;
    height: 22px;
    border-radius: 20px;
    color: #7367F0;
    border: 2px solid;
    position: relative;
  }

  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }

  @keyframes l6 {
    100% {
      inset: 0
    }
  }
}

.wobbling {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 20px;
    aspect-ratio: 1;
    background: #7367F0;
    box-shadow: 0 0 60px 15px #7367F0;
    transform: translate(-80px);
    clip-path: inset(0);
    animation: l4-1 0.5s ease-in-out infinite alternate,
    l4-2 1s ease-in-out infinite;
  }

  @keyframes l4-1 {
    100% {
      transform: translateX(80px)
    }
  }
  @keyframes l4-2 {
    33% {
      clip-path: inset(0 0 0 -100px)
    }
    50% {
      clip-path: inset(0 0 0 0)
    }
    83% {
      clip-path: inset(0 -100px 0 0)
    }
  }
}

.infinity {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: calc(80px / cos(45deg));
    height: 14px;
    background: repeating-linear-gradient(-45deg, #7367F0 0 15px, #0000 0 20px) left/200% 100%;
    animation: l3 2s infinite linear;
  }

  @keyframes l3 {
    100% {
      background-position: right
    }
  }
}

.eye {
  /* HTML: <div class="loader"></div> */
  .loader {
    display: inline-flex;
    gap: 10px;
  }

  .loader:before,
  .loader:after {
    content: "";
    height: 20px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: radial-gradient(farthest-side, #000 95%, #0000) 35% 35%/6px 6px no-repeat #fff;
    animation: l5 3s infinite;
  }

  @keyframes l5 {
    0%, 11% {
      background-position: 35% 35%
    }
    14%, 36% {
      background-position: 65% 35%
    }
    38%, 61% {
      background-position: 65% 65%
    }
    64%, 86% {
      background-position: 35% 65%
    }
    88%, 100% {
      background-position: 35% 35%
    }
  }
}

.factory {
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 90px;
    height: 14px;
    box-shadow: 0 3px 0 #fff;
    position: relative;
    clip-path: inset(-40px 0 -5px)
  }

  .loader:before {
    content: "";
    position: absolute;
    inset: auto calc(50% - 17px) 0;
    height: 50px;
    --g: no-repeat linear-gradient(#7367f0 0 0);
    background: var(--g), var(--g), var(--g), var(--g);
    background-size: 16px 14px;
    animation: l7-1 2s infinite linear,
    l7-2 2s infinite linear;
  }

  @keyframes l7-1 {
    0%,
    100% {
      background-position: 0 -50px, 100% -50px
    }
    17.5% {
      background-position: 0 100%, 100% -50px, 0 -50px, 100% -50px
    }
    35% {
      background-position: 0 100%, 100% 100%, 0 -50px, 100% -50px
    }
    52.5% {
      background-position: 0 100%, 100% 100%, 0 calc(100% - 16px), 100% -50px
    }
    70%,
    98% {
      background-position: 0 100%, 100% 100%, 0 calc(100% - 16px), 100% calc(100% - 16px)
    }
  }
  @keyframes l7-2 {
    0%, 70% {
      transform: translate(0)
    }
    100% {
      transform: translate(200%)
    }
  }
}
</style>