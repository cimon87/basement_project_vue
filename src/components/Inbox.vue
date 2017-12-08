<template>
  <div>
    <b-alert :show="showError" dismissible variant="danger">
      {{ requestError }}
    </b-alert>
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
      requestError: 'basementApi/error',
      isLoading: 'basementApi/isLoading'
    }),
    showError () {
      return this.requestError !== undefined;
    }
  },
  created () {
    this.getInbox();
  },
  methods: {
    ...mapActions({
      getInbox: 'basementApi/getInbox'
    })
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