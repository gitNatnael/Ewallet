<template>
  <b-jumbotron align="center" fluid>
    <b-form @submit="onSubmit">
      <b-row class="m-0 mb-2">
        <label for="enter-card-number">CARD NUMBER</label>
        <b-form-input
          id="enter-card-number"
          v-model="form.cardNumber"
          maxlength="19"
          minlength="19"
          :formatter="formatter"
          required
        ></b-form-input>
      </b-row>
      <b-row class="m-0 mb-2">
        <label for="enter-name">CARDHOLDER NAME</label>
        <b-form-input
          id="enter-name"
          v-model="form.cardHolderName"
          maxlength="30"
          minlength="5"
          required
        ></b-form-input>
      </b-row>
      <b-row class="m-0 mb-2">
        <b-col cols="8">
          <label class="date-ccv-label" for="example-datepicker"
            >VALID THRU</label
          >
          <b-form-datepicker
            id="example-datepicker"
            v-model="form.validDate"
            :min="minDate"
            :date-format-options="{
              year: 'numeric',
              month: 'numeric',
              day: '2-digit',
            }"
            class="mb-2"
          ></b-form-datepicker>
        </b-col>
        <b-col cols="4">
          <label class="date-ccv-label" for="example-ccv">CCV</label>
          <b-form-input
            id="example-ccv"
            v-model="form.ccv"
            type="text"
            maxlength="3"
            minlength="3"
            required
          ></b-form-input>
        </b-col>
      </b-row>
      <b-row class="m-0 mb-3">
        <label for="wallet-vendor">VENDOR</label>
        <b-form-select
          v-model="form.vendersName"
          :options="options"
        ></b-form-select>
      </b-row>
      <b-button type="submit" class="btn-show addbtn">Add Card</b-button>
    </b-form>
  </b-jumbotron>
</template>

<script>
const getBlankForm = () => ({
  cardNumber: "",
  cardHolderName: "",
  validDate: "",
  vendersName: "",
  bg: "",
  logImg: "",
  ccv: "",
});
const getMinDate = () => {
  const now = new Date();
  const minDate = new Date(
    now.getFullYear() + 1,
    now.getMonth(),
    now.getDate()
  );
  return minDate;
};
const formatValidDate = (validDate) => {
  const date = new Date(validDate);
  const month = date.getMonth() + 1;
  return `${month < 10 ? "0" + month : month}/${date.getFullYear() % 2000}`;
};
import { CardLogo } from "../utils/constant.js";
export default {
  name: "AddCard",
  data() {
    return {
      form: getBlankForm(),
      options: [
        { value: "", text: "" },
        { value: "BITCOIN INK", text: "BITCOIN INC " },
        { value: "SNINJA BANK", text: "SNINJA BANK" },
        { value: "BLOCK CHAIN INC", text: "BLOCK CHAIN INC" },
        { value: "EVIL CORP", text: "EVIL CORP" },
      ],
      minDate: getMinDate(),
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      const vendersNameStyle = this.form.vendersName
        ? this.form.vendersName
        : "";
      this.form.bg = CardLogo[vendersNameStyle].bgcolor;
      this.form.logImg = CardLogo[vendersNameStyle].logoImage;
      this.form.validDate = formatValidDate(this.form.validDate);
      console.log("object", this.form);
      this.$emit("cardData", this.form);
      this.$router.push({
        path: "/",
        params: {
          forms: Object.keys(this.form)
            .map((key) => key + "=" + this.form[key])
            .join("&"),
        },
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
.addbtn {
  float: left !important;
}
.col-8 {
  padding: 0;
}
.date-ccv-label {
  display: flex;
}
</style>
