<template>
    <div>
        <template v-for="(gpio, index) in gpios">
          <h6>{{ gpio.Description }} ({{gpio.PinName}})</h6>
          <b-form-radio-group :options="options" 
                              v-on:click="changeState"
                              buttons
                              button-variant="outline-primary"
                              v-model="gpio.State"
                              :disabled="gpio.ReadOnly">
          </b-form-radio-group>
          <br>
          <br>
        </template>
    </div>
</template>
<script>
export default {
  data () {
    return {
      gpios: [
        { Description: "LED", PinName: "Gpio 16", State: 1, ReadOnly: 0 },
        { Description: "Contracton", PinName: "Gpio 20", State: 0, ReadOnly: 1 }
      ],
      options: [
        { text: "Off", value: 0 },
        { text: "On", value: 1 }
      ]
    }
  },
  methods: {
    changeState(event) {

    }
  }
}
</script>