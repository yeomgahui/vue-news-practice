<template>
  <div>
    <section>
      <UserProfile :info="fetchedItem">
        <router-link slot="username" :to="`/user/${fetchedItem.user}`">
          {{fetchedItem.user}}
        </router-link>
        <template slot="time">
          {{'Posted '+ fetchedItem.time_ago}}
        </template>
      </UserProfile>
      <h2>
        {{ fetchedItem.title }}
      </h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchedItem.content">
        
      </div>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue'
export default {
  components: {
    UserProfile,
  },
  computed: {
    fetchedItem() {
      return this.$store.state.item;
    }
  },
  created() {
    const itemId = this.$route.query;
    this.$store.dispatch('FETCH_ITEM',itemId);
  }
}
</script>

<style scoped>
</style>