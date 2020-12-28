<template>
  <b-card :style="classobj" class="card">
    <div class="card-header-info">
      <div class="row m-0">
        <div class="col-8">
          <div class="row m-0 mb-2 ml-3">
            <fa-icon :icon="['fas', 'wifi']" class="simCard" />
          </div>

          <div class="row m-0 ml-4">
            <fa-icon :icon="['fas', 'sim-card']" class="simCard" />
          </div>
        </div>
        <div class="col-4">
          <fa-icon
            :icon="[logImg.fontType, logImg.icon]"
            size="3x"
            pull="right"
          />
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
    bg: {
      type: String,
      default: "Gray",
    },
    logImg: {
      type: Object,
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
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 20rem;
  min-width: 20rem;
  min-height: 12rem;
  max-height: 12rem;
  border-radius: 10px;
}
.card-header-info {
  /*   background-color: gray; */
  min-height: 4rem;
  margin-bottom: 0.5rem;
  margin-top: -0.7rem;

  /*   margin-left: -18px;
  margin-right: -18px; */
  /*  margin: -18px -18px 2px -18px; */
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
.simCard {
  /* color: #f2c856; */
  font-size: 30px;
}
</style>
