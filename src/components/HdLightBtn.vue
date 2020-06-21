<template>
  <div
    v-if="item"
    class="column items-center q-gutter-y-sm q-pa-sm"
    style="width: 115px;"
  >
    <div class="text-caption text-center">{{config.label || item.label}}</div>

    <q-btn
      round
      size="lg"
      :icon="icon"
      :style="`background: ${color};`"
      @click="toggle"
      v-touch-hold.mouse="showMenu"
    >
      <q-menu
        ref="sliderMenu"
        anchor="center right"
        self="center left"
        no-parent-event
      >
        <q-card
          square
          class="row q-px-sm q-py-lg q-gutter-md"
        >
          <div
            v-if="colorTempItem && item.type !== 'Color'"
            class="column q-gutter-sm justify-evenly"
          >
            <q-btn
              round
              size="xs"
              style="background: #ff942b;"
              @click="[sendColorTempCmd(85), sendCmd(57)]"
            />
            <q-btn
              round
              size="xs"
              style="background: #ffad66;"
              @click="[sendColorTempCmd(56), sendCmd(100)]"
            />
            <q-btn
              round
              size="xs"
              style="background: #ffd5b3;"
              @click="[sendColorTempCmd(23), sendCmd(100)]"
            />
            <q-btn
              round
              size="xs"
              style="background: #fffdf8;"
              @click="[sendColorTempCmd(1), sendCmd(100)]"
            />
          </div>
          <div
            v-if="item.type === 'Color'"
            class="column q-gutter-sm justify-evenly"
          >
            <q-btn
              round
              size="xs"
              style="background: #ff0d00;"
              @click="sendCmd('3,100,79')"
            />
            <q-btn
              round
              size="xs"
              style="background: #6d4d7d;"
              @click="sendCmd('280,38,49')"
            />
            <q-btn
              round
              size="xs"
              style="background: #008a81;"
              @click="sendCmd('176,100,54')"
            />
            <q-btn
              round
              size="xs"
              style="background: #d95b85;"
              @click="sendCmd('340,58,85')"
            />
          </div>
          <div
            v-if="item.type === 'Color'"
            class="column q-gutter-sm justify-evenly"
          >
            <q-btn
              round
              size="xs"
              style="background: #ff942b;"
              @click="sendCmd('29,80,57')"
            />
            <q-btn
              round
              size="xs"
              style="background: #ffad66;"
              @click="sendCmd('30,60,100')"
            />
            <q-btn
              round
              size="xs"
              style="background: #ffd5b3;"
              @click="sendCmd('23,30,100')"
            />
            <q-btn
              round
              size="xs"
              style="background: #fffdf8;"
              @click="sendCmd('19,1,100')"
            />
          </div>
          <q-slider
            v-if="item.type !== 'Color'"
            :value="state"
            @input="sendCmd"
            reverse
            vertical
          />
          <q-slider
            v-if="item.type === 'Color'"
            :value="parseFloat(state.split(',')[2])"
            @input="val => sendCmd(state.split(',')[0]+','+state.split(',')[1]+','+val)"
            reverse
            vertical
          />
        </q-card>
      </q-menu>
    </q-btn>

    <div class="text-caption text-grey text-center">{{state}}</div>

  </div>
</template>

<script>
import { colors, debounce } from 'quasar'

export default {

  props: ['config'],

  created () {
    this.sendCmd = debounce(this.sendCmd, 200)
  },

  computed: {
    item () { return this.$store.getters['items/name'](this.config.item) },
    state () {
      if (this.item.type === 'Dimmer' || (this.item.type === 'Group' && this.item.groupType === 'Dimmer')) {
        return parseFloat(this.item.state.split('.')[0])
      } else return this.item.state
    },
    colorTempItem () {
      return this.config.colorTemperatureItem && this.$store.getters['items/state'](this.config.colorTemperatureItem)
    },
    icon () { return this.config.icon || 'mdi-lightbulb-outline' },
    color () {
      // Relax = 2237K #ff942b
      // Read = 2890K  #ffad66
      // Concentrate = 4291K #FFD5B3
      // Energize = 6410K FFFDF8
      // 2100: (255, 142, 33)
      // 3000: (255, 180, 107)
      // 4000: (255, 209, 163)
      // 5000: (255, 228, 206)
      if (this.state === 'ON') return '#ffb46b' // #ffb46b
      else if (this.item.type === 'Dimmer' || (this.item.type === 'Group' && this.item.groupType === 'Dimmer')) {
        const rgb = colors.hsvToRgb({
          h: 30,
          s: 58,
          v: parseFloat(this.state)
        })
        return colors.rgbToHex(rgb)
      } else if (this.item.type === 'Color') {
        const rgb = colors.hsvToRgb({
          h: parseFloat(this.state.split(',')[0]),
          s: parseFloat(this.state.split(',')[1]),
          v: parseFloat(this.state.split(',')[2])
        })
        return colors.rgbToHex(rgb)
      } else return '#000000'
    }
  },

  methods: {
    showMenu () {
      if (this.item.type === 'Dimmer' || this.item.type === 'Color' || (this.item.type === 'Group' && this.item.groupType === 'Dimmer')) {
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
    },
    sendColorTempCmd (val) {
      this.$store.dispatch('items/sendCmd', { itemName: this.config.colorTemperatureItem, command: val, updateState: true })
    },
    sendCmd (val) {
      this.$store.dispatch('items/sendCmd', { itemName: this.config.item, command: val, updateState: true })
    }
  }

}
</script>
