 <template>
    <div id="login">
      <div id='loginForm'>
       <div>    
        <h1>CREATE NEW USER</h1> 
         <div>
          <input type="text" name="username" v-model="firstName" placeholder="firstname"/>
         </div>
         <div>
          <input type="text" name="lastname" v-model="lastName" placeholder="lastname"/>
         </div>
          <div>
          <input type="text" name="email" v-model="email" placeholder="email"/>
         </div>
         <div>
          <input type="password" name="password" v-model="password" placeholder="password"/>
         </div>
         <div id='loginB'>
          <!-- <input type='file' name='image'/>  -->
          <button type="button" v-on:click="createUser()">create</button>
         </div>
       </div>
      </div>
    <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    export default {
        name: 'createUser',
        data() {
            return {
                userList:[],
                firstName:'',
                lastName:'',
                email:'',
                password: '',
                repeatPassword:'',
            }
        },
        methods: {
         createUser() {
            if(this.firstName !== '' && this.lastName !== '' && this.password !== ''){
             var user = {firstName: this.firstName, lastName: this.lastName, password: this.password, email: this.email};
             console.log(user);
          
          this.axios
            .post('http://localhost:3306/app/users', user)
            .then( (response) => {
              if(response.data == 1) {
                this.$router.push('/users');
              }
            })
        } else {
          console.log(response.data);
          event.preventDefault();
        }
      }
        }
      }
</script>

<style scoped>

    #login {
        width: 80%;
        margin: auto;
        /* margin-top: 200px; */
        padding: 110px;
    }
    
    #loginForm{
        display: flex;
        justify-content: center;
        /* margin-top: 200px; */
        background-color: white;
        padding: 20px;
    }
    
    h1 {
        text-align: center;
        margin-bottom: 4%;
        color: #466467;
    }

    p {
        text-align: center;
    }


    input{
        display: block;
        background: transparent;  
        border: transparent;
        border-bottom: 3px solid #466467;
        width: 50vw;
        margin-bottom: 6%;
    }

    button{
       width: 10vw;
       background: transparent;
       border: 1px solid #466467;
       margin-bottom: 2%;
       color: #466467;
    }

    #loginB {
        display: flex;
        justify-content: center;
    }
</style>