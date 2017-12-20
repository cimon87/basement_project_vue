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

        <b-button type="submit" variant="primary">Submit</b-button>
      </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      sms: {
        to: "48",
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
      })
      .catch((error) => {
        console.log(error);
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

