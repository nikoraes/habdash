/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

import lang from 'quasar/lang/en-us'

import iconSet from 'quasar/icon-set/mdi-v5'


import Vue from 'vue'

import {Quasar,Notify} from 'quasar'


Vue.use(Quasar, { config: {"dark":true,"notify":{"position":"top","timeout":4000,"closeBtn":true}},lang: lang,iconSet: iconSet,plugins: {Notify} })
