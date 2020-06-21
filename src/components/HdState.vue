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
    <div
      class="full-width"
      style="margin-top: -64px; margin-bottom: -36px; min-width: 200px;"
    >
      <v-chart
        ref="chart"
        :options="chartOptions"
        autoresize
        class="full-width"
        style="height: 150px;"
      />
    </div>
  </div>

</template>

<script>
import axios from 'axios'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'

export default {

  props: ['config'],

  components: {
    'v-chart': ECharts
  },

  data () {
    return {
      mainChartData: []
    }
  },

  mounted () {
    if (this.config.main.includeChart) {
      this.getMainPersistenceData()
    }
  },

  computed: {
    mainItem () { return this.$store.getters['items/name'](this.config.main.item) },
    mainState () { return this.$store.getters['items/state'](this.config.main.item, true) },
    sub1State () { return this.config.sub1 && this.$store.getters['items/state'](this.config.sub1.item, true) },
    sub2State () { return this.config.sub2 && this.$store.getters['items/state'](this.config.sub2.item, true) },

    chartOptions () {
      return {
        xAxis: {
          type: 'time',
          show: false,
          axisLine: false,
          axisTick: false,
          splitLine: false,
          axisLabel: {
            formatter: val => {
              const date = new Date(val)
              return `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            show: false
          }
        ],
        textStyle: {
          fontFamily: "'Overpass' , '-apple-system', 'Helvetica Neue', Helvetica, Arial, sans-serif",
          color: '#9e9e9e'
        },
        series: [{
          name: 'main',
          type: 'line',
          showSymbol: false,
          lineStyle: { color: this.config.main.chartColor || '#f8da40' },
          data: this.mainChartData
        }]
      }
    }
  },

  methods: {
    async getMainPersistenceData () {
      const response = await axios.get('/rest/persistence/items/' + this.config.main.item)
      this.mainChartData = response.data.data.map(d => { return [new Date(d.time), parseFloat(d.state)] })
      setTimeout(this.getMainPersistenceData(), 600000)
    }
  }

}
</script>
