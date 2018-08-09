<template>
  <div>
      <h1> PET-O-MATIC </h1>
      <p>Veterenerian Clinic</p>
    <div id='nav'>
      <navigation/>
    </div> 

    <div>
        <!-- <login/> -->
        <preventLogin/>
    </div>

    <!-- <router-view></router-view>  -->
  </div>
</template>

<script>
    import navigation from './components/navigation.vue'
    import login from './components/login.vue'
    import preventLogin from './components/preventLogin.vue'

    export default {
        name: 'App',
        components: {
            navigation,
            login,
            preventLogin
        }
    }




        //     methods: {
        //     sendData() {
        //         this.$http.post("https://httpbin.org/post", this.input, { headers: { "content-type": "application/json" } }).then(result => {
        //             this.response = result.data;
        //         }, error => {
        //             console.error(error);
        //         });
        //     }
        // }
</script>
<style>
    body {
        background: #e2edfa;
        margin: 0px;
        padding-top: 10px;
    }
    h1 {
        padding: 0;
        margin-top: 20px;
        text-align: center;
    }

    p {
        text-align: center;
    }
    #nav {
        float: left;
        margin-right: 5vw;
        margin-top: -80px;
    }

</style>