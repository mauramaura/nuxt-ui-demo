<template>
  <UAccordion :items="items" multiple color="mj-secondary" />
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: 'Label',
  },
  icon: {
    type: String,
  },
  content: {
    type: String,
    default: 'Content',
  },
});

const items = [
  {
    label: props.label,
    icon: props.icon,
    defaultOpen: true,
    content: props.content,
  },
  {
    label: props.label,
    icon: props.icon,
    defaultOpen: true,
    content: props.content,
  },
  {
    label: props.label,
    icon: props.icon,
    defaultOpen: true,
    content: props.content,
  },
  {
    label: props.label,
    icon: props.icon,
    defaultOpen: true,
    content: props.content,
  },
];
</script>
