<template>
  <div>
    <b-table outlined striped  hover :items="items" :fields="tabFields">
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {"level": "info", "message": "Sent to text ", "timestamp": "2017-11-30T21:06:38.682Z", _rowVariant: 'info'},
          {"level": "info", "message": "Sent to ", "timestamp": "2017-11-30T21:06:39.128Z"},
          {"level": "info", "message": "Sent to +48603705226: Someone is in the basement!! ", "timestamp": "2017-11-30T21:09:15.735Z"}
        ],
        tabFields: [
          { key: 'level', label: "Level", sortable: true },
          { key: 'message', label: "Message", sortable: true },
          {
            key: 'timestamp',
            label: "Date",
            formatter: (value, key, item) => {
              let parsedDate = new Date(value);
              let [date, time] = parsedDate.toLocaleString('pl-PL').split(', ');
              return date + ' ' + time;
            },
            sortable: true
          }
        ]
      }
    }
  }
</script>