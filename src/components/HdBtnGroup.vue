<template>
  <div
    v-if="item"
    class="column items-center q-gutter-y-sm"
    style="width: 115px;"
  >
    <div class="text-caption text-center">{{config.label || item.label}}</div>
    <q-btn-group outline>
      <q-btn
        v-for="(command, coIdx) in config.commands"
        :key="coIdx"
        @click="sendCmd(command.value)"
        :icon="command.icon"
        :label="command.label"
        dense
        color="grey-9"
        :text-color="command.value === state ? 'primary' : ''"
      />
    </q-btn-group>

    <div class="text-caption text-grey text-center">{{state}}</div>

  </div>
</template>

<script>
export default {

  props: ['config'],

  computed: {
    item () { return this.$store.getters['items/name'](this.config.item) },
    state () { return this.item.state }

  },

  methods: {
    sendCmd (val) {
      this.$store.dispatch('items/sendCmd', { itemName: this.config.item, command: val, updateState: true })
    }
  }

}
</script>
