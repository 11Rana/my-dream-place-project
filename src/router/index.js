import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogedInHomeView from '../views/LogedInHomeView.vue'
import SignInView from '../views/SignInView.vue'
import RegisterView from '../views/RegisterView.vue'
import MyTripsView from '../views/MyTripsView.vue'
import CheckOutView from '@/views/CheckOutView.vue'
import SearchResultView from '@/views/SearchResultsView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/LogedInHome',
    name: 'LogedInHome',
    component: LogedInHomeView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignInView
  },
  {
    path: '/mytrips',
    name: 'mytrips',
    component: MyTripsView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOutView
  },
  {
    path: '/searchresults',
    name: 'searchresults',
    component: SearchResultView
  },
  {
    path: '/productdetails',
    name: 'productdetails',
    component: ProductDetailsView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
