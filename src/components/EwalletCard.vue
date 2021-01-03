<template>
  <b-card :style="classobj" class="card" @click="activeCard(index)">
    <div class="card-header-info">
      <div class="row m-0">
        <div class="col-9">
          <div class="row m-0 ml-3 ">
            <img src="../assets/pictures/chip-light.svg" />
          </div>
        </div>
        <div class="col-3">
          <img class="vendors" :src="require(`@/assets/pictures/${logImg}`)" />
        </div>
      </div>
    </div>
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
          <span>{{ valid_month }}/</span>
          <span>{{ valid_year }}</span>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "EwalletCard",
  props: {
    cardNumber: {
      type: String,
    },
    cardHolderName: {
      type: String,
    },
    valid_month: {
      type: String,
    },
    valid_year: {
      type: String,
    },
    vendersName: {
      type: String,
    },
    bg: {
      type: String,
    },
    logImg: {
      type: String,
    },
    index: {
      type: Number,
    },
  },
  computed: {
    classobj() {
      return {
        "background-color": this.bg,
      };
    },
    logoIcon() {
      return {
        fontType: "fas",
        icon: "sim-card",
      };
    },
  },
  methods: {
    ...mapActions(["updateActiveCard"]),
    activeCard(cardIndex) {
      this.updateActiveCard(cardIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 30%;
  min-width: 22rem;
  min-height: 13rem;
  max-height: 12rem;
  border-radius: 10px;
  box-shadow: 2px 2px 2px gray;
  justify-content: center;
  margin: auto;
}
.card-header-info {
  min-height: 4rem;
  margin-bottom: 0.5rem;
  margin-top: -0.7rem;
}

.card-number {
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  letter-spacing: 0.2rem;
  word-spacing: 0.4rem;
  min-height: 2rem;
  margin-bottom: 5px;
}
.col-9 {
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

.vendors {
  float: right;
  margin-right: -20px;
  margin-top: 10px;
  max-height: 3rem;
  max-width: 3rem;
}
</style>
