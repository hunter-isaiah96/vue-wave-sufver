import WaveSurfer from '../components/WaveSurfer.vue';

const Components = {
  WaveSurfer
};

const WaveSurferPlugin = {
  install(Vue, options) {
    Object.keys(Components).forEach(component => {
      Vue.component(Components[component].name, Components[component]);
    });
  }
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(WaveSurferPlugin);
}

export { WaveSurfer, WaveSurferPlugin };

export default WaveSurferPlugin;
