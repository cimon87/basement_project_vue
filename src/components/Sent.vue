<template>
  <div>
    <b-alert :show="showError" dismissible variant="danger">
      {{ errorMessageComputed }}
    </b-alert>
    <b-button variant="outline-secondary">Refresh</b-button>
    <b-table outlined striped hover :items="sentList" :fields="tabFields">
    </b-table>
  </div>
</template>

<script>
import TableFormatter from '@/formatters';
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      sentList: 'basementApi/sentList',
      isLoading: 'basementApi/isLoading'
    }),
    showError () {
      return this.errorMessage !== '';
    },
    errorMessageComputed () {
      return this.errorMessage;
    }
  },
  created() {
    this.getMessages();
  },
  methods: {
    ...mapActions({
      getSentMessages: 'basementApi/getSent'
    }),
    getMessages() {
      this.getSentMessages()
      .catch((error) => {
        console.log(error);
        this.errorMessage = error.message;
      })
    }
  },
  data() {
    return {
      errorMessage: '',
      tabFields: [
        { label: "Id", key: "ID", sortable: true },
        { label: "Status", key: "Status", sortable: true },
        { label: "Destination Number", key: "DestinationNumber", sortable: true },
        { label: "Text", key: "TextDecoded", sortable: true },
        { label: "SMSCNumber", key: "SMSCNumber", sortable: true },
        { label: "Updated Date", key: "UpdatedInDB", sortable: true, formatter: TableFormatter.dateFormatter },
        { label: "Inserted Date", key: "InsertIntoDB", sortable: true, formatter: TableFormatter.dateFormatter }
      ]
    };
  }
};
</script>