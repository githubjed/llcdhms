<template>
  <vuetable
    :api-mode="false"
    :fields="fields"
    :data="data"
  />
</template>

<script>
export default {
  middleware: 'auth',

  metaInfo () {
    return { title: this.$t('home') }
  },
  data () {
    return {
      fields: ['userid', 'fullname', 'email', 'usertype', 'status'],
      data: [
        {
          userid: 'LLC-0001',
          fullname: 'Doctor One',
          email: 'doctor@yahoo.com',
          usertype: 'Doctor',
          status: 'Active'
        },
        {
          userid: 'LLC-0002',
          fullname: 'Pharmacist One',
          email: 'pharmacist@yahoo.com',
          usertype: 'Pharmacist',
          status: 'Active'
        },
        {
          userid: 'LLC-0003',
          fullname: 'Nurse One',
          email: 'nurse@yahoo.com',
          usertype: 'Nurse',
          status: 'Active'
        }
      ]
    }
  }
}
</script>
