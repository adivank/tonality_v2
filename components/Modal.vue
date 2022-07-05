<template>
  <div class="modal__overlay" data-target="authModal">
    <div
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
      aria-modal="true"
      class="modal"
    >
      <div class="modal__header">
        <h2 id="modalTitle" class="modal__title">Login</h2>
        <p id="modalDescription">Login using your username and password</p>
      </div>
      <div class="modal__body">
        <AuthForm />
      </div>
    </div>
  </div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
  components: {
    AuthForm
  },
  props: {
    modalType: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
