<template>
  <WaveSurfer :src="love" :options="options">
    <div></div>
  </WaveSurfer>
</template>

<script>
import WaveSurfer from "./WaveSurfer";
import Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor'
import love from "./love.mp3";
export default {
  components: {
    WaveSurfer
  },
  data() {
    return {
      options: {
        cursorColor: 'transparent',
        barWidth: 4,
        barGap: 6,
        waveColor: 'lightgrey',
        progressColor: 'black',
        responsive: true,
        plugins: [
          Cursor.create({
            showTime: true,
            opacity: 1,
            customShowTimeStyle: {
                'background-color': '#000',
                color: '#fff',
                padding: '2px',
                'font-size': '10px'
            }
          })
        ]
        
      },
      love
    };
  }
};
</script>