<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { Board } from "./models/Board";
  import TheBoard from "./components/TheBoard.vue";

  const board = ref(new Board());

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    board.value = newBoard;
    newBoard.addFigures();
  }

  onMounted(() => {
    restart();
  });
</script>

<template>
  <TheBoard :board="board" />
</template>

<style scoped></style>
