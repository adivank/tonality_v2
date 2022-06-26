<template>
  <div>
    <Header @openModal="openModal" />
    <Modal :modalType="modalType" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Modal from '@/components/Modal.vue';
import '../styles/main.scss';

export default {
  auth: false,
  name: 'IndexPage',
  components: { Header, Modal },
  data() {
    return {
      modalType: ''
    }
  },
  computed: {
  },
  methods: {
    openModal(modalData) {
      this.modalType = modalData.type;
    }
  }
}
</script>
