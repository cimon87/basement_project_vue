<template>
    <div>
        <h6>Security: </h6>
        <b-form-radio-group v-model="securityEnabled" 
                            :options="options" 
                            buttons 
                            button-variant="outline-primary">
        </b-form-radio-group>

        <br>
        <br>

        <h6>Silent mode: </h6>
        <b-form-radio-group v-model="silentModeEnabled"
                            :options="options" 
                            buttons
                            button-variant="outline-primary">
        </b-form-radio-group>

        <br>
        <br>

        <h6>Sm mode: </h6>
        <b-form-radio-group v-model="smsEnabled" 
                            :options="options" 
                            buttons
                            button-variant="outline-primary">
        </b-form-radio-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
      on: 0,
      off: 1,
      securityEnabled: 0,
      silentModeEnabled: 0,
      smsEnabled: 0,

      options: [
        { text: 'Off', value: 0 },
        { text: 'On', value: 1 }
      ]
    };
  }
};
</script>