<template>
  <div
    v-if="mainItem"
    class="column items-center q-gutter-y-sm q-pa-sm"
  >
    <div class="text-caption text-center">{{config.label || config.main.label || mainItem.label}}</div>

    <div class="row items-start justify-center no-wrap">
      <div class="text-h3">
        <q-icon
          :name="config.main.icon"
          v-if="config.main.icon"
          size="xl"
          class="q-mr-xs"
        />{{mainState.split('.')[0]}}</div>
      <div
        v-if="mainState.split('.').length>1"
        class="text-h5"
      >{{mainState.split('.')[1].substring(0,1)}}</div>
      <div
        v-if="config.main.unit"
        class="text-h5 text-grey"
      >{{config.main.unit}}</div>
    </div>
    <div class="column text-grey q-mt-none">
      <div>
        <q-icon
          :name="config.sub1.icon"
          v-if="config.sub1 && config.sub1.icon"
          size="xs"
          class="q-mr-xs"
        />{{sub1State}}{{config.sub1 && config.sub1.unit}}</div>
      <div>
        <q-icon
          :name="config.sub2.icon"
          v-if="config.sub2 && config.sub2.icon"
          size="xs"
          class="q-mr-xs"
        />{{sub2State}}{{config.sub2 && config.sub2.unit}}</div>
    </div>
  </div>

</template>

<script>
export default {

  props: ['config'],

  computed: {
    mainItem () { return this.$store.getters['items/name'](this.config.main.item) },
    mainState () { return this.$store.getters['items/state'](this.config.main.item, true) },
    sub1State () { return this.config.sub1 && this.$store.getters['items/state'](this.config.sub1.item, true) },
    sub2State () { return this.config.sub2 && this.$store.getters['items/state'](this.config.sub2.item, true) }
  }

}
</script>
