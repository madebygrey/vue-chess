<script setup lang="ts">
  import { Cell } from "../models/Cell";
  interface cellProps {
    cell: Cell;
    selected: boolean;
  }
  const props = defineProps<cellProps>();

  defineEmits(["click"]);
</script>

<template>
  <div
    class="cell"
    :class="[props.cell.color, selected ? 'selected' : '']"
    @click="$emit('click', cell)"
    :style="{ background: cell.available && cell.figure ? 'green' : '' }">
    <span v-if="cell.available && !cell.figure" class="available"></span>
    <span v-if="cell.figure?.logo">
      <img :src="cell.figure.logo" alt="" />
    </span>
  </div>
</template>

<style scoped></style>
