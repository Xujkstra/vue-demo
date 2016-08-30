<template>
  <button type="button" @click='increment'>+1s</button>
  <button type="button" @click='decrement'>-1s</button>
  <button type="button" @click='asycGetMsg'>asyc</button>
</template>

<script>
  import { incrementCounter, decrementCounter, asycGetMsg } from './actions.js'

  export default {
    vuex: {
      actions: {
        increment: incrementCounter,
        decrement: decrementCounter,
        asycGetMsg: asycGetMsg("57c0ed7c609b370d940cdbfc")
      }
    }
  }
</script>
