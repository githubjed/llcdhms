const Welcome = () => import('~/pages/welcome').then(m => m.default || m)
const Login = () => import('~/pages/auth/login').then(m => m.default || m)
const Register = () => import('~/pages/auth/register').then(m => m.default || m)
const PasswordEmail = () => import('~/pages/auth/password/email').then(m => m.default || m)
const PasswordReset = () => import('~/pages/auth/password/reset').then(m => m.default || m)
const NotFound = () => import('~/pages/errors/404').then(m => m.default || m)

const Dashboard = () => import('~/pages/dashboard').then(m => m.default || m)
const Settings = () => import('~/pages/settings/index').then(m => m.default || m)
const SettingsProfile = () => import('~/pages/settings/profile').then(m => m.default || m)
const SettingsPassword = () => import('~/pages/settings/password').then(m => m.default || m)

const Employees = () => import('~/pages/employees').then(m => m.default || m)
const Patients = () => import('~/pages/patients').then(m => m.default || m)
const Laboratory = () => import('~/pages/laboratory').then(m => m.default || m)
const Medicines = () => import('~/pages/medicines').then(m => m.default || m)
const History = () => import('~/pages/history').then(m => m.default || m)

export default [
  { path: '/', name: 'welcome', component: Welcome },

  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },
  { path: '/password/reset', name: 'password.request', component: PasswordEmail },
  { path: '/password/reset/:token', name: 'password.reset', component: PasswordReset },

  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/settings',
    component: Settings,
    children: [
      { path: '', redirect: { name: 'settings.profile' } },
      { path: 'profile', name: 'settings.profile', component: SettingsProfile },
      { path: 'password', name: 'settings.password', component: SettingsPassword }
    ] },

  { path: '/employees', name: 'employees', component: Employees },
  { path: '/patients', name: 'patients', component: Patients },
  { path: '/laboratory', name: 'laboratory', component: Laboratory },
  { path: '/medicines', name: 'medicines', component: Medicines },
  { path: '/history', name: 'history', component: History },

  { path: '*', component: NotFound }
]
