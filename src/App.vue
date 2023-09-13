<script setup lang="ts">
  import { onMounted, ref } from "vue";
  import { Board } from "./models/Board";
  import TheBoard from "./components/TheBoard.vue";
  import TheLostFigures from "./components/TheLostFigures.vue";
  import TheTimer from "./components/TheTimer.vue";
  import { Player } from "./models/Player";
  import { Colors } from "./models/Colors";

  const board = ref(new Board());
  const whitePlayer = ref(new Player(Colors.WHITE));
  const blackPlayer = ref(new Player(Colors.BLACK));
  const currentPlayer = ref<Player | null>(null);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    board.value = newBoard;
    newBoard.addFigures();
  }

  function swapPlayer() {
    currentPlayer.value =
      currentPlayer.value?.color === Colors.WHITE
        ? blackPlayer.value
        : whitePlayer.value;
  }

  onMounted(() => {
    restart();
    currentPlayer.value = whitePlayer.value;
  });
</script>

<template>
  <TheTimer @restart="restart" :currentPlayer="currentPlayer" />
  <TheBoard
    :board="board"
    :currentPlayer="currentPlayer"
    @swapPlayer="swapPlayer" />
  <div>
    <TheLostFigures
      :title="'Черные фигуры'"
      :figures="board.lostBlackFigures" />
    <TheLostFigures :title="'Белые фигуры'" :figures="board.lostWhiteFigures" />
  </div>
</template>

<style scoped></style>
