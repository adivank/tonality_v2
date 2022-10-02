<template>
  <div @click="hideModal">
    <Header @showModal="showModal" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import '../styles/main.scss';

export default {
  name: 'IndexPage',
  components: { Header },
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
