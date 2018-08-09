 <template>
    <div id="login">
      <div id='loginForm'>
       <div>    
        <h1>Please login</h1> 
         <div>
          <input type="text" name="username" v-model="input.username" placeholder="Username" />
         </div>
         <div>
          <input type="password" name="password" v-model="input.password" placeholder="Password" />
         </div>
         <div id='loginB'>
          <button type="button" v-on:click="login()">LOGIN</button>
         </div>
       </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "visits" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }
            }
        }
    }
</script>

<style scoped>
   body {
       background: #e2edfa;
   }
 

    #login {
        width: 60%;
        margin: auto;
        padding: 110px;
    }
    
    #loginForm{
        display: flex;
        justify-content: center;
        background-color: white;
        padding: 20px;
    }
    
    h1 {
        text-align: center;
        margin-bottom: 4%;
        color: black;
    }

    p {
        text-align: center;
    }


    input{
        display: block;
        border: none;
        background: #e2edfa;  
        width: 30vw;
        margin-bottom: 2%;
    }

    button{
       width: 10vw;
       background: transparent;
       border: 1px solid #e2edfa;
       margin-bottom: 2%;
       color: black;

    }

    #loginB {
        display: flex;
        justify-content: center;


    }
</style>