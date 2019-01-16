<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img :src="user.photo_url" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{ user.name }}</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
          <span class="input-group-btn">
            <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu" data-widget="tree">
        <!-- employee, patient, laboratory, medicines, history -->
        <li class="header">MAIN NAVIGATION</li>
        <li>
          <router-link :to="{ name: user ? 'dashboard' : 'welcome' }">
            <i class="fa fa-th"></i> <span>Dashboard</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'employees' }">
            <i class="fa fa-th"></i> <span>Employees</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'patients' }">
            <i class="fa fa-th"></i> <span>Patients</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'laboratory' }">
            <i class="fa fa-th"></i> <span>Laboratory</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'medicines' }">
            <i class="fa fa-th"></i> <span>Medicines</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'history' }">
            <i class="fa fa-th"></i> <span>History</span>
          </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  }
}
</script>
