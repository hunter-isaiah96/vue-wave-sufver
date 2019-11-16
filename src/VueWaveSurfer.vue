<template>
  <div></div>
</template>

<script>
import WaveSurfer from "wavesurfer.js";
export default {
  props: ['src', 'options'],
  data() {
    return {
      waveSurfer: {}
    };
  },
  mounted() {
    let options = this.options;
    let wsOptions = Object.assign({ container: this.$el }, options);
    this.waveSurfer = new WaveSurfer.create(wsOptions);
    this.waveSurfer.load(this.src);
  },
  beforeDestroy() {
    this.waveSurfer.destroy();
  }
};
</script>

<style lang="css" scoped>
div {
  position: relative;
}
</style>