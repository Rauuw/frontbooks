import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookForm from '../views/CreateBook.vue'
import Index from '../views/IndexBooks.vue'
import Edit from '../views/EditBook.vue'
import Dashboard from '../views/DashboardView.vue'
import ViewBook from '../views/ViewBook.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/create_book',
    name: 'create_book',
    component: BookForm
  },
  {
    path: '/index_books',
    name: 'books',
    component: Index
  },
  {
    path: '/edit_book/:id',
    name: 'edit_book',
    component: Edit
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/view_book/:id',
    name: 'view_book',
    component: ViewBook
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
