<template>
  <div class="lost">
    <h3>{{ title }}</h3>
    <span v-for="figure in figures" :key="figure.id"
      >{{ figure.name }} <img v-if="figure.logo" :src="figure.logo" alt=""
    /></span>
  </div>
</template>

<script setup lang="ts">
  import { Figure } from "../models/figures/Figure";

  interface LostFiguresProps {
    title: string;
    figures: Figure[];
  }

  const props = defineProps<LostFiguresProps>();
</script>

<style lang="scss" scoped></style>
