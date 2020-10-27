<template>
  <div id="app">
    <c-navigation />
    <router-view/>
  </div>
</template>
<script>
import cNavigation from '@/components/c-navigation';

export default {
  components: { cNavigation },
};
</script>
