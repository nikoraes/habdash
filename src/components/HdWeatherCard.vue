<template>
  <div class="fit row justify-evenly">

    <div class="col-12 column items-center q-gutter-y-sm q-pa-sm">
      <div class="text-caption text-center">{{config.currentLabel}}</div>
      <div class="row items-end no-wrap q-gutter-x-sm">
        <q-icon
          :name="'img:statics/weather/'+icon[currentIconId]"
          size="64px"
        />
        <div
          v-if="currentTemperature"
          class="row items-start no-wrap"
        >
          <div class="text-h3 ">{{currentTemperature.split('.')[0]}}</div>
          <div
            v-if="currentTemperature.split('.').length>1"
            class="text-h5"
          >{{currentTemperature.split('.')[1].substring(0,1)}}</div>
          <div
            v-if="this.config.currentTemperature.unit"
            class="text-h5 text-grey"
          >{{this.config.currentTemperature.unit}}</div>
        </div>
      </div>
      <div class="text-caption text-grey text-center">{{currentCondition}}</div>

    </div>

    <div
      class="col-9"
      style="margin-top: -32px;"
    >
      <v-chart
        ref="chart"
        :options="chartOptions"
        autoresize
        class="full-width"
        style="height: 100px;"
      />
    </div>

    <div class="row q-gutter-x-sm">

      <div class="column items-center q-gutter-y-sm q-pa-sm">
        <div class="text-caption text-center">{{config.forecastTodayLabel}}</div>
        <q-icon
          :name="'img:statics/weather/'+icon[forecastTodayIconId]"
          size="48px"
        />
        <div class="column">
          <div
            v-if="forecastTodayMaxTemperature && forecastTodayMinTemperature"
            class="text-caption text-grey text-center"
          >{{forecastTodayMaxTemperature.split('.')[0]}}/{{forecastTodayMinTemperature.split('.')[0]}}{{config.forecastTodayMinTemperature.unit}}</div>
          <div class="text-caption text-grey text-center">{{forecastTodayCondition}}</div>
        </div>
      </div>

      <div
        v-if="forecastTomorrowIconId && forecastTomorrowCondition"
        class="column items-center q-gutter-y-sm q-pa-sm"
      >
        <div class="text-caption text-center">{{config.forecastTomorrowLabel}}</div>
        <q-icon
          :name="'img:statics/weather/'+icon[forecastTomorrowIconId]"
          size="48px"
        />
        <div class="column">
          <div
            v-if="forecastTomorrowMaxTemperature && forecastTomorrowMinTemperature"
            class="text-caption text-grey text-center"
          >{{forecastTomorrowMaxTemperature.split('.')[0]}}/{{forecastTomorrowMinTemperature.split('.')[0]}}{{config.forecastTomorrowMinTemperature.unit}}</div>
          <div class="text-caption text-grey text-center">{{forecastTomorrowCondition}}</div>
        </div>
      </div>

      <div
        v-if="forecastDay2IconId && forecastDay2Condition"
        class="column items-center q-gutter-y-sm q-pa-sm"
      >
        <div class="text-caption text-center">{{forecastDay2Label || config.forecastDay2Label}}</div>
        <q-icon
          :name="'img:statics/weather/'+icon[forecastDay2IconId]"
          size="48px"
        />
        <div class="column">
          <div
            v-if="forecastDay2MaxTemperature && forecastDay2MinTemperature"
            class="text-caption text-grey text-center"
          >{{forecastDay2MaxTemperature.split('.')[0]}}/{{forecastDay2MinTemperature.split('.')[0]}}{{config.forecastDay2MinTemperature.unit}}</div>
          <div class="text-caption text-grey text-center">{{forecastDay2Condition}}</div>
        </div>
      </div>

      <div
        v-if="forecastDay3IconId && forecastDay3Condition"
        class="column items-center q-gutter-y-sm q-pa-sm"
      >
        <div class="text-caption text-center">{{forecastDay3Label}}</div>
        <q-icon
          :name="'img:statics/weather/'+icon[forecastDay3IconId]"
          size="48px"
        />
        <div class="column">
          <div
            v-if="forecastDay3MaxTemperature && forecastDay3MinTemperature"
            class="text-caption text-grey text-center"
          >{{forecastDay3MaxTemperature.split('.')[0]}}/{{forecastDay3MinTemperature.split('.')[0]}}{{config.forecastDay3MinTemperature.unit}}</div>
          <div class="text-caption text-grey text-center">{{forecastDay3Condition}}</div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import moment from 'moment'

import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'

export default {

  props: ['card'],

  components: {
    'v-chart': ECharts
  },

  data () {
    return {
      icon: {
        '01d': 'weather-clear.png',
        '01n': 'weather-clear-night.png',
        '02d': 'weather-few-clouds-day.png',
        '02n': 'weather-few-clouds-night.png',
        '03d': 'weather-scattered-clouds.png',
        '03n': 'weather-scattered-clouds.png',
        '04d': 'weather-broken-clouds.png',
        '04n': 'weather-broken-clouds.png',
        '09d': 'weather-showers.png',
        '09n': 'weather-showers.png',
        '10d': 'weather-rain-day.png',
        '10n': 'weather-rain-night.png',
        '11d': 'weather-storm.png',
        '11n': 'weather-storm.png',
        '13d': 'weather-snow.png',
        '13n': 'weather-snow.png',
        '50d': 'weather-mist.png',
        '50n': 'weather-mist.png'
      },
      weekday: ['Maandag', 'Dinsdag']
    }
  },

  computed: {
    config () { return this.card.config },
    currentCondition () { return this.$store.getters['items/state'](this.config.currentCondition.item, true) },
    currentIconId () { return this.$store.getters['items/state'](this.config.currentIconId.item, true) },
    currentTemperature () { return this.$store.getters['items/state'](this.config.currentTemperature.item, true) },
    // forecastTodayDate () { return this.$store.getters['items/state'](this.config.forecastTodayDate.item, true) },
    forecastTodayCondition () { return this.$store.getters['items/state'](this.config.forecastTodayCondition.item, true) },
    forecastTodayIconId () { return this.$store.getters['items/state'](this.config.forecastTodayIconId.item, true) },
    forecastTodayMinTemperature () { return this.$store.getters['items/state'](this.config.forecastTodayMinTemperature.item, true) },
    forecastTodayMaxTemperature () { return this.$store.getters['items/state'](this.config.forecastTodayMaxTemperature.item, true) },
    forecastTomorrowCondition () { return this.$store.getters['items/state'](this.config.forecastTomorrowCondition.item, true) },
    forecastTomorrowIconId () { return this.$store.getters['items/state'](this.config.forecastTomorrowIconId.item, true) },
    forecastTomorrowMinTemperature () { return this.$store.getters['items/state'](this.config.forecastTomorrowMinTemperature.item, true) },
    forecastTomorrowMaxTemperature () { return this.$store.getters['items/state'](this.config.forecastTomorrowMaxTemperature.item, true) },
    forecastDay2Label () { return this.config.forecastDay2Date && new Intl.DateTimeFormat('nl-BE', { weekday: 'long' }).format(new Date(this.$store.getters['items/state'](this.config.forecastDay2Date.item, true))) },
    forecastDay2Condition () { return this.$store.getters['items/state'](this.config.forecastDay2Condition.item, true) },
    forecastDay2IconId () { return this.$store.getters['items/state'](this.config.forecastDay2IconId.item, true) },
    forecastDay2MinTemperature () { return this.$store.getters['items/state'](this.config.forecastDay2MinTemperature.item, true) },
    forecastDay2MaxTemperature () { return this.$store.getters['items/state'](this.config.forecastDay2MaxTemperature.item, true) },
    forecastDay3Label () { return this.config.forecastDay3Date && new Intl.DateTimeFormat('nl-BE', { weekday: 'long' }).format(new Date(this.$store.getters['items/state'](this.config.forecastDay3Date.item, true))) },
    forecastDay3Condition () { return this.$store.getters['items/state'](this.config.forecastDay3Condition.item, true) },
    forecastDay3IconId () { return this.$store.getters['items/state'](this.config.forecastDay3IconId.item, true) },
    forecastDay3MinTemperature () { return this.$store.getters['items/state'](this.config.forecastDay3MinTemperature.item, true) },
    forecastDay3MaxTemperature () { return this.$store.getters['items/state'](this.config.forecastDay3MaxTemperature.item, true) },

    rainForecastDate () { return this.config.rainForecast && new Date(this.$store.getters['items/state'](this.config.rainForecast.dateItem, true)) },
    rainForecastData () {
      return this.config.rainForecast && this.config.rainForecast.forecastItems && this.config.rainForecast.forecastItems.map(fi => {
        return [moment(this.rainForecastDate).add(fi.minutes, 'm').toDate(), this.$store.getters['items/state'](fi.item, true)]
      })
    },

    chartOptions () {
      return {
        xAxis: {
          type: 'time',
          // show: false,
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
          name: 'rain',
          type: 'line',
          showSymbol: false,
          lineStyle: { color: '#00a9e4' },
          data: this.rainForecastData
        }]
      }
    }
  }

}
</script>
