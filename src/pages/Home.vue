<template>
  <div class="card-container">
    <h3>E-wallet</h3>
    <div class="active-card">
      <Ewallet
        :cardNumber="getActiveCard.cardNumber"
        :cardHolderName="getActiveCard.cardHolderName"
        :valid_month="getActiveCard.valid_month"
        :valid_year="getActiveCard.valid_year"
        :vendersName="getActiveCard.vendersName"
        :bg="getActiveCard.bg"
        :logImg="getActiveCard.logImg"
        :index="activeCardIndex"
      />
    </div>
    <div class="card-stock">
      <Ewallet
        v-for="(card, index) in getCardStock"
        :key="index"
        v-show="index !== activeCardIndex"
        :cardNumber="card.cardNumber"
        :cardHolderName="card.cardHolderName"
        :valid_month="card.valid_month"
        :valid_year="card.valid_year"
        :vendersName="card.vendersName"
        :bg="card.bg"
        :logImg="card.logImg"
        :index="index"
        :style="'margin-top:-130px;'"
      />
    </div>

    <b-button block @click="addCardRoute">Add card</b-button>
  </div>
</template>

<script>
import Ewallet from "@/components/EwalletCard.vue";
import { mapGetters, mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Ewallet,
  },
  data: () => ({
    cards: [],
  }),
  created() {
    this.storeCards();
  },
  computed: {
    ...mapGetters({ getCardStock: "getCards", getActiveCard: "getActiveCard" }),
    ...mapState(["activeCardIndex"]),
  },
  methods: {
    ...mapActions(["storeCards"]),
    addCardRoute() {
      this.$router.push({
        path: "/addecard",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.card-stock {
  margin-bottom: 0 auto;
}
.btn-block {
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 10px;
  width: 100%;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: Olive;
}
.active-card {
  margin: 0 0 170px 0;
}
.row {
  width: 100%;
}
.card-container {
  max-width: 25%;
  margin: auto;
  margin-top: 20px;
}

@media (max-width: 600px) {
  .card-container {
    max-width: 100%;
  }
  .row {
    margin-left: -4px;
  }
}
</style>
