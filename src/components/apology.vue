<template>
  <div>

    <h3>{{msg}}</h3>
      <img alt="random picture of a cute dog courtesy of dog.ceo dog api" :src="doggo"/>
  </div>
</template>

<script>
export default {
  name: "apology",
  props: {
    msg: String,
  },
  data () {
  return {
    doggo: null
  }
},
  mounted () {
    console.log('fetching a dog');
  axios
    .get('https://dog.ceo/api/breeds/image/random')
    .then(response => (
      console.log(response.data.message),
      this.doggo = response.data.message
    )
    )
  },
};
</script>
