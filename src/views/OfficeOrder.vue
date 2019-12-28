<template>
  <v-table :data="users">
    <thead slot="head">
      <th>Date</th>
      <th>Subject</th>
      <th>Office Order/Circular</th>
    </thead>
    <tbody slot="body" slot-scope="{ displayData }">
      <tr v-for="row in displayData" :key="row.id">
        <td>{{ row.date }}</td>
        <td>{{ row.subject }}</td>
        <td>{{ row.office_order }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
import users from "./users.json";

export default {
  name: "TheBasics",
  data: () => ({
    users
  })
};
</script>
