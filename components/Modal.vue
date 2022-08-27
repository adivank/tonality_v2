<template>
  <div class="modal__overlay --open" data-target="authModal">
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
        <AuthForm />
        <CalendarForm />
      </div>
    </div>
  </div>
</template>

<script>
import CalendarForm from '@/components/Calendar/components/CalendarForm.vue';
import AuthForm from '@/components/AuthForm.vue';

export default {
  components: { AuthForm, CalendarForm },
  props: {
    modalType: {
      type: String,
      required: false,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: null
    }
  }
}
</script>
