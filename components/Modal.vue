<template>
  <div
    @click="closeModal"
    class="modal__overlay --open"
    data-target="authModal"
    ref="modalOverlay"
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
  methods: {
    closeModal(event) {
      if (!event.target.closest('.modal')) {
        this.$refs.modalOverlay.classList.remove('--open');
      }
    },
    openModal(value) {
      if (value === true) {
        this.$refs.modalOverlay.classList.add('--open');
      }
    }
  },
  mounted() {
    componentsEB.$on('openModal', this.openModal)
  }
}
</script>
