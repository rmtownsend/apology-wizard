<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      Sometimes, it makes sense to say sorry,<br />
      but we shouldn't apologize for existing.
    </p>

    <h3>Things I frequently apologize for*</h3>
    <ul>
      <li>
        Doing my job
      </li>
      <li>
        Asking other people to do something that is part of their job
      </li>
      <li>
        "Bothering"
      </li>
      <li>
        Not explaining things clearly enough
      </li>
      <li>
        Being annoying
      </li>
      <li>
        Taking up time
      </li>
      <li>
        Taking up space
      </li>
      <li>
        Existing...
      </li>
    </ul>
    <p> *(but shouldn't)</p>

    <p>Sometimes, it's hard to spot a rogue apology<br />
      so here is a wizard to check if you need to apologize
    </p>

    <h3>So here goes - should I apologize?</h3>

    <h3>Are you saying sorry for anything on the above list?</h3>
      <div id="q1">
        <button v-on:click="notSorry">yes</button><button v-on:click="next2">no</button>
      </div>
          <dont-be-sorry v-if="dont" msg="Never apologize for simply being"/>
          <question-two v-if="q2"/>
  </div>
</template>



<script>

// import questiontwo from "./questiontwo.vue";
// import dontBeSorry from "./components/dontBeSorry.vue";

export default {
  name: "sorry-not-sorry",
  props: {
    msg: String
  },
  data() {
    return {
      q2: false,
      dont: false,
    }
  },
  methods:
    {
    notSorry: function () {
      this.dont = true;
    },
    next2: function () {
      this.q2 = true;
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
