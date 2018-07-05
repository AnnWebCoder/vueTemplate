<template>
  <div class="hello">
    <p>HelloWorld!</p>
    <p>{{ getDemo }}</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      test: 'test'
    }
  },
  computed: {
    ...mapGetters([
      'getDemo'
    ])
  },
  methods: {
    ...mapActions([
      'setTest'
    ]),
    testAxios () {
      this.$axios({
        method: 'post',
        url: 'http://127.0.0.1:8888/test',
        data: {
          test: this.test
        }
      }).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
