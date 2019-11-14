<template>
  <div>
    <slot />
  </div>
</template>
<!-- eslint-disable -->
<script>
import WaveSurfer from "wavesurfer.js";
export default {
  props: ["src", "options", "controls"],
  data() {
    return {
      waveSurfer: {}
    };
  },
  mounted() {
    let options = this.options;
    let wsOptions = Object.assign(
      {
        container: this.$el.firstChild
      },
      options
    );
    this.waveSurfer = new WaveSurfer.create(wsOptions);
    this.waveSurfer.load(this.src);
  },
  beforeDestroy() {
    this.waveSurfer.destroy();
  }
};
</script>

<style lang="css" scoped>
div > div {
  position: relative;
}
</style>