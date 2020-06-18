<template>
  <div
    v-if="show && item"
    class="column items-center q-gutter-y-sm"
    style="width: 115px;"
  >
    <div class="text-caption">{{config.label || item.label}}</div>

    <q-knob
      show-value
      font-size="16px"
      class="q-ma-sm"
      :value="parseFloat(state)"
      @input="sendCmd"
      size="75px"
      track-color="grey-8"
    >
      <q-icon
        v-if="config.icon"
        :name="config.icon"
        class="q-mr-xs"
      />
      {{state.split('.')[0]}}{{config.unit}}
    </q-knob>

  </div>
</template>

<script>
export default {

  props: ['config'],

  computed: {
    item () { return this.$store.getters['items/name'](this.config.item) },
    state () { return this.$store.getters['items/state'](this.config.item, true) },
    show () { return this.config.enableItem ? this.$store.getters['items/state'](this.config.enableItem) === 'ON' : true }
  },

  methods: {
    sendCmd (val) {
      this.$store.dispatch('items/sendCmd', { itemName: this.config.item, command: val, updateState: true })
    }
  }

}
</script>
