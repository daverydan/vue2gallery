import axios from 'axios'

export default {
  // data () {
  //   return {
  //     errors: [],
  //     status: '',
  //     message: ''
  //   }
  // }, // data

  signup (context, user) {
    axios.post('http://vuejsbook.app/api/v1/register', user)
      .then(response => {
        console.log(response.data)
        if (response.data.user) {
          console.log('A new user has been created')
          context.status = 'success'
          context.message = response.data.message
          context.errors = null
          setTimeout(() => { // timed redirect
            context.$router.push('/login')
          }, 1500)
        } else {
          context.status = 'error'
          context.errors = response.data.errors
        }
      })
      .catch(e => {
        context.errors.push(e)
      })
  }, // signup

  signin (context, user) {
    axios.post('http://vuejsbook.app/api/v1/login', user)
      .then(response => {
        if (response.data.token) {
          console.log(response.data.token)
          context.$router.push('/admin')
        } else {
          context.status = 'error'
          context.errors = response.data
        }
      })
      .catch(e => {
        context.status = 'error'
        context.errors.push(e)
      })
  } // signin
}
