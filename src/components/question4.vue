<template>
  <div>

    <h3>Does the person you might apologize to seem upset?</h3>
      <div id="q4">
        <button v-on:click="saySorry">yes</button><button v-on:click="notSorry">no</button>
      </div>
      <apology v-if="sorry" msg="If they seem upset, you can apologize for how they are feeling"/>
      <dont-be-sorry v-if="dont" msg="Sounds like you don't need to apologize. Have a nice day!"/>
  </div>
</template>

<script>
export default {
  name: "question-4",
  props: {
    msg: String
  },
  data() {
    return {
      sorry: false,
      dont: false,
    }
  },
  methods:
    {
    saySorry: function () {
      this.sorry = true;
    },
    notSorry: function () {
      this.dont = true;
    },
  }
};
</script>
