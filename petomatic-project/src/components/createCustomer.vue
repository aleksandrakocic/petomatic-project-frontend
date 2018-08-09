 <template>
    <div>
      <div id='createCustomer'>
       <div>    
        <h1>CREATE NEW CUSTOMER</h1> 
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
          <input type="text" name="phone" v-model="phone" placeholder="phone"/>
         </div>
         <div id='loginB'>
          <button type="button" v-on:click= "createCustomer()" >create</button>
         </div>
       </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'createCustomer',
        data() {
            return {
                customerList:[],
                firstName:'',
                lastName:'',
                email:'',
                phone:''
            }
        },
        methods: {
         createCustomer() {
            if(this.firstName !== '' && this.lastName !== '' 
              && this.email !== '' && this.phone){
             var customer = {firstName: this.firstName, lastName: this.lastName, email: this.email, phone: this.phone};
             console.log(customer);
            
            
            this.axios
            .post('http://localhost:3306/app/customers', customer)
            .then( (response) => {
              if(response.data == 1) {
                this.$router.push('/customers');
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

    #createCustomer{
        display: flex;
        justify-content: center;
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