<template>
  <div class="adminimagecreate">
    <div class="col-md-10 col-md-offset-1">
      <div>
        <router-link to="/admin" class="btn btn-default"> Back</router-link>
      </div>
    </div>
    <div class="col-md-10 col-md-offset-1">
      <div class="well well bs-component">
        <form class="form-horizontal" @submit.prevent="createImage">
          <fieldset>
            <legend>Add a new image: {{ image.title }}</legend>
            <div class="form-group">
              <label for="thumbnail" class="col-lg-2 control-label">Thumbnail</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="thumbnail" name="thumbnail" placeholder="Thumbnail of the image" v-model="image.thumbnail">
              </div>
            </div>
            <div class="form-group">
              <label for="imagelink" class="col-lg-2 control-label">Image Link</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="imageLink" name="imageLink" placeholder="Link of the image" v-model="image.imageLink">
              </div>
            </div>
            <div class="form-group">
              <label for="title" class="col-lg-2 control-label">Title</label>
              <div class="col-lg-10">
                <input type="text" class="form-control" id="title" name="title" placeholder="Title" v-model="image.title">
              </div>
            </div>
            <div class="form-group">
              <label for="description" class="col-lg-2 control-label">Description</label>
              <div class="col-lg-10">
                <textarea class="form-control" rows="3" id="description" name="description" placeholder="Description of the image" v-model="image.description"></textarea>
              </div>
            </div>
            <div class="form-group">
              <div class="col-lg-10 col-lg-offset-2">
                <button class="btn btn-default">Cancel</button>
                <button type="submit" class="btn btn-primary">Create</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'adminimagecreate',

    data () {
      return {
        errors: [],
        image: {
          thumbnail: '',
          imageLink: '',
          title: '',
          description: ''
        }
      }
    }, // data

    methods: {
      createImage () {
        axios.post('http://vuejsbook.app/api/v1/images', this.image)
          .then(response => {
            console.log(response.data)
            this.$router.push('/admin/images') // redirect
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    } // methods
  }
</script>

<style scoped>

</style>
