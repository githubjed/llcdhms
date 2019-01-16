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
      fields: ['name', 'email', 'birthdate', 'gender'],
      data: [
        {
          name: 'asd',
          email: 'asda',
          birthdate: 'asdasd',
          gender: 'asdsda'
        },
        {
          name: 'asd',
          email: 'asda',
          birthdate: 'asdasd',
          gender: 'asdsda'
        },
        {
          name: 'asd',
          email: 'asda',
          birthdate: 'asdasd',
          gender: 'asdsda'
        }
      ]
    }
  }
}
</script>
