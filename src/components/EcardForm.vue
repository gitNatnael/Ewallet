<template>
  <b-jumbotron>
    <h1>Add Card</h1>
    <div class="row default-card m-0 mb-5">
      <Ewallet
        :cardNumber="form.cardNumber"
        :cardHolderName="form.cardHolderName"
        :valid_month="form.valid_month"
        :valid_year="form.valid_year"
        :vendersName="form.vendersName"
        :bg="form.bg"
        :logImg="form.logImg"
      />
    </div>
    <div class="row ml-2 mr-2  mb-5">
      <b-form @submit="onSubmit">
        <div class="row m-0 mb-2">
          <label for="card-number">CARD NUMBER</label>
          <b-form-input
            id="card-number"
            type="text"
            v-model="form.cardNumber"
            maxlength="19"
            minlength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            :formatter="formatter"
          ></b-form-input>
        </div>
        <div class="row m-0 mb-2">
          <label for="card-holder-name">CARDHOLDER NAME</label>
          <b-form-input
            id="card-holder-name"
            type="text"
            placeholder="First and last name"
            v-model="form.cardHolderName"
            maxlength="25"
            minlength="3"
          ></b-form-input>
        </div>
        <div class="row m-0 mb-2">
          <div class="col-4">
            <label for="month">MONTH</label>
            <b-form-input
              id="month"
              type="number"
              min="1"
              max="12"
              v-model="form.valid_month"
            />
          </div>
          <div class="col-4">
            <label for="year">YEAR</label>
            <!-- <b-form-input
              id="year"
              type="number"
              min="21"
              v-model="form.valid_year"
            /> -->
            <select id="year" v-model="form.valid_year">
              <option v-for="n in getRange" :value="n.toString()" :key="n">{{
                n
              }}</option>
            </select>
          </div>
          <div class="col-4">
            <label for="ccv">CCV</label>
            <b-form-input
              id="ccv"
              type="text"
              placeholder="xxx"
              minlength="3"
              maxlength="3"
              v-model="form.ccv"
            />
          </div>
        </div>

        <div class="row m-0  mb-2">
          <label for="wallet-vendor">VENDOR</label>
          <b-form-select
            id="wallet-vendor"
            v-model="form.vendersName"
            :options="options_vendor"
          ></b-form-select>
        </div>
        <b-button type="submit">Add Card</b-button>
      </b-form>
    </div>
  </b-jumbotron>
</template>

<script>
const getBlankForm = () => ({
  cardNumber: "",
  cardHolderName: "First and Last Name",
  valid_month: "",
  valid_year: "",
  vendersName: "",
  bg: "Gainsboro",
  logImg: "vendor-ninja.svg",
  ccv: "xxx",
});

import { CardLogo } from "../utils/constant.js";
import Ewallet from "@/components/EwalletCard.vue";
import { mapActions } from "vuex";
export default {
  name: "AddCard",
  components: {
    Ewallet,
  },
  data() {
    return {
      form: getBlankForm(),
      options_vendor: [
        { value: "", text: "" },
        { value: "BITCOIN INK", text: "BITCOIN INC " },
        { value: "SNINJA BANK", text: "SNINJA BANK" },
        { value: "BLOCK CHAIN INC", text: "BLOCK CHAIN INC" },
        { value: "EVIL CORP", text: "EVIL CORP" },
      ],
    };
  },
  computed: {
    getRange() {
      let arrayRange = [];
      for (let i = 21; i < 99; i++) arrayRange.push(i);
      return arrayRange;
    },
  },
  methods: {
    ...mapActions(["addNewCard"]),
    onSubmit(event) {
      event.preventDefault();
      const vendersNameStyle = this.form.vendersName
        ? this.form.vendersName
        : "";

      this.form.bg = CardLogo[vendersNameStyle].bgcolor;
      this.form.logImg = CardLogo[vendersNameStyle].logImg;
      console.log(this.form);
      if (this.form.cardNumber && this.form.cardHolderName) {
        this.addNewCard(this.form);
      }
      this.$router.push({
        path: "/",
      });
    },

    formatter(value) {
      value =
        value.length === 4 || value.length === 9 || value.length === 14
          ? value + " "
          : value;
      return value;
    },
  },
};
</script>
<style lang="scss" scoped>
.col-4 {
  padding: 0;
  max-width: 30%;
}
.col-4:nth-child(2) {
  margin-left: 0.9rem;
  margin-right: 0.9rem;
}

.default-card {
  justify-content: center;
}
.jumbotron {
  margin: 0 8px;
}

/* .btn {
  display: flex;
  width: 100%;
  color: black;
  font-weight: bold;
  justify-content: center;
  background-color: Olive;
} */
</style>
