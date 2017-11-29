<template>
  <div>
    <b-table outlined striped  hover :items="items" :fields="tabFields">
      <template slot="ReceivingDateTime">
         
      </template>
    </b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          { SenderNumber: "+48603705226", TextDecoded: "Lorem ipsum cos tam bla bla bla bla bla bla", ReceivingDateTime: new Date() },
          { SenderNumber: "+48603705226", TextDecoded: "Lorem ipsum cos tam bla bla bla bla bla bla", ReceivingDateTime: new Date() },
          { SenderNumber: "+48603705226", TextDecoded: "Lorem ipsum cos tam bla bla bla bla bla bla", ReceivingDateTime: new Date() },
          { SenderNumber: "+48603705226", TextDecoded: "Lorem ipsum cos tam bla bla bla bla bla bla", ReceivingDateTime: new Date() }
        ],
        tabFields: [
          { key: 'SenderNumber', label: "Sender", sortable: true },
          { key: 'TextDecoded', label: "Text", sortable: true },
          {
            key: 'ReceivingDateTime',
            label: "Date",
            formatter: (value, key, item) => {
              let [date, time] = value.toLocaleString('pl-PL').split(', ');
              return date + ' ' + time;
            },
            sortable: true
          }
        ]
      }
    }
  }
</script>