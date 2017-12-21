<template>
  <div>
      <b-form @submit.prevent="onSend">
          <b-form-group label="To:"
                        label-for="smsTo">
            <b-form-input id="smsTo"
                          type="number"
                          v-model="sms.to"
                          placeholder="Enter phone number here..."
                          required>
                          {{ this.sms.to }}
            </b-form-input>
          </b-form-group>

        <b-form-group label="Text:"
                        label-for="smsText">
            <b-form-textarea id="smsText"
                             v-model="sms.text"
                             rows="3"
                             placeholder="Text something..."
                             required>
            </b-form-textarea>
        </b-form-group>
        <b-alert :variant="smsSendType"
             dismissible
             :show="showSmsStatus"
             @dismissed="showSmsStatus=false">
          {{ smsSendMessage }}
        </b-alert>
        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      showSmsStatus: false,
      smsSendType: 'success',
      smsSendMessage: '',
      sms: {
        to: "48603705226",
        text: ""
      }
    };
  },
  methods: {
    ...mapActions({
      sendSms: 'basementApi/sendSms'
    }),
    sendSmsLocal(to, text) {
      this.sendSms({to, text})
      .then((response) => {
        console.log(response);

        this.smsSendType = 'success';
        this.smsSendMessage = "Sent";
        this.showSmsStatus = true;
      })
      .catch((error) => {
        console.log(error);

        this.smsSendType = 'danger';
        this.smsSendMessage = "Sth wrong. Check console logs";
        this.showSmsStatus = true;
      })
    },
    onSend(event) {
      let smsTo = this.sms.to;
      let smsText = this.sms.text;

      let beginWith = smsTo.substring(0, 1);
      if (beginWith !== '+') {
        smsTo = '+' + smsTo;
      }

      this.sendSmsLocal(smsTo, smsText);
    }
  }
};
</script>

<style lang="scss" scoped>

#smsCountry, #smsTo {
  display: inline-block;
}

</style>

