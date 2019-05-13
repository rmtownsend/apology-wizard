<template>
  <div>

    <h3>Did you hurt anyone?</h3>
      <div id="q2">
        <button v-on:click="saySorry">yes</button><button v-on:click="next3">no</button>
      </div>
      <apology v-if="sorry" msg="If you hurt someone, it makes sense to say you're sorry."/>
      <question-3 v-if="q3"/>
  </div>
</template>

<script>
export default {
  name: "question-two",
  props: {
    msg: String
  },
  data() {
    return {
      sorry: false,
      q3: false,
    }
  },
  methods:
    {
    saySorry: function () {
      this.sorry = true;
    },
    next3: function () {
      this.q3 = true;
    },
  }
};
</script>
