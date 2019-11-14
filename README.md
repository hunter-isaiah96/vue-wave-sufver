## STILL IN DEVELOPMENT!

## Installation
```bash
npm install https://github.com/hunter-isaiah96/vue-wavesurver.git
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
An example implenting the [Cursor](https://wavesurfer-js.org/plugins/cursor.html) plugin
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
