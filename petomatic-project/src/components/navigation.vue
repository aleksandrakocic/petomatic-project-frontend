<template>
  <div id='navigation'>

   <el-radio-group id='menu' v-model="isCollapse" style="margin-bottom: 60px;">
     <el-radio-button id='menuButtons' :label="false"><img src="../assets/cat.png" alt="cat">petomatic</el-radio-button>
     <el-radio-button class='menuButtons' :label="true"><img id='menuIcon' src="../assets/setup.png" alt="menu"></el-radio-button>
   </el-radio-group>

   <el-menu 
      default-active="1" 
      class="el-menu-vertical-demo" 
      @open="handleOpen"
      @close="handleClose" 
      :collapse="isCollapse">
      
      <el-submenu index="1">
         <template slot="title">
           <i><img class='menuMiniIcons' src="../assets/dash.png" alt="dash"></i>
           <span class='navItem' slot="title"><router-link to='/visits'>DASHBOARD</router-link></span>
         </template>
        <!-- <el-menu-item-group>
          <el-menu-item index="1-1"> <router-link to='/visits'>visits list </router-link></el-menu-item> 
        </el-menu-item-group> -->
      </el-submenu>

      <el-submenu index="2">
         <template slot="title">
           <i><img class='menuMiniIcons' src="../assets/visits.png" alt="visits"></i>
           <span class='navItem' slot="title">VISITS</span>
         </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">visits list</el-menu-item>
          <router-link to='/createVisit'><el-menu-item index="2-2">create new visit</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i><img class='menuMiniIcons' src="../assets/docotor.png" alt="docotr"></i>
          <span class='navItem' slot="title">USERS</span>
        </template>
        <el-menu-item-group>
        <router-link to='/users'><el-menu-item index="3-1">all users</el-menu-item> </router-link>
        <router-link to='/createUser'><el-menu-item index="3-2"> create user</el-menu-item></router-link>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i id='menuMiniIcons'><img src="../assets/users.png" alt="users"></i>
          <span class='navItem' slot="title">CUSTOMERS</span>
        </template>
        <el-menu-item-group>
        <router-link to='/customers'><el-menu-item index="4-1">all customers</el-menu-item></router-link>
        <router-link to='/createCustomer'> <el-menu-item index="4-2">create customer</el-menu-item> </router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    component: {
    },
    data() {
      return {
        isCollapse: false
      };
    },
     // eslint-disable-next-line
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  #menu {
    display: inline-block;
  }
  .el-menu {
    background: transparent;
    color: #466467;
  }

  img {
    height: 50px;
    width: 50px;
  }

  #menuMiniIcon {
    height: 5px;
    width: 10px;
  }
  #menuIcon{
    height: 20px;
    width: 20px;
  }
 
  #menuButtons {
    border: none;
    background: none;
  }
  
  .el-radio-button{
    background: transparent;
    color: white;
    border: transparent;
  }
  .el-radio-button__inner{
    background: transparent;
    color: darkgray;
  }
  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background: transparent;
    color: #466467;

  }

  /* nav items */
  .el-submenu__title {
    color: #466467;
    font-weight: 600;
  }
  .el-submenu {
    color: red;

  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>