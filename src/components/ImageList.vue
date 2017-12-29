<template>
  <div>
    <div class="container">
      <div class="row">
        <single-image :selectedImage="selectedImage"></single-image>

        <a @click="showImage(image)" v-for="image in images" href="#">
          <div class="col-md-3 col-sm-4 col-xs-6">
            <img class="img-responsive" :src="image.thumbnail" />
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import SingleImage from './SingleImage'

  export default {
    props: ['images'],

    components: { SingleImage },

    data () {
      return {
        selectedImage: ''
      }
    }, // data

    methods: {
      showImage (image) {
        this.selectedImage = image
      }
    } // methods
  }
</script>
