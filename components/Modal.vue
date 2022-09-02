<template>
  <div
    v-if="isModalOpen"
    @click="closeModal"
    class="modal__overlay"
    data-target="authModal"
  >
    <div
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      class="modal"
    >
      <div class="modal__header">
        <h2 id="modalTitle" class="modal__title">{{ label }}</h2>
        <p v-if="subtitle" id="modalDescription">{{ subtitle }}</p>
      </div>
      <div class="modal__body">
        <AuthForm v-if="modalType === 'auth'" />
        <CalendarForm v-if="modalType === 'calendar'" />
      </div>
    </div>
  </div>
</template>

<script>
import { componentsEB } from './componentsEB';
import CalendarForm from '@/components/Calendar/components/CalendarForm.vue';
import AuthForm from '@/components/AuthForm.vue';

export default {
  components: { AuthForm, CalendarForm },
  props: {
    modalType: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  mounted() {
    componentsEB.$on('openModal', this.openModal)
  },
  methods: {
    closeModal(event) {
      if (!event.target.closest('.modal')) {
        this.isModalOpen = false;
      }
    },
    openModal(value) {
      if (value === true) {
        this.isModalOpen = true;
      }
    }
  }
}
</script>
