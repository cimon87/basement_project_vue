<template>
  <div>
    <b-alert :show="showError" dismissible variant="danger">
      {{ requestError }}
    </b-alert>
    <b-button variant="outline-secondary" @click="getInboxLocal">Refresh</b-button>
    <b-table striped hover :busy.sync="isLoading" :items="inboxList" :fields="tabFields">
      <template slot="ReceivingDateTime">
         
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import TableFormatter from '@/formatters';

export default {
  computed: {
    ...mapGetters({
      inboxList: 'basementApi/inboxList',
      isLoading: 'basementApi/isLoading'
    }),
    requestError () {
      return this.errorMessage;
    },
    showError () {
      return this.errorMesssage !== '';
    }
  },
  created () {
    this.getInboxLocal();
  },
  methods: {
    ...mapActions({
      getInbox: 'basementApi/getInbox'
    }),
    getInboxLocal() {
      this.getInbox()
      .catch((err) => {
        console.log(err);
        this.errorMesssage = err.Message;
      })
    }
  },
  data () {
    return {
      errorMesssage: "",
      tabFields: [
        { key: 'SenderNumber', label: "Sender", sortable: true },
        { key: 'TextDecoded', label: "Text", sortable: true },
        {
          key: 'ReceivingDateTime',
          label: "Date",
          formatter: TableFormatter.dateFormatter,
          sortable: true
        }
      ]
    }
  }
}
</script>