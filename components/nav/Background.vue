<template>
  <div
    v-for="index in 5"
    :key="index"
  >
    <span :class="`navBar-background-hole-${index}`"> </span>
  </div>
</template>

<style scoped>
.navBar-background-hole-1 {
  width: 22px;
  height: 22px;
  left: calc(5%);
  top: 10px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
}

.navBar-background-hole-2 {
  width: 22px;
  height: 22px;
  left: calc(25%);
  top: 97px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.1);
  position: absolute;
}

.navBar-background-hole-3 {
  width: 22px;
  height: 22px;
  left: calc(40%);
  top: 34px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
}

.navBar-background-hole-4 {
  width: 22px;
  height: 22px;
  left: calc(70%);
  top: 56px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
}

.navBar-background-hole-5 {
  width: 22px;
  height: 22px;
  left: calc(90%);
  top: 70px;
  border-radius: 11px;
  background: rgba(0, 0, 0, 0.15);
  position: absolute;
}
</style>
