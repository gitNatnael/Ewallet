<template>
  <div class="container">
    <EcardForm />
  </div>
</template>

<script>
import EcardForm from "@/components/EcardForm.vue";
export default {
  name: "AddEcard",
  components: {
    EcardForm,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: auto;

  background-color: rgb(224, 218, 218);
}
@media (max-width: 600px) {
  .container {
    width: 100%;
  }
}
</style>
