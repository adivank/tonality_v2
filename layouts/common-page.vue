<template>
  <div class="dark-bg">
    <Header />
    <Sidebar />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  components: { Header, Sidebar }
}
</script>
