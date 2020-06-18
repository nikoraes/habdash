<template>
  <q-page class="fit">

    <grid-layout
      v-if="layout && cards"
      :layout.sync="layout"
      :col-num="10"
      :row-height="30"
      :is-draggable="editLayout"
      :is-resizable="editLayout"
      :vertical-compact="false"
      :responsive="true"
      :autoSize="false"
      :margin="[10, 10]"
      :breakpoints="{ lg: 1440, md: 1200, sm: 768, xs: 490, xxs: 0 }"
      :use-css-transforms="true"
      @layout-updated="layoutUpdated"
      :key="current"
    >

      <grid-item
        v-for="item in layout"
        :static="item.static"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        class="q-card q-card--dark q-dark q-card--flat no-border-radius no-shadow"
      >
        <component
          v-if="cards.find(c => c.id === item.i)"
          :is="cards.find(c => c.id === item.i).type"
          :card="cards.find(c => c.id === item.i)"
        />
      </grid-item>

    </grid-layout>
  </q-page>
</template>

<script>
import { extend } from 'quasar'
import VueGridLayout from 'vue-grid-layout'
import HdComponents from 'components'

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    ...HdComponents
  },

  data () {
    return {
      layout: []
    }
  },

  mounted () {
    this.layout = extend(true, [], this.$store.getters['dashboards/layout'](this.current))
  },

  watch: {
    layout (val) {
      // this.$store.commit('dashboards/updateLayout', extend(true, [], val))
      console.log(val)
    },

    current (val) {
      this.layout = extend(true, [], this.$store.getters['dashboards/layout'](val))
    }
  },

  computed: {
    current () {
      return this.$store.state.dashboards.current
    },
    cards () {
      const currentPage = this.$store.state.dashboards.pages.find(p => p.id === this.current)
      console.log(currentPage)
      return this.$store.state.dashboards.pages.find(p => p.id === this.current).cards
    },
    editLayout: {
      get () { return this.$store.state.dashboards.editLayout },
      set (val) { this.$store.commit('dashboards/updateEditLayout', val) }
    }
  },

  methods: {
    layoutUpdated (val) { console.log(val) }
  }
}
</script>
