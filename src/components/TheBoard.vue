<script setup lang="ts">
  import { Cell } from "../models/Cell";
  import { Board } from "../models/Board";
  import TheCell from "./TheCell.vue";
  import { ref, watch } from "vue";
  import type { Player } from "@/models/Player";

  interface BoardProps {
    board: Board;
    currentPlayer: Player | null;
  }

  const selectedCell = ref<Cell | null>(null);
  const props = defineProps<BoardProps>();

  const emit = defineEmits(["swapPlayer"]);

  function click(cell: Cell) {
    if (
      selectedCell.value &&
      selectedCell.value !== cell &&
      selectedCell.value.figure?.canMove(cell)
    ) {
      selectedCell.value.moveFigure(cell);
      selectedCell.value = null;
      emit("swapPlayer");
    } else {
      if (cell.figure?.color === props.currentPlayer?.color) {
        selectedCell.value = cell;
      }
    }
  }

  watch(selectedCell, () => {
    props.board.highlightCells(selectedCell.value);
  });
</script>

<template>
  <h3>Текущий Игрок {{ currentPlayer?.color }}</h3>
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
