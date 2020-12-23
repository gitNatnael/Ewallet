<template>
  <b-container align="center" fluid>
    <div class="ml-3 mr-3">
      <b-form @submit="onSubmit">
        <b-row class="m-0">
          <b-form-group
            id="input-group-1"
            label="Add card number"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.cardNumber"
              type="text"
              placeholder="Enter card number"
              required
            ></b-form-input>
          </b-form-group>
        </b-row>

        <b-row class="m-0">
          <b-form-group
            id="input-group-2"
            label="Cardholder Name:"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.cardHolderName"
              placeholder="Enter cardholder name"
              required
            ></b-form-input>
          </b-form-group>
        </b-row>
        <b-row class="m-0">
          <b-form-group
            id="input-group-3"
            label="Valid date:"
            label-for="input-3"
          >
            <b-form-input
              id="input-3"
              v-model="form.validDate"
              placeholder="Enter card valid date"
              required
            ></b-form-input>
          </b-form-group>
        </b-row>
        <b-row>
          <b-form-select
            v-model="form.vendersName"
            :options="options"
          ></b-form-select>
        </b-row>
        <b-button type="submit" class="btn-show">Add Card</b-button>
      </b-form>
    </div>
  </b-container>
</template>

<script>
const getBlankForm = () => ({
  cardNumber: "",
  cardHolderName: "",
  validDate: "",
  vendersName: "",
});
export default {
  name: "AddCard",

  data() {
    return {
      form: getBlankForm(),
      selected: null,
      options: [
        { value: "", text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true },
      ],
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault(); //7894 5644 5556 6666 //Rahel Asmelash  //
      console.log(this.form);
      this.$emit("cardData", this.form, false);
    },
    reset() {
      this.cardAdded = false;
    },
  },
};
</script>
