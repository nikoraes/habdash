export default {
  editLayout: false,
  current: 0,
  pages: [
    {
      id: 0,
      order: 1,
      config: {
        title: 'Gelijkvloers',
        icon: 'mdi-numeric-0-box-outline'
      },
      cards: [
        {
          id: 1,
          position: { x: 0, y: 0, w: 2, h: 15 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Leefruimte',
              values: [
                { item: 'Temperature_GF_Living1', unit: '°C' },
                { item: 'Humidity_GF_Living', unit: '%' },
                { item: 'CO2_GF_Living', unit: 'ppm' }
              ]
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_GF_Kitchen_Island_Ceiling', 'Light_GF_Kitchen_Wall', 'Light_GF_Dining_Pendant', 'Light_GF_Living_Ceiling_Zone', 'Light_GF_Living_Floorlamp']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Kitchen_Island_Ceiling', icon: 'mdi-lightbulb-group-outline' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Kitchen_Wall', icon: 'mdi-lightbulb-group-outline' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Dining_Pendant', colorTemperatureItem: 'Light_GF_Dining_Pendant_ColorTemperature', icon: 'mdi-wall-sconce-flat', label: 'Tafel' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Living_Ceiling_Zone', icon: 'mdi-lightbulb-group-outline', label: 'Plafond' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Living_Floorlamp', icon: 'mdi-floor-lamp', label: 'Vloerlamp' }
            }
          ]
        },
        {
          id: 6,
          position: { x: 2, y: 6, w: 2, h: 9 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Overige'
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_GF_Garage_Ceiling', 'Light_GF_Spandrel_Wall', 'Light_GF_Entrance_Ceiling', 'Light_FF_Hall_Ceiling']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Garage_Ceiling' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Spandrel_Wall' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_GF_Entrance_Ceiling' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_FF_Hall_Ceiling' }
            }
          ]
        },
        {
          id: 3,
          position: { x: 4, y: 0, w: 4, h: 8 },
          type: 'HdWeatherCard',
          config: {
            currentLabel: 'Nu',
            currentCondition: { item: 'Weather_CurrentCondition' },
            currentIconId: { item: 'Weather_CurrentIconId' },
            currentTemperature: { item: 'Weather_CurrentTemperature', unit: '°C' },
            forecastTodayLabel: 'Vandaag',
            forecastTodayCondition: { item: 'Weather_ForecastTodayCondition' },
            forecastTodayIconId: { item: 'Weather_ForecastTodayIconId' },
            forecastTodayMinTemperature: { item: 'Weather_ForecastTodayMinTemperature', unit: '°C' },
            forecastTodayMaxTemperature: { item: 'Weather_ForecastTodayMaxTemperature', unit: '°C' },
            forecastTomorrowLabel: 'Morgen',
            forecastTomorrowCondition: { item: 'Weather_ForecastTomorrowCondition' },
            forecastTomorrowIconId: { item: 'Weather_ForecastTomorrowIconId' },
            forecastTomorrowMinTemperature: { item: 'Weather_ForecastTomorrowMinTemperature', unit: '°C' },
            forecastTomorrowMaxTemperature: { item: 'Weather_ForecastTomorrowMaxTemperature', unit: '°C' },
            forecastDay2Label: 'Overmorgen',
            forecastDay2Condition: { item: 'Weather_ForecastDay2Condition' },
            forecastDay2IconId: { item: 'Weather_ForecastDay2IconId' },
            forecastDay2MinTemperature: { item: 'Weather_ForecastDay2MinTemperature', unit: '°C' },
            forecastDay2MaxTemperature: { item: 'Weather_ForecastDay2MaxTemperature', unit: '°C' }
          }
        },
        {
          id: 4,
          position: { x: 2, y: 0, w: 2, h: 6 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Terras'
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_Terrace']
            }
          },
          widgets: [
            {
              type: 'HdLouvres',
              config: { item: 'Louvres_Terrace_Angle', unit: '°' }
            },
            {
              type: 'HdLightBtn',
              config: { item: 'Light_Terrace', icon: 'mdi-led-strip-variant' }
            }/* ,
            {
              type: 'HdChips',
              config: {
                item: 'Louvres_Terrace_Mode',
                label: ' ',
                commands: [
                  { value: 'auto', label: 'Auto' },
                  { value: 'man', label: 'Man' },
                  { value: 'open', label: 'Open' }
                ]
              }
            } */
          ]
        },
        {
          id: 7,
          position: { x: 8, y: 0, w: 2, h: 15 },
          type: 'HdMusicCard',
          config: {
            sources: ['ChromecastGroup_Living', 'ChromecastHEarGo', 'ChromecastHTZF9'],
            stations: [
              { value: 'http://icecast.vrtcdn.be/stubru-high.mp3', label: 'Stu Bru', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/VRT_StuBru_logo.svg/1200px-VRT_StuBru_logo.svg.png' },
              { value: 'http://ibizaglobalradio.streaming-pro.com:8024/;?type=http&nocache=25542', label: 'Ibiza Global', img: 'https://cdn-radiotime-logos.tunein.com/s54700g.png' },
              { value: 'http://streamingp.shoutcast.com/TomorrowlandOneWorldRadio', label: 'TML OWR', img: 'https://lh3.googleusercontent.com/iq5zguiJhKqspOs7XOmhhGW0ALhmM58eC9PAXI0g3-cOCwDip1XWquWAVkyoJkNRviA' },
              { value: 'http://lb.zenfm.be/zenfm.mp3', label: 'ZenFM', img: 'https://mytuner.global.ssl.fastly.net/media/tvos_radios/sxScAvg2BB.png' },
              { value: 'http://lb.topradio.be/topradio.mp3', label: 'TOPradio', img: 'https://www.topradio.be/assets/page/img/cover.jpg' },
              { value: 'http://icecast.vrtcdn.be/mnm-high.mp3', label: 'MNM', img: 'https://pbs.twimg.com/profile_images/1003250095083741185/E6KDAehu_400x400.jpg' }
            ]
          }
        },
        {
          id: 9,
          position: { x: 4, y: 8, w: 2, h: 3 },
          type: 'HdCard',
          widgets: [
            {
              type: 'HdState',
              config: {
                label: 'PV',
                main: { item: 'PV_Power_AC1', unit: 'W' }
              }
            }
          ]
        },
        {
          id: 10,
          position: { x: 4, y: 11, w: 2, h: 4 },
          type: 'HdClock'
        }
      ]
    },
    {
      id: 1,
      order: 0,
      config: {
        title: 'Boven',
        icon: 'mdi-numeric-1-box-outline'
      },
      cards: [
        {
          id: 21,
          position: { x: 0, y: 3, w: 2, h: 3 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Gang'
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_FF_Hall']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_FF_Hall_Ceiling', label: ' ' }
            }
          ]
        },
        {
          id: 5,
          position: { x: 0, y: 0, w: 2, h: 3 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Badkamer',
              values: [
                { item: 'Temperature_FF_Bath', unit: '°C' },
                { item: 'Humidity_FF_Bath', unit: '%' }
              ]
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_FF_Bath']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_FF_Bath', label: ' ', icon: 'mdi-lightbulb-group-outline' }
            }
          ]
        },
        {
          id: 15,
          position: { x: 2, y: 0, w: 3, h: 6 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Henri'
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_FF_Henri']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_FF_Henri_Ceiling', icon: 'mdi-globe-light' }
            },
            {
              type: 'HdBtnGroup',
              config: { item: 'Screen_Henri', label: 'Screen', commands: [{ value: 'UP', icon: 'mdi-chevron-up' }, { value: 'STOP', icon: 'mdi-close' }, { value: 'DOWN', icon: 'mdi-chevron-down' }] }
            }
          ]
        },
        {
          id: 16,
          position: { x: 5, y: 0, w: 3, h: 6 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Renée',
              values: [
                { item: 'Temperature_FF_Renee', unit: '°C' },
                { item: 'Humidity_FF_Renee', unit: '%' }
              ]
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_FF_Renee']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_FF_Renee_Ceiling', label: ' ', icon: 'mdi-globe-light' }
            },
            {
              type: 'HdBtnGroup',
              config: { item: 'Screen_Renee', label: 'Screen', commands: [{ value: 'UP', icon: 'mdi-chevron-up' }, { value: 'STOP', icon: 'mdi-close' }, { value: 'DOWN', icon: 'mdi-chevron-down' }] }
            }
          ]
        },
        {
          id: 17,
          position: { x: 8, y: 0, w: 2, h: 3 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Slaapkamer',
              values: [
                { item: 'Temperature_FF_Bed', unit: '°C' },
                { item: 'CO2_FF_Bed', unit: 'ppm' }
              ]
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_FF_Bed_Ceiling']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_FF_Bed_Ceiling', label: ' ', icon: 'mdi-globe-light' }
            }
          ]
        },
        {
          id: 18,
          position: { x: 8, y: 3, w: 2, h: 3 },
          type: 'HdCard',
          config: {
            title: {
              main: 'Zolder'
            },
            leftBar: {
              color: '#ffb46b',
              items: ['Light_SF_Attic_Color']
            }
          },
          widgets: [
            {
              type: 'HdLightBtn',
              config: { item: 'Light_SF_Attic_Color', label: ' ', icon: 'mdi-led-strip-variant' }
            }
          ]
        }
      ]
    }
  ]

}
