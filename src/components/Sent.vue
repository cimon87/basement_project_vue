<template>
  <div>
    <b-alert :show="showError" dismissible variant="danger">
      {{ requestError }}
    </b-alert>
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
      requestError: 'basementApi/error',
      isLoading: 'basementApi/isLoading'
    }),
    showError () {
      return this.requestError !== undefined;
    }
  },
  created() {
    this.getSentMessages();
  },
  methods: {
    ...mapActions({
      getSentMessages: 'basementApi/getSent'
    })
  },
  data() {
    return {
      items: [
        {
          Id: 1,
          Status: "Sent",
          DestinationNumber: "+48603705226",
          TextDecoded: "Lorem ipsum sth came etc ika",
          SMSCNumber: "+482222222",
          UpdatedInDB: new Date(),
          InsertIntoDB: new Date()
        }
      ],
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