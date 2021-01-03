<template>
  <div>
    <div class="ecard-form">
      <EcardForm />
    </div>
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

<style lang="scss">
.ecard-form {
  display: flex;
  justify-content: center;
  margin: auto;
  padding-top: 20px;
}
</style>
