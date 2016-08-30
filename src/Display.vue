<template>
  <p>Counter is: {{ counterValue }}</p>
  <p>Schedule is {{ length }}</p>
</template>

<script>
  import { getCount, getSchedule } from './getters.js'
  export default {
    vuex: {
      getters : {
        counterValue: getCount,
        length: getSchedule
      }
    }
  }
</script>
