<template>
  <div class="card-container">
    <h3>E-wallet</h3>
    <div class="row mb-5">
      <div class="col">
        <Ewallet
          :cardNumber="activeCard.cardNumber"
          :cardHolderName="activeCard.cardHolderName"
          :validDate="activeCard.validDate"
          :vendersName="activeCard.vendersName"
          :bg="activeCard.bg"
          :logImg="activeCard.logImg"
          :index="0"
        />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Ewallet
          v-for="(card, index) in cardItems"
          :key="index"
          :cardNumber="card.cardNumber"
          :cardHolderName="card.cardHolderName"
          :validDate="card.validDate"
          :vendersName="card.vendersName"
          :bg="card.bg"
          :logImg="card.logImg"
          :index="index"
          :style="index !== 0 ? 'margin-top:-130px' : 'margin-top: 5px'"
        />
      </div>
    </div>
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
    ...mapGetters(["getCards"]),
    ...mapState(["activeCardIndex"]),
    activeCard() {
      const card = this.getCards[this.activeCardIndex];
      return card;
    },
    cardItems() {
      return this.getCards;
    },
  },
  methods: {
    ...mapActions(["storeCards"]),
    addCard(data) {
      this.cards.push(data);
    },
  },
};
</script>
<style lang="scss">
.btn-show {
  background-color: #3399ff;
  border: none;
  width: 100%;
  height: 40px;
}
.btn-show a {
  color: #000000;
  line-height: 2.3rem;
  text-align: center;
}

.container {
  position: relative;
  max-width: 40%;
  padding-top: 50px;
  padding-top: 50px;
}
.row {
  margin: 0;
}
.card-container {
  max-width: 30%;
  padding-top: 50px;
  margin: 0 auto;
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
