<template>
  <div>
    <button @click="handleRestart">Restart Game</button>
    <h2>Черные - {{ blackTime }}</h2>
    <h2>Белые - {{ whiteTime }}</h2>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import type { Player } from "@/models/Player";
  import { Colors } from "@/models/Colors";

  interface TimerProps {
    currentPlayer: Player | null;
  }
  const props = defineProps<TimerProps>();
  const emits = defineEmits(["restart"]);

  const blackTime = ref(300);
  const whiteTime = ref(300);
  let timer = <null | ReturnType<typeof setInterval>>null;

  function startTimer() {
    if (timer) {
      clearInterval(timer);
    }
    const callback =
      props.currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer = setInterval(callback, 1000);
  }
  function decrementBlackTimer() {
    blackTime.value -= 1;
  }
  function decrementWhiteTimer() {
    whiteTime.value -= 1;
  }
  function handleRestart() {
    blackTime.value = 300;
    whiteTime.value = 300;
    emits("restart");
  }

  watch(
    () => props.currentPlayer,
    () => {
      startTimer();
    }
  );
</script>

<style scoped></style>
