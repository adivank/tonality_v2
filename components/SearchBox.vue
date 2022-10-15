<template>
  <div class="search-box">
    <input
      type="text"
      class="search-box__input"
      tabindex="0"
      aria-label="sitewide-search"
      role="searchbox"
      contenteditable
      ref="searchInput"
    >
    <div class="search-box__icon" ref="searchIcon">
      <fa-icon v-if="!isInputFocused" icon="magnifying-glass" />
      <fa-icon v-else icon="xmark" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isInputFocused: false
    }
  },
  mounted() {
    this.$refs.searchInput.addEventListener('click', this.buildSearch);
    this.$refs.searchIcon.addEventListener('click', this.toggleSearch);
  },
  methods: {
    buildSearch() {
      this.isInputFocused = true;
    },
    toggleSearch(event) {
      this.isInputFocused = !this.isInputFocused;
      if (this.isInputFocused) {
        this.$refs.searchInput.focus();
      }
    }
  }
}
</script>
