<template>
  <div class="fit row">
    <div
      v-if="leftBarVisible"
      class="full-height absolute-left"
      :style="'width: 6px; background: '+(card.config.leftBar.color || '$primary')+'; z-index: 100;'"
    />
    <div class="col full-height column justify-evenly">

      <q-card-section v-if="card.config && card.config.title">
        <div class="text-h6">{{card.config.title.main}}</div>
        <div
          v-if="card.config.title.values"
          class="text-caption"
        >{{values}}</div>
      </q-card-section>

      <div class="row justify-evenly items-center">
        <component
          v-for="(widget,coIdx) in card.widgets"
          :key="'card'+coIdx"
          :is="widget.type"
          :config="widget.config"
        />
      </div>

    </div>
  </div>
</template>

<script>
import HdComponents from 'components'

export default {
  components: {
    ...HdComponents
  },

  props: ['card'],

  computed: {
    values () {
      let values = ''
      for (const [i, v] of this.card.config.title.values.entries()) {
        if (i !== 0) values += ' - '
        values += this.$store.getters['items/state'](v.item, true) + v.unit
      }
      return values
    },

    leftBarVisible () {
      return this.card.config && this.card.config.leftBar && this.card.config.leftBar.items.some(itemName => {
        const item = this.$store.getters['items/name'](itemName)
        if (!item || !item.state) return false
        if (item.state === 'ON') return true
        if (item.type === 'Number' || item.type === 'Dimmer' || (item.type === 'Group' && item.groupType === 'Dimmer')) return parseFloat(item.state) > 0
        if (item.type === 'Color') return parseFloat(item.state.split(',')[2]) > 0
        return false
      })
    }
  }
}
</script>
