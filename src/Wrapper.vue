<template>
  <WaveSurfer src="https://file-examples.com/wp-content/uploads/2017/11/file_example_MP3_700KB.mp3" :options="options">
    <div></div>
  </WaveSurfer>
</template>

<script>
import WaveSurfer from './WaveSurfer'
export default {
  components: {
    WaveSurfer
  },
  options: {
    
  }
}
</script>