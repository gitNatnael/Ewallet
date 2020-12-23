<template>
  <b-card class="card ">
    <div class="card-header-info">{{ vendersName }}</div>
    <div class="card-number">
      <span>{{ cardNumber }}</span>
    </div>
    <b-row>
      <b-col cols="8">
        <div>
          <span>Cardholder Name</span><br />
          <span>{{ cardHolderName }}</span>
        </div>
      </b-col>
      <b-col cols="4">
        <div>
          <span>Valid Date</span><br />
          <span>{{ validDate }}</span>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "EwalletCard",
  props: {
    cardNumber: {
      type: String,
    },
    cardHolderName: {
      type: String,
    },
    validDate: {
      type: String,
    },
    vendersName: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 20rem;
  min-width: 20rem;
  min-height: 12rem;
  max-height: 12rem;
  background-color: rgb(241, 182, 71);
  border-radius: 10px;
}
.card-header-info {
  min-height: 4rem;
  width: 100%;
}

.card-number {
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
  min-height: 2.5rem;
}
.col-8 {
  margin-left: -1.3rem;
  padding: 0;
}
.col-3 {
  padding: 0;
}
.col-9 .row {
  margin-left: 0;
  margin-right: 0;
}
</style>
