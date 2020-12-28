<template>
  <b-container>
    <b-row class="m-0 mb-3 ml-2">
      <b-button @click="changeShow" class="btn-show">{{
        show ? "Show card" : "Add card"
      }}</b-button>
    </b-row>
    <b-row v-if="!show" align-v="center" class="m-0">
      <Ewallet
        v-for="(card, index) in cardItems"
        :key="index"
        :cardNumber="card.cardNumber"
        :cardHolderName="card.cardHolderName"
        :validDate="card.validDate"
        :vendersName="card.vendersName"
        :bg="card.bg"
        :logImg="card.logImg"
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
      show: false,
      cards: [
        {
          cardNumber: "1215 8878 9997",
          cardHolderName: "Natnae Lijato",
          validDate: "12/23",
          vendersName: "Our bannk",
          bg: "SkyBlue",
          logImg: {
            fontType: "fab",
            icon: "btc",
          },
        },
        {
          cardNumber: "127875 8878 9997",
          cardHolderName: "Girma Lijato",
          validDate: "12/23",
          vendersName: "My bannk",
          bg: "RosyBrown",
          logImg: {
            fontType: "fas",
            icon: "link",
          },
        },
        {
          cardNumber: "1215 8878 9997",
          cardHolderName: "Dave Lijato",
          validDate: "12/23",
          vendersName: "Your bannk",
          bg: "Sienna",
          logImg: {
            fontType: "fas",
            icon: "user-ninja",
          },
        },
      ],
    };
  },
  computed: {
    cardItems() {
      return this.cards;
    },
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
  background-color: #3399ff;
  border: none;
}
</style>
