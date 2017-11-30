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
    onSend(event) {
      console.log("To: $(this.sms.to)");
      console.log("Text: $(this.sms.text)");
    }
  }
};
</script>

<style lang="scss" scoped>

#smsCountry, #smsTo {
  display: inline-block;
}

</style>

