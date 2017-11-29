<template>
  <div>
    <b-table outlined striped  hover :items="items" :fields="tabFields">
      <template slot="ReceivingDateTime">
         
      </template>
    </b-table>
  </div>
</template>

<script>
import TableFormatter from '@/Formatters';

export default {
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