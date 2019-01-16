<template>
  <body class="hold-transition skin-blue sidebar-mini">
    <div class="wrapper">
      <header class="main-header">
        <a href="/home" class="logo">
          <!-- mini logo for sidebar mini 50x50 pixels -->
          <span class="logo-mini"><b>A</b>PNL</span>
          <!-- logo for regular state and mobile devices -->
          <span class="logo-lg"><b>Admin</b>Panel</span>
        </a>
        <navbar />
      </header>
      <sidebar />

      <div class="content-wrapper">
        <section class="content-header">
          <h1>
            Dashboard
            <small>Control panel</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
          </ol>
        </section>
        <section class="content" style="height: 500px">
          <child />
        </section>
      </div>
      <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 0.1.0
        </div>
        <strong>Copyright &copy; 2019.</strong> All rights
        reserved.
      </footer>
    </div>
  </body>
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'

import { mapGetters } from 'vuex'
import Child from "../components/Child";

export default {
  name: 'MainLayout',
  components: {
    Child,
    Navbar,
    Sidebar
  },
  computed: {
    ...mapGetters({
      users: 'auth/users'
    })
  }
}
</script>
