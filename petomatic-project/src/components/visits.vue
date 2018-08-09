<template>
  <div>
   <div id='visitsTable'>

    <el-table
      class='visits'
      :data="visitsList"
      style="width: 100%">

      <el-table-column type="expand">
        <template scope="props">
           <p> CUSTOMER FULL NAME : {{ props.row.firstName }}  {{ props.row.LastName }}</p>
           <p> PET NAME : {{ props.row.petName }}</p>
           <p> PET SPECIES :{{props.row.species}} </p>
           <p> VISIT TYPE : {{ props.row.visit_type }}</p>
        </template>
      </el-table-column>

      <el-table-column
        label="VISIT DATE"
        prop="date">
      </el-table-column>

      <el-table-column
        label="CUSTOMER NAME"
        prop="firstName">
      </el-table-column>

      <el-table-column
        label="PET NAME"
        prop="petName">
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        visitsList:[]
      }
    },
    mounted(){
        this.axios.get('http://localhost:3306/app/visits').then( (response) => {
         // console.log(response.data);
         this.visitsList = response.data;
      });
    }
  }
</script>



<style>

#visitsTable {
  /* float: right; */
  width: 70vw;
  float: left;
  margin-top: 10vh;
  /* margin-left: 20vw; */
}
/* el-table el-table--fit el-table--enable-row-hover el-table--enable-row-transition */

/* .el-table--fit {
  width: 80vw;
  background:red;
}
.visiits {
  background: red;
  color: red;
} */

</style>
