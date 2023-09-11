<script setup lang="ts">
  import { Board } from "../models/Board";
  import TheCell from "./TheCell.vue";

  interface BoardProps {
    board: Board;
  }

  const props = defineProps<BoardProps>();
  console.log(props.board);
</script>

<template>
  <div class="board">
    <span v-for="cells in props.board.cells">
      <TheCell v-for="cell in cells" :cell="cell" />
    </span>
  </div>
</template>

<style scoped></style>
