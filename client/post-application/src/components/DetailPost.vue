<template>
      <b-form class="m-5">
            <div>
              <b-jumbotron header="Post Detail" >
                <label for="author">Author:</label>
                <b-form-input class="mb-2 mt-2"
                  id="input-2"
                  v-model="data.author"
                  required
                ></b-form-input>
                <label for="author">Title:</label>
                <b-form-input class="mb-2 mt-2"
                  id="input-2"
                  v-model="data.title"
                  required
                ></b-form-input>
                <label for="author">Content:</label>
                <b-form-input class="mb-2 mt-2"
                  id="input-2"
                  v-model="data.content"
                  required
                ></b-form-input>
                <label for="author">Picture's url:</label>
                <b-form-input class="mb-2 mt-2"
                  id="input-2"
                  v-model="data.imgPost"
                  required
                ></b-form-input>
                 <label for="author">Created At:</label>
                <b-form-input class="mb-2 mt-2"
                  id="input-2"
                  v-model="data.createdAt"
                  required
                ></b-form-input>
                <label for="author">Updated At:</label>
                <b-form-input class="mb-2 mt-2"
                  id="input-2"
                  v-model="data.updatedAt"
                  required
                ></b-form-input>
                <div class="actions">
                  <b-button  @click="updatePOST(data)" variant="success">Update</b-button>
                  <b-button @click="deletePOST(data._id)" variant="danger">Delete</b-button>
                </div>
              </b-jumbotron>
            </div>
      </b-form>
      
</template>

<script>
import fetch from 'node-fetch'
import { mapActions } from 'vuex'
export default {
    name:'DetailPost',
    props:['id'],
    data(){
        return{
            data:{},
            createdTime:''
        }
    },
    async created(){
        const res =  await fetch(`http://localhost:3333/posts/${this.id}`)
        const respData = await res.json()
        this.data = respData
        console.log(this.data)
    },
    methods:{
        ...mapActions(["deletePost","updatePost"]),
        changeTime(){
          this.createdTime = this.data.createdAt
          console.log(this.createdTime)
        },
        deletePOST(id){
            if(id){
                this.deletePost(id)
                this.$router.push({name:'AllPosts'})
                this.$notification.open({
                  message: 'Notification',
                  description:
                    'You deleted this post successfully',
                  onClick: () => {
                    console.log('Notification Clicked!');
                  },
                })          
            }else{
                alert('delete failed')
            }
        },
        updatePOST(data){
            if(data){
                alert('updated successfully')
                this.updatePost(data)
                this.$router.push({name:'AllPosts'})
                console.log(data)
            }else{
                alert('update failed')
            }
        }
    },
    mounted(){
      this.changeTime()
    }
}
</script>

<style>
.actions{
  display: flex;
}
</style>