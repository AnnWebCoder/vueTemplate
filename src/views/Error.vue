<template>
  <div id='Error'>
  </div>
</template>

<script>
export default {
  name: 'Error',
  data () {
    return {
    }
  },
  mounted () {
    this.creatScript()
  },
  methods: {
    creatScript () {
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js'
      script.charsrt = 'utf-8'
      document.getElementsByTagName('head')[0].appendChild(script)
    }
  }
}
</script>

<style>
</style>
