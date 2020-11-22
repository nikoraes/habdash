<template>
  <q-layout view="hHh Lpr lFf">

    <q-drawer
      v-model="drawer"
      :mini="miniState"
      :breakpoint="500"
      content-class="bg-grey-10"
      class="gt-xs"
    >
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item
            clickable
            v-ripple
            v-for="l in links"
            :key="l.id"
            @click="current = l.id"
          >
            <q-item-section
              avatar
              :class="current === l.id ? 'text-primary' : ''"
            >
              <q-icon :name="l.icon" />
            </q-item-section>
            <q-item-section>
              {{l.label}}
            </q-item-section>
          </q-item>

          <q-item
            clickable
            v-ripple
            @click="editLayout = !editLayout"
          >
            <q-item-section
              avatar
              :class="editLayout ? 'text-primary' : ''"
            >
              <q-icon name="mdi-pencil" />
            </q-item-section>
            <q-item-section>
              Edit
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="lt-sm">
      <q-toolbar class="bg-black text-white">
        <q-tabs
          v-model="current"
          narrow-indicator
          dense
          no-caps
          class="full-width"
          align="justify"
        >
          <q-tab
            v-for="l in links"
            :key="l.id"
            :icon="l.icon"
            :name="l.id"
          />
        </q-tabs>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      drawer: true,
      miniState: true
    }
  },

  computed: {
    editLayout: {
      get () { return this.$store.state.dashboards.editLayout },
      set (val) { this.$store.commit('dashboards/updateEditLayout', val) }
    },

    current: {
      get () { return this.$store.state.dashboards.current },
      set (val) { this.$store.commit('dashboards/updateCurrent', val) }
    },

    links () {
      return this.$store.state.dashboards.pages
        .slice()
        .sort((a, b) => a.order < b.order ? -1 : 1)
        .map(p => {
          return {
            id: p.id,
            label: p.config.title,
            icon: p.config.icon
          }
        })
    }
  }
}
</script>
