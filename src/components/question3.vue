<template>
  <div>

    <h3>Would you be upset if someone did the same thing to you?</h3>
      <div id="q3">
        <button v-on:click="saySorry">yes</button><button v-on:click="next4">no</button>
      </div>
      <apology v-if="sorry" msg="If you would be upset by what you did, it makes sense to say so and apologize."/>
      <question-4 v-if="q4"/>
  </div>
</template>

<script>
export default {
  name: "question-3",
  props: {
    msg: String
  },
  data() {
    return {
      sorry: false,
      q4: false,
    }
  },
  methods:
    {
    saySorry: function () {
      this.sorry = true;
    },
    next4: function () {
      this.q4 = true;
    },
  }
};
</script>
