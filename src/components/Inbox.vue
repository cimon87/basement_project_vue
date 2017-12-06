<template>
  <div>
    <b-table stacked  :items="inbox" :fields="tabFields">
      <template slot="ReceivingDateTime">
         
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TableFormatter from '@/formatters'
export default {
  computed: {
    inbox () {
      return this.$store.getters['basementApi/inboxList'];
    }
  },
  mounted () {
    this.getInbox();
  },
  methods: {
    ...mapActions({
      getInbox: 'basementApi/getInbox'
    })
  },
  data () {
    return {
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