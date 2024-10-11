<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { formatNumber } from '../helpers/utils'
import { getUsers } from '../use/UserAPI' // Import the getUsers function

const users = ref([])
onMounted(async () => {
  users.value = await getUsers() // Assign fetched data to users
})
</script>
<template>
  <div>
    <h3>number of users {{ formatNumber(users.length) }}</h3>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user">
        {{ user?.FristName }} - {{ user?.Email }} {{ user?.Phone }}
      </li>
    </ul>

    <p v-else>No users available</p>
  </div>
</template>
