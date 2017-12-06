<template>
  <div>
    <b-table outlined striped  hover :items="items" :fields="tabFields">
    </b-table>
  </div>
</template>

<script>
  import LogType from '@/Statics/LogType';
  import RowVariant from '@/Statics/RowVariant';
  import TableFormatter from '@/formatters';

  export default {
    data() {
      return {
        items: [
          {"level": "info", "message": "Sent to text ", "timestamp": "2017-11-30T21:06:38.682Z"},
          {"level": "error", "message": "Sent to ", "timestamp": "2017-11-30T21:06:39.128Z"},
          {"level": "warning", "message": "Sent to +48603705226: Someone is in the basement!! ", "timestamp": "2017-11-30T21:09:15.735Z"}
        ],
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
    mounted() {
      this.processItems(this.items);
    },
    methods: {
      processItems(values) {
        for (let item of values) {
          if (item.level === LogType.Error) {
            item._rowVariant = RowVariant.Danger;
          }
          if (item.level === LogType.Warning) {
            item._rowVariant = RowVariant.Warning;
          }
        }

        this.items = values;
      }
    }
  }
</script>