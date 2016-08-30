<template>

  <div>
    <header>This is App Header---- Nav bar</header>
    <sidebar></sidebar>
    <viewport></viewport>
    <a v-link="{ path: '/foo'}">点我显示Foo Page</a>
    <a v-link="{ path: '/bar'}">点我显示Bar Page</a>
    <div class="router-view">
      <router-view></router-view>
    </div>
    <p :class = "$route.path">当前路径:{{ $route.path }}</p>

  </div>
</template>

<script>
  import Sidebar from './Sidebar.vue'
  import Viewport from './Viewport.vue'
  import store from './store.js'
  export default {
    components: {
      Sidebar,
      Viewport
    },
    store,
    data() {
      return {
        currentView : ''
      }
    },
    events: {
      'view-change': function(view) {
        this.currentView = view
        this.$broadcast('toggle-view-port',this.currentView)
      }
    }
  }
</script>
