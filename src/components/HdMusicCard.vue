<template>
  <div class="fit column">
    <q-img
      v-if="image"
      :src="image"
      :ratio="16/9"
      basic
      contain
      class="full-width"
    />
    <q-card-section class="q-pb-none">
      <div
        v-if="!idling"
        class="text-h6 ellipsis-2-lines"
      >{{title}}</div>
      <div
        v-if="!idling"
        class="text-caption ellipsis"
      >{{subtitle}}</div>
      <div
        v-if="!idling"
        class="text-caption"
      >{{appName}}</div>
      <q-select
        borderless
        v-model="selectedSource"
        map-options
        emit-value
        :options="sourceSelectOptions"
        hide-dropdown-icon
        class="text-subtitle2 q-my-none q-py-none"
      />
    </q-card-section>

    <q-card-section class="col items-center column justify-evenly q-mt-none q-pt-none">
      <div class="row justify-evenly items-center q-gutter-y-sm">
        <hd-knob :config="{ item: selectedSource+'_Volume', icon: 'mdi-volume-high', label: ' ' }" />
        <hd-btn-group :config="{item: 'ChromecastGroup_Living_Control', label: ' ', commands: [{ value: 'PAUSE', icon: 'mdi-pause' }, { value: 'PLAY', icon: 'mdi-play-outline' }]}" />
      </div>
      <hd-chips :config="stationsConfig" />
    </q-card-section>
  </div>
</template>

<script>
import HdComponents from 'components'

export default {
  components: {
    ...HdComponents
  },

  props: ['card'],

  data () {
    return {
      selectedSource: this.card.config.sources[0]
    }
  },

  mounted () {
    for (const source of this.sourceSelectOptions) {
      if (this.$store.getters['items/state'](source.value + '_Idling') !== 'ON') {
        this.selectedSource = source.value
        break
      }
    }
  },

  computed: {
    sourceSelectOptions () {
      return this.card.config.sources.map(s => {
        return {
          value: s,
          label: this.$store.getters['items/name'](s) && this.$store.getters['items/name'](s).label
        }
      })
    },

    leftBarVisible () {
      return false
    },

    title () {
      if (this.idling) return null
      if (!this.defaultMediaReceiver) return this.$store.getters['items/state'](this.selectedSource + '_Title')
      else return this.card.config.stations.find(s => s.value === this.currentStation) && this.card.config.stations.find(s => s.value === this.currentStation).label
    },

    subtitle () {
      if (this.idling) return null
      if (!this.defaultMediaReceiver) return this.$store.getters['items/state'](this.selectedSource + '_Artist')
      else return null
    },

    idling () {
      return this.$store.getters['items/state'](this.selectedSource + '_Idling') === 'ON'
    },

    image () {
      if (this.idling) return null
      if (!this.defaultMediaReceiver) return this.$store.getters['items/state'](this.selectedSource + '_Image')
      else return this.card.config.stations.find(s => s.value === this.currentStation) && this.card.config.stations.find(s => s.value === this.currentStation).img
    },

    appName () {
      return this.$store.getters['items/state'](this.selectedSource + '_AppName')
    },

    defaultMediaReceiver () {
      return this.appName === 'Default Media Receiver'
    },

    currentStation () { return this.$store.getters['items/state'](this.selectedSource + '_Playuri') },

    stationsConfig () {
      return {
        item: this.selectedSource + '_Playuri',
        selectionDisabled: this.idling || !this.defaultMediaReceiver,
        label: ' ',
        commands: this.card.config.stations
      }
    }
  }
}
</script>
