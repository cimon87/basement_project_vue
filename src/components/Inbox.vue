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
          { key: 'SenderNumber', label: "Sender" },
          { key: 'TextDecoded', label: "Text" },
          {
            key: 'ReceivingDateTime',
            label: "Date",
            formatter: (value, key, item) => {
              let [date, time] = value.toLocaleString('pl-PL').split(', ');
              return date + ' ' + time;
            }
          }
        ]
      }
    }
  }
</script>