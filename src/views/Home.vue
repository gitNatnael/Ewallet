<template>
  <b-container>
    <b-row align-v="start" class="ml-3 mb-3">
      <b-button @click="changeShow" class="btn-show">{{
        show ? "Show card" : "Add card"
      }}</b-button>
    </b-row>
    <b-row v-if="!show" align-v="center" class="m-0">
      <Ewallet
        v-for="(card, index) in cards"
        :key="index"
        :cardNumber="card.cardNumber"
        :cardHolderName="card.cardHolderName"
        :validDate="card.validDate"
        :vendersName="card.vendersName"
        class="ml-2 mb-2"
      />
    </b-row>
    <b-row v-if="show" align-v="center" class="m-0">
      <AddCard @cardData="addCard" />
    </b-row>
  </b-container>
</template>

<script>
import Ewallet from "@/components/EwalletCard.vue";
import AddCard from "@/components/AddCard.vue";
export default {
  name: "Home",
  components: {
    Ewallet,
    AddCard,
  },
  data() {
    return {
      cards: [
        {
          cardNumber: "1234 5678 9101 1213",
          cardHolderName: "Natnael Lijato",
          validDate: "12/23",
          vendersName: "Test 2",
        },
        {
          cardNumber: "1238 5679 9101 1213",
          cardHolderName: "Natnael Lijato",
          validDate: "12/23",
          vendersName: "Test 1",
        },
      ],
      show: false,
    };
  },
  methods: {
    addCard(data, showCard) {
      this.cards.push(data);
      this.show = showCard;
    },
    changeShow() {
      this.show = !this.show;
    },
  },
};
</script>
<style lang="scss">
.btn-show {
  background-color: #483d8b;
  border: none;
  // margin-top: 10px;
  float: left;
}
</style>
