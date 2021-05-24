<template>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    user: {
      type: Object as PropType<{ name: string }>,
      required: true
    }
  },
  setup(props) {
    console.log(props.user.name);
  }
});
</script>

