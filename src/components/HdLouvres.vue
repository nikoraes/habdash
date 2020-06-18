<template>
  <div
    v-if="item"
    class="column items-center q-gutter-y-sm q-pa-sm"
    style="width: 115px;"
  >
    <div class="text-caption text-center">{{config.label || item.label}}</div>

    <!--     <q-icon
      size="xl"
      text-color="white"
      name="mdi-drag-horizontal-variant"
      :style="'transform: rotate('+state.split('.')[0]+'deg)'"
    /> -->

    <q-btn
      round
      size="lg"
      icon="mdi-drag-horizontal-variant"
      :style="'background: black; transform: rotate('+state.split('.')[0]+'deg)'"
    >
      <!--       <q-menu
        ref="sliderMenu"
        anchor="center right"
        self="center left"
        no-parent-event
      >
        <q-card class="q-px-sm q-py-lg">
          <q-slider
            :value="state"
            @input="sendCmd"
            reverse
            vertical
          />
        </q-card>
      </q-menu> -->
    </q-btn>

    <div class="text-caption text-grey text-center">{{state.split('.')[0]}}{{config.unit}}</div>

  </div>
</template>

<script>
export default {

  props: ['config'],

  computed: {
    item () { return this.$store.getters['items/name'](this.config.item) },
    state () { return this.$store.getters['items/state'](this.config.item, true) }
  },

  methods: {
    /* showMenu () {
      if (this.item.type === 'Dimmer' || (this.item.type === 'Color' && this.state.split(',').length === 1) || (this.item.type === 'Group' && this.item.groupType === 'Dimmer')) {
        this.$refs.sliderMenu.show()
      }
    },
    toggle () {
      if (this.item.type === 'Dimmer' || (this.item.type === 'Color' && this.state.split(',').length === 1) || (this.item.type === 'Group' && this.item.groupType === 'Dimmer')) {
        this.sendCmd(parseFloat(this.state) > 0 ? 0 : 100)
      } else if (this.item.type === 'Color' && this.state.split(',').length === 3) {
        this.sendCmd(`${this.state.split(',')[0]},${this.state.split(',')[0]},${parseFloat(this.state.split(',')[2]) > 0 ? 0 : 50}`
        )
      } else this.sendCmd(this.state === 'OFF' ? 'ON' : 'OFF')
    }, */
    sendCmd (val) {
      this.$store.dispatch('items/sendCmd', { itemName: this.config.item, command: val, updateState: true })
    }
  }

}
</script>
