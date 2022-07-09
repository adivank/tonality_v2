<template>
  <div>
    <div class="pattern__container">
      <Colors />
    </div>
    <div class="pattern__container">
      <Typo />
    </div>
  </div>
</template>

<script>
import Colors from './Colors.vue';
import Typo from './Typo.vue';
import '@/styles/patterns/main.scss';

export default {
  components: { Colors, Typo }
}
</script>
