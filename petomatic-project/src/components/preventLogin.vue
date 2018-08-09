<template>
<div>
  <div id='nav'>
</div>

  <div id='loginBox'>
    <router-link 
      v-if="authenticated" 
      to="/login" 
      v-on:click.native="logout()"
      replace>
      Logout
    </router-link>
          
  </div>
  <router-view @authenticated="setAuthenticated"/>
</div>
</template>
  <script>

    export default {
        name: 'preventLogin',
        components: {
        },
        data() {
            return {
                 authenticated: false,
                 mockAccount: {
                    username: "username",
                    password: "password"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
      }

</script>
<style>
    body {
        background-color: #F0F0F0;
        margin: 0px;
        padding: 0px;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #nav {
        float: left;
        margin-right: 5vw;
    }

</style>