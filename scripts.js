const Counter = {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    add() {
      this.counter++
    }
  }
}

Vue.createApp(Counter).mount('#counter')
