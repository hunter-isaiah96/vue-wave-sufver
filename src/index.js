import VueWaveSurfer from './VueWaveSurfer.vue';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueWaveSurfer);
}

export default {
  install(Vue, options) {
    Vue.component('vue-wave-surfer', VueWaveSurfer);
  }
}
