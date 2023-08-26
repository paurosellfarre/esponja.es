<template>
  <div class="aquarium">
    <div class="aquarium__aquarium">
      <div class="aquarium__water"></div>
    </div>
    <div class="aquarium__sponge-box">
      <div class="aquarium__body">
        <div class="aquarium__body-stripe"></div>
      </div>
      <div class="aquarium__face">
        <div class="aquarium__mouth"></div>
        <div class="aquarium__smile"></div>
      </div>
    </div>
  </div>
</template>

<style>
.aquarium {
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 80px;
}
.aquarium *,
.aquarium *::before,
.aquarium *::after {
  position: absolute;
  content: "";
}
.aquarium__aquarium {
  width: 100px;
  height: 80px;
  box-sizing: border-box;
  border: 5px solid black;
  border-radius: 40px 40px 50px 50px / 74px 74px 74px 74px;
  box-shadow: inset -30px 0 0 0 rgba(54, 125, 231, 0.2);
  overflow: hidden;
  z-index: 1;
}
.aquarium__water {
  top: 39px;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #5bb8ff;
  animation: sponge-water 2.5s linear infinite;
}
.aquarium__sponge-box {
  width: 50px;
  height: 60px;
  left: 30px;
  top: 2px;
  animation: sponge-box 2.5s linear infinite;
}
.aquarium__body {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 5px black,
    inset -10px 0 0 5px rgba(221, 165, 33, 0.47);
  border-radius: 13px;
  background: #faef37;
  overflow: hidden;
}
.aquarium__body-hole {
  width: 10px;
  height: 10px;
  left: -3px;
  top: 6px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.1);
}
.aquarium__body-stripe {
  width: 23px;
  height: 13px;
  left: 45px;
  top: 0;
  border-radius: 0 10px 0 0;
  border-top: 5px solid black;
  border-right: 5px solid black;
}
.aquarium__body-stripe:before {
  width: 5px;
  height: 10px;
  left: 23px;
  top: 9px;
  border-radius: 3px;
  background: black;
}
.aquarium__face {
  width: 10px;
  height: 20px;
  left: 10px;
  top: 22px;
}
.aquarium__face:before {
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background: black;
  animation: sponge-eye 2.5s linear infinite;
}
.aquarium__face:after {
  left: 20px;
  top: 0px;
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background: black;
  animation: sponge-eye 2.5s linear infinite;
}
.aquarium__mouth {
  width: 10px;
  height: 7px;
  top: 10px;
  left: 10px;
  box-sizing: border-box;
  border-radius: 4px 4px 14px 14px;
  border: 3px solid black;
  border-top-width: 6px;
  background: red;
  animation: sponge-mouth 2.5s linear infinite;
}
.aquarium__smile {
  left: 20px;
  top: 12px;
  animation: sponge-smile 2.5s linear infinite;
}
.aquarium__smile:before {
  left: -10px;
  width: 6px;
  height: 6px;
  border-radius: 0 0 0 6px;
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  transform: rotate(-45deg);
}
.aquarium__smile:after {
  left: -2px;
  width: 6px;
  height: 6px;
  border-radius: 0 0 0 6px;
  border-bottom: 3px solid black;
  border-left: 3px solid black;
  transform: rotate(-45deg);
}

@keyframes sponge-eye {
  9.36% {
    transform: scale(1);
  }
  9.37% {
    transform: scale(0);
  }
  14.0% {
    transform: scale(0);
  }
  14.01% {
    transform: scale(1);
  }
}
@keyframes sponge-mouth {
  0% {
    border-radius: 4px 4px 14px 14px;
    transform: scale(1);
    background: red;
  }
  9.36% {
    border-radius: 4px 4px 14px 14px;
    transform: scale(0);
    background: red;
  }
  28.08% {
    border-radius: 100%;
    transform: scale(0);
    background: black;
  }
  40.56% {
    border-radius: 100%;
    transform: scaleY(1.4);
    background: black;
  }
  42.12% {
    border-radius: 100%;
    transform: scaleY(1.4);
    background: black;
  }
  48.36% {
    border-radius: 100%;
    transform: scale(0);
    background: black;
  }
  76.4% {
    border-radius: 4px 4px 14px 14px;
    transform: scale(0);
    background: red;
  }
  76.44% {
    border-radius: 4px 4px 14px 14px;
    transform: scale(0.3);
    background: red;
  }
  93.6% {
    border-radius: 4px 4px 14px 14px;
    transform: scale(1);
    background: red;
  }
  100% {
    border-radius: 4px 4px 14px 14px;
    transform: scale(1);
    background: red;
  }
}
@keyframes sponge-smile {
  0%,
  48.2% {
    opacity: 0;
  }
  48.36%,
  76.44% {
    opacity: 1;
  }
  76.5%,
  100% {
    opacity: 0;
  }
}
@keyframes sponge-water {
  3% {
    transform: translateY(0);
  }
  9.3% {
    transform: translateY(-3px);
  }
  12.48% {
    transform: translateY(-5px);
  }
  25% {
    transform: translateY(-15px);
  }
  45% {
    transform: translateY(-10px);
  }
  78% {
    transform: translateY(-5px);
  }
  85.8% {
    transform: translateY(0);
  }
}

@keyframes sponge-box {
  0% {
    transform: translateY(-5px);
  }
  9.36% {
    transform: translateY(20px);
  }
  18.72% {
    transform: translateY(-5px);
  }
  28.08% {
    transform: translateY(-7px);
  }
  43.68% {
    transform: translateY(0px);
  }
  60.84% {
    transform: translateY(14px);
  }
  78% {
    transform: translateY(14px);
  }
  85.8% {
    transform: translateY(-5px);
  }
  93.6% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(-3px);
  }
}
</style>
