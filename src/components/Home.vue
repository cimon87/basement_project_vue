<template>
    <div>
        <h6>Security: </h6>
        <b-form-radio-group v-model="securityEnabled" 
                            :options="options" 
                            buttons 
                            @change="updateSecurity($event)"
                            :button-variant="securityEnabled === 1 ? 'outline-primary' : ''">
        </b-form-radio-group>

        <br>
        <br>

        <h6>Silent mode: </h6>
        <b-form-radio-group v-model="silentModeEnabled"
                            :options="options" 
                            buttons
                             @change="updateSilentMode($event)"
                            :button-variant="silentModeEnabled === 1 ? 'outline-primary' : ''">
        </b-form-radio-group>

        <br>
        <br>

        <h6>Sms mode: </h6>
        <b-form-radio-group v-model="smsEnabled" 
                            :options="options" 
                            buttons
                            @change="updateSmsMode($event)"
                            :button-variant="smsEnabled === 1 ? 'outline-primary' : ''">
        </b-form-radio-group>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      status: 'basementApi/securityStatus'
    }),
    securityEnabled() {
      return this.status.Enabled;
    },
    silentModeEnabled() {
      return this.status.SilentMode;
    },
    smsEnabled() {
      return this.status.SmsEnabled;
    }
  },
  methods: {
    ...mapActions({
      getSecurityStatus: 'basementApi/getSecurityStatus',
      setSecurityState: 'basementApi/setSecurityState'
    }),
    updateSecurity(state) {
      this.setSecurityState({Enabled: state});
    },
    updateSilentMode(state) {
      this.setSecurityState({SilentMode: state});
    },
    updateSmsMode(state) {
      this.setSecurityState({SmsEnabled: state});
    }
  },
  created () {
    this.getSecurityStatus();
  },
  data() {
    return {
      on: 0,
      off: 1,

      options: [
        { text: 'Off', value: 0 },
        { text: 'On', value: 1 }
      ]
    };
  }
};
</script>