<script setup lang="ts">
  import { Board } from "../models/Board";
  import TheCell from "./TheCell.vue";

  interface BoardProps {
    board: Board;
  }

  const props = defineProps<BoardProps>();
</script>

<template>
  <div class="board" v-for="board in props.board.cells">
    <TheCell v-for="cell in board" :cell="cell" />
  </div>
</template>

<style scoped></style>
