<template>
  <div class="card-form">
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
    <div class="row justify-content-center">
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
            required
          ></b-form-input>
        </div>
        <div class="row m-0 mb-2">
          <label for="card-holder-name">CARDHOLDER NAME</label>
          <b-form-input
            required
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
            <b-form-select
              required
              id="month"
              v-model="form.valid_month"
              :options="monthRange"
            ></b-form-select>
          </div>
          <div class="col-4">
            <label for="year">YEAR</label>
            <b-form-select
              id="year"
              v-model="form.valid_year"
              :options="yearRange"
            ></b-form-select>
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
              required
            />
          </div>
        </div>

        <div class="row m-0  mb-2">
          <label for="wallet-vendor">VENDOR</label>
          <b-form-select
            required
            id="wallet-vendor"
            v-model="form.vendersName"
            :options="options_vendor"
            @change="changeVendor($event)"
          ></b-form-select>
        </div>
        <b-button type="submit">Add Card</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
const getBlankForm = () => ({
  cardNumber: "",
  cardHolderName: "",
  valid_month: "",
  valid_year: "",
  vendersName: "",
  bg: "gray",
  logImg: "vendor-bitcoin.svg",
  ccv: "",
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
    yearRange() {
      let arrayRange = [];
      for (let i = 21; i <= 99; i++) arrayRange.push(i.toString());
      return arrayRange;
    },
    monthRange() {
      let arrayRange = [];
      for (let i = 1; i <= 12; i++) arrayRange.push(i < 10 ? `0${i}` : `${i}`);
      return arrayRange;
    },
  },
  methods: {
    ...mapActions(["addNewCard"]),
    onSubmit(event) {
      event.preventDefault();
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
    changeVendor() {
      this.form.bg = CardLogo[this.form.vendersName].bgcolor;
      this.form.logImg = CardLogo[this.form.vendersName].logImg;
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
.row {
  widows: 100%;
  margin: 0 auto;
}
.default-card {
  justify-content: center;
}
.btn {
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 10px;
  width: 100%;
  border-radius: 0.5rem;
  font-weight: bold;
  background-color: Olive;
}
</style>
