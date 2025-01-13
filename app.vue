<template>
  <MJButton></MJButton>
  <div class="flex flex-col gap-4 w-96 mt-5">
   <MJAccordion :items="items" />
   <!-- <UBadge>Badge</UBadge> -->
  </div>
</template>
<script lang="ts" setup>
    const items = [
      {
        label: 'Hello',
        content: 'Content 1'
      },
      {
        label: 'Label 2',
        content: 'Content 2'
      },
      {
        label: 'Label 3',
        content: 'Content 3'
      },
    ]
</script>
