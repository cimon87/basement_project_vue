<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Inbox">
          <app-inbox id="inbox"></app-inbox>
        </b-tab>
        <b-tab title="Sent">
          <app-sent></app-sent>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import Inbox from './Inbox';
import Sent from './Sent';

export default {
  data() {
    return {};
  },
  components: {
    appInbox: Inbox,
    appSent: Sent
  }
};
</script>

<style scoped>
  .no-margin {
    padding: 0.1rem !important;
  }
</style>