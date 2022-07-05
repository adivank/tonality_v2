<template>
  <div @click="hideModal">
    <Header @showModal="showModal" />
    <div class="grid grid--main">
      <Sidebar />
      <Calendar :modalOpened="modalOpened"/>
    </div>
    <Modal />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Modal from '@/components/Modal.vue';
import Calendar from '@/components/Calendar.vue';
import Sidebar from '@/components/Sidebar.vue';
import '../styles/main.scss';

export default {
  auth: false,
  name: 'IndexPage',
  components: { Header, Modal, Calendar, Sidebar },
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
