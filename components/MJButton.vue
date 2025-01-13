<template>
  <UButton color="mj-primary" variant="solid" class="w-auto flex justify-center"
    >{{ title }}</UButton
  >
</template>
<script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      default: 'Example'
    }
  })
</script>
