<script setup lang="ts">
  import { Cell } from "@/models/Cell";
  interface cellProps {
    cell: Cell;
  }
  const props = defineProps<cellProps>();
</script>

<template>
  <div class="cell" :class="props.cell.color"></div>
</template>

<style scoped></style>
