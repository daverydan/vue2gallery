<template>
  <div class="gallery">
    <single-image :selectedImage="selectedImage"></single-image>
    <image-list :images="images" @showMyImage="showImage"></image-list>
  </div>
</template>

<script>
  import SingleImage from './SingleImage'
  import ImageList from './ImageList'
  import axios from 'axios'

  export default {
    name: 'gallery',

    components: { SingleImage, ImageList },

    data () {
      return {
        selectedImage: '',
        images: [],
        errors: []
      }
    }, // data

    created () {
      axios.get('http://vuejsbook.app/api/v1/images')
        .then(response => {
          this.images = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }, // created

    methods: {
      showImage (image) {
        this.selectedImage = image
      }
    } // methods
  }
</script>

<style>
img {
  -webkit-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 1px 6px 1px rgba(0,0,0,0.75);
  margin-bottom:20px;
}

img:hover {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
}
</style>
