<template>
  <b-form class="m-5 p-5">
         <b-jumbotron class="post-container" header="Sign In" >
            <label for="author">Full Name:</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="user.fullname"
              placeholder="Enter fullname"
              required
            ></b-form-input>
            <label for="author">Username:</label>
            <b-form-input class="mb-2 mt-2"

              id="input-2"
              v-model="user.username"
              placeholder="Enter username"
              required
            ></b-form-input>
             <label for="author">Date Of Birth </label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="user.dateOfBirth"
              placeholder="Enter your birthday (ex. 01/05/1999)"
              required
            ></b-form-input> 
            <label for="author">Email: </label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="user.email"
              placeholder="Enter email"
              required
            ></b-form-input>    
             <label for="author">Address</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              v-model="user.currentAdress"
              placeholder="Enter address"
              required
            ></b-form-input>  
             <label for="author">Password</label>
            <b-form-input class="mb-2 mt-2"
              id="input-2"
              type="password"
              v-model="user.password"
              placeholder="Enter password"
              required
            ></b-form-input>  
             <label for="author">Address</label> 
            <b-button @click="signIn"  variant="success">Create</b-button> <h3> Have account yet? <router-link to="/signup">Sign Up</router-link></h3>
         </b-jumbotron>
    </b-form>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            user:{}
        }
    },
    methods:{
        async signIn(){
            await axios.post('http://localhost:3333/users/add', this.user)
            .then(console.log('created user successfully'))
            .catch(err => {
                console.log('err',err)
            })
            this.$router.push({name:'SignUp'})
            this.$notification.open({
                message: 'mySocial Notification',
                description:
                'You created your account successfully',
            })    
        }
    }
}
</script>

<style >
.date{
    display: flex;
    flex-direction: column;
}
</style>