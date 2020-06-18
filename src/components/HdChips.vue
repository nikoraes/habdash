<template>
  <div
    v-if="item"
    class="column items-center q-gutter-y-sm q-pa-sm"
    style="width: 230px;"
  >
    <div class="text-caption">{{config.label || item.label}}</div>
    <div class="row justify-center">
      <q-chip
        clickable
        color="grey-9"
        v-for="(command, coIdx) in config.commands"
        :key="coIdx"
        @click="sendCmd(command.value)"
        :icon="command.icon"
        :text-color="(command.value === state && !idle && !config.selectionDisabled) ? 'primary' : ''"
      >{{command.label}}</q-chip>
    </div>

  </div>
</template>

<script>
export default {

  props: ['config'],

  computed: {
    item () { return this.$store.getters['items/name'](this.config.item) },
    state () { return this.$store.getters['items/state'](this.config.item, true) },
    idle () { return this.$store.getters['items/state'](this.config.idle && this.config.idle.item) === 'ON' }
  },

  methods: {
    sendCmd (val) {
      console.log(val)
      console.log(this.config.item)
      this.$store.dispatch('items/sendCmd', { itemName: this.config.item, command: val, updateState: true })
    }
  }

}
</script>
