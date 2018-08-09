<template>
  <div>
    <div id='createVisitTable'>


    <el-form ref="visit" :key="visit" label-width="120px">

      <el-form-item label="Client">
        <el-select v-model="visits.customers_id" placeholder='choose client'>
          <el-option v-for="customer in customers" :key="customer.id" :label="customer.customer_firstName + ',' + customer.customer_lastName" :value="customer.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Pets">
        <el-select v-model="visit.pet_id" placeholder="Select client">
          <el-option v-if="visit.clients_id == pet.clients_id" v-for="pet in pets" :key="pet.id" :label="pet.pet_name" :value="pet.id"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="Date">
        <el-col :span="11">
          <el-date-picker format="yyyy-MM-dd" value-format="yyyy-MM-dd" type="date" placeholder="Pick a date" v-model="visit.date" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="Long description">
        <el-input type="textarea" v-model="visit.long_description"></el-input>
      </el-form-item>
      <el-form-item label="Diagnosis">
        <el-input type="text" v-model="visit.diagnosis"></el-input>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input type="file" v-model="visit.photo"></el-input>
      </el-form-item>
      <el-form-item label="Visit Type">
        <el-select v-model="visit.type_id" placeholder="Select type">
          <el-option v-for="type in types" :key="type.id" :label="type.type" :value="type.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>
<style>
</style>

<script>
const axios = require('axios')
export default {
  name: 'createVisit',
  data () {
    return {
      visit: {
        customers_id: '',
        pet_id: '',
        short_description: '',
        long_description: '',
        diagnosis: '',
        photo: '',
        type_id: '',
        staff_id: 1
      },
      customers: [],
      pets: [],
      types: []
    }
  },
  // methods: {
  //   onSubmit () {
  //     axios.post('http://localhost:3306/app/visits/', this.visit)
  //       .then((response) => {
  //         console.log(response)
  //       })
  //   }
  // },
  // mounted () {
  //   axios.get('http://localhost:3306/app/customers/')
  //     .then((response) => {
  //       this.customers = response.data
  //       console.log(this.customers)
  //     })
  //   axios.get('http://localhost:3306/app/pets/')
  //     .then((response) => {
  //       this.pets = response.data
  //       console.log(this.pets)
  //     })
  //   axios.get('http://localhost:3306/app/types/')
  //     .then((response) => {
  //       this.types = response.data
  //       console.log(this.types)
  //     })
  // }
}
</script>

<style>

#createVisitTable {
    width: 70vw;
    float: left;
    margin-top: 10vh;
}

</style>
