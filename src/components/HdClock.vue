<template>
  <div class="column fit items-center justify-center q-gutter-y-sm q-pa-sm">
    <div class="text-h3">
      {{hour}}:{{minutes}}
    </div>
    <div class="text-grey q-mt-none">
      {{weekDay}} {{monthDay}}/{{month}}
    </div>
  </div>
</template>

<script>
const padZero = (number) => {
  if (number < 10) {
    return '0' + number
  }
  return number
}

export default {

  data () {
    return {
      ticker: null,
      date: new Date()
    }
  },

  created () {
    this.ticker = setInterval(() => {
      this.date = new Date()
    }, 1000)
  },

  destroyed () {
    clearInterval(this.ticker)
  },

  computed: {
    seconds () { return padZero(this.date.getSeconds()) },
    minutes () { return padZero(this.date.getMinutes()) },
    hour () { return padZero(this.date.getHours()) },
    weekDay () { return new Intl.DateTimeFormat('nl-BE', { weekday: 'long' }).format(this.date) },
    monthDay () { return this.date.getDate() },
    month () { return this.date.getMonth() + 1 }
  }
}
</script>
