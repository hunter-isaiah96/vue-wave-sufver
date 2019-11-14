## Installation
```bash
npm i vue-wave-surfer
```
or
```bash
yarn add vue-wave-surfer
```

## Module
As a global vue-cli plugin
```javascript
import Vue from 'vue'
import VueWaveSurfer from 'vue-wavesurfer'

Vue.use(VueWaveSurfer)
```
As a nuxt global plugin
```javascript
// plugins/vue-wavesurfer.js
import Vue from 'vue'
import VueWaveSurfer from 'wavesurfer-vue'

Vue.use(VueWaveSurfer)
```

```javascript
// nuxt.config.js
export default {
  plugins: [
    '~/plugins/vue-wavesurfer'
  ]
}
```
As a component plugin
```javascript
import VueWaveSurfer from 'vue-wavesurfer'
export default {
  components: {
    VueWaveSurfer
  }
}
```

## Usage
```vue
<template>
  <vue-wave-surfer :src="file" :options="options"></vue-wave-surfer>
</template>
<script>
export default {
  data() {
    return {
      options: {
      },
      file: 'http://example.com/file.mp3'
    }
  }
}
</script>
```

## Options
See the list of options in the [official documentation](https://wavesurfer-js.org/docs/options.html)

## Using Plugins
An example implementing the [Cursor](https://wavesurfer-js.org/plugins/cursor.html) plugin
```vue
<script>
import Cursor from 'wavesurfer.js/dist/plugin/wavesurfer.cursor';
export default {
  data() {
    return {
      options: {
        plugins: [
          Cursor.create()
        ]
      }
    }
  }
}
</script>
```

## Capturing Events
1. Create a vue-wave-surfer element and adding a ref to it
2. Create a computed property returning the elemenents waveSurfer object
3. Access waveSurfer events and methods in the mounted() function
```vue
<vue-wave-surfer src="url.mp3" ref="surf"></vue-wave-surfer>
<script
export default {
  mounted() {
    this.player.on('ready', () => {
      console.log('ready')
    })
  },
  computed: {
    player() {
      return this.$refs.surf.waveSurfer
    }
  }
}
</script>
```
