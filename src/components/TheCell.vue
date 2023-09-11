<script setup lang="ts">
  import { Cell } from "../models/Cell";
  interface cellProps {
    cell: Cell;
  }
  const props = defineProps<cellProps>();
</script>

<template>
  <div class="cell" :class="props.cell.color">
    <span v-if="cell.figure?.logo">
      <img :src="cell.figure.logo" alt="" />
    </span>
  </div>
</template>

<style scoped></style>
