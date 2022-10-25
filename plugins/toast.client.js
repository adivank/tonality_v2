class ModalHandlerClass {
  constructor(selector) {
    this.modal = document.querySelector(selector)
  }

  openModal() {
    this.modal.classList.add('--open');
  }

  closeModal() {
    this.modal.classList.remove('--open');
  }
}

const ModalHandler = new ModalHandlerClass('.button');

export default ({ app }, inject) => {
  inject('modal', ModalHandler);
}
