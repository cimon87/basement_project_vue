<template>
  <div>
    <b-table outlined striped hover :items="logs" :fields="tabFields">
    </b-table>
  </div>
</template>

<script>
  import LogType from '@/Statics/LogType';
  import RowVariant from '@/Statics/RowVariant';
  import TableFormatter from '@/formatters';
  import { mapActions } from 'vuex';

  export default {
    computed: {
      logs() {
        return this.processItems(this.$store.getters['basementApi/logsList']);
      }
    },
    data() {
      return {
        tabFields: [
          { key: 'level', label: "Level", sortable: true },
          { key: 'message', label: "Message", sortable: true },
          {
            key: 'timestamp',
            label: "Date",
            formatter: TableFormatter.dateFormatter,
            sortable: true
          }
        ]
      }
    },
    created() {
      this.getLogs();
    },
    methods: {
      ...mapActions({
        getLogs: 'basementApi/getLogs'
      }),

      processItems(values) {
        if (values) {
          for (let item of values) {
            if (item.level === LogType.Error) {
              item._rowVariant = RowVariant.Danger;
            }
            if (item.level === LogType.Warning) {
              item._rowVariant = RowVariant.Warning;
            }
          }
        }
        return values;
      }
    }
  }
</script>