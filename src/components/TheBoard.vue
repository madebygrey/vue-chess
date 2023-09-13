<script setup lang="ts">
  import { Cell } from "../models/Cell";
  import { Board } from "../models/Board";
  import TheCell from "./TheCell.vue";
  import { ref, watch } from "vue";

  interface BoardProps {
    board: Board;
  }

  const selectedCell = ref<Cell | null>(null);
  const props = defineProps<BoardProps>();

  function click(cell: Cell) {
    if (
      selectedCell.value &&
      selectedCell.value !== cell &&
      selectedCell.value.figure?.canMove(cell)
    ) {
      selectedCell.value.moveFigure(cell);
      selectedCell.value = null;
    } else {
      selectedCell.value = cell;
    }
  }

  watch(selectedCell, () => {
    props.board.highlightCells(selectedCell.value);
  });
</script>

<template>
  <div class="board">
    <span v-for="cells in props.board.cells">
      <TheCell
        v-for="cell in cells"
        :cell="cell"
        :selected="cell.x === selectedCell?.x && cell.y === selectedCell?.y"
        @click="click" />
    </span>
  </div>
</template>

<style scoped></style>
