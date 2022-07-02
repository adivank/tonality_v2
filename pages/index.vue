<template>
  <div @click="hideModal">
    <Header @showModal="showModal" />
    <Calendar />
    <Modal v-show="modalOpened" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Modal from '@/components/Modal.vue';
import Calendar from '@/components/Calendar.vue';
import '../styles/main.scss';

export default {
  auth: false,
  name: 'IndexPage',
  components: { Header, Modal, Calendar },
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
