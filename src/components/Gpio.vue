<template>
    <div>
        <template v-for="(gpio, index) in gpios">
          <h6>{{ gpio.Description }} <small>({{gpio.PinName}}{{ gpio.ReadOnly == 1 ? '- read-only' : '' }})</small></h6>
          <b-form-radio-group :options="options" 
                              v-on:change="changeState(gpio, $event)"
                              v-bind:key="index"
                              buttons
                              button-variant="outline-primary"
                              v-model="gpio.State">
          </b-form-radio-group>
          <br>
          <br>
        </template>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  created () {
    this.getGpioLocal();
  },
  computed: {
    ...mapGetters({
      gpios: 'basementApi/gpioList'
    })
  },
  data () {
    return {
      // gpios2: [
      //   { Description: "LED", PinName: "Gpio 16", State: 1, ReadOnly: false },
      //   { Description: "Contracton", PinName: "Gpio 20", State: 0, ReadOnly: true }
      // ],
      options: [
        { text: "Off", value: 0 },
        { text: "On", value: 1 }
      ]
    }
  },
  methods: {
    ...mapActions({
      getGpio: 'basementApi/getGpio'
    }),
    getGpioLocal() {
      this.getGpio()
      .catch((error) => {
        console.log(error);
      })
    },
    changeState(gpio, state) {
      // console.log(gpio.PinName);
      // console.log(state);

      if (gpio.ReadOnly === 1) {
        alert("GPIO is read only");
        state = 0;
        this.$store.commit('basementApi/updateGpio', { gpio, state })
      }
    }
  }
}
</script>