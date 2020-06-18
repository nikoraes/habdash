<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  data () {
    return {
      reconnectIntervalId: null,
      reloadIntervalId: null
    }
  },

  mounted () {
    this.reconnect()
    this.reloadIntervalId = setInterval(() => {
      this.$store.dispatch('items/reload')
    }, 30000)
  },

  watch: {
    '$store.state.items.connectionBroken' (val) {
      if (val) {
        this.$q.loading.show({
          message: 'Connection broken, reconnecting...',
          delay: 400
        })
        console.log('Trying to reconnect every 5 seconds')
        this.reconnectIntervalId = setInterval(() => {
          if (this.$store.state.items.connectionBroken) {
            this.reconnect()
          }
        }, 5000)
      } else {
        clearInterval(this.reconnectIntervalId)
        this.reconnectIntervalId = null
        console.log('%cConnection restored!', 'color: green')
        this.$q.loading.hide()
      }
    }
  },

  methods: {
    reconnect () {
      this.$store.dispatch('items/initialLoad').then(() => {
        this.$store.dispatch('items/watchEvents')
      })
    }
  }
}
</script>
