<template>
  <div>
    <div class="container">
      <div class="row">
        <a @click="showMyImage(image)" v-for="image in images" href="#">
          <div class="col-md-3 col-sm-4 col-xs-6">
            <img class="img-responsive" :src="image.thumbnail" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['images'],

    methods: {
      showMyImage (image) {
        this.$emit('showMyImage', image)
      }
    } // methods
  }
</script>
