<template>
  <div @click="hideModal">
    <Header @showModal="showModal" />
    <Calendar />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Calendar from '@/components/Calendar/Calendar.vue';
import '../styles/main.scss';

export default {
  auth: false,
  name: 'IndexPage',
  components: { Header, Calendar },
  data() {
    return {
      modalOpened: false
    }
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    showModal() {
      this.modalOpened = true;
    },
    hideModal(event) {
      if ((this.modalOpened && !event.target.closest('.modal')) && !event.target.closest('.button')) {
        this.modalOpened = false;
      }
    }
  }
}
</script>
