<template>
<div>
 <div id='users'>
  <el-table
    id='usersTable'
    :data="userList"
    style="width: 100%">

    <el-table-column
      label="ID"
      width="70">
      <template slot-scope="scope">
        <p>{{ scope.row.id}} </p>
      </template>
    </el-table-column>
    
    <el-table-column
      label="FIRSTNAME"
      width="200">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>IMG: {{ scope.row.image }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag style="width: 100%">{{ scope.row.firstName }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="LASTNAME"
      width="150">
      <template slot-scope="scope">
        <p>{{ scope.row.lastName}} </p>
      </template>
    </el-table-column>

      <el-table-column
      label="EMAIL ADDRESS"
       label-width="120px"
      width="230">
      <template slot-scope="scope">
        <p>{{ scope.row.email}} </p>
      </template>
    </el-table-column>
      
      <el-table-column
      label="OPERATIONS"
      width='400'>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
 </div>
<router-view></router-view>
</div>
</template>






<script>
import navigation from './navigation'
export default {
  name: 'users',
  components: {
    navigation
  },
   
  data() {
      return {
        userList: [],
      }
    },

    methods: {

      handleEdit(index, row) {
        console.log(index, row);
      },

      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    mounted(){
    this.axios.get('http://localhost:3306/app/users').then( (response) => {
        // console.log(response.data);
        this.userList = response.data;
      });
    }
}
</script>

<style>

#users {
  width: 70vw;
  float: left;
  margin-top: 5vh;
}
.is-leaf {
color: #466467;
background: #fef7cb;
font-size: 20px;
}


</style>

