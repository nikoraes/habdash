import axios from 'axios'

export const initialLoad = (context, credential) => {
  const initialRequests = () => {
    return context.dispatch('items/initialLoad')
      .then(() => {
        context.dispatch('items/watchEvents', credential)
          .then(() => context.commit('setReady'))
      })
  }

  if (credential) {
    axios.defaults.headers.common.Authorization = 'Basic ' + btoa(credential.id + ':' + credential.password)
    context.commit('setUsingStoredCredentials')
    return initialRequests()
  } else {
    return initialRequests()
  }
}
