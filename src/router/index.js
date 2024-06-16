import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookForm from '../views/CreateBook.vue'
import Index from '../views/IndexBooks.vue'
import Edit from '../views/EditBook.vue'
import Dashboard from '../views/DashboardView.vue'
import ViewBook from '../views/ViewBook.vue'
import Login from '../views/LoginView.vue'
import Register from '../views/RegisterView.vue'
import OnlyViewBook from '../views/OnlyViewBook.vue'


const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true
    }
  }
  // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  ,
  {
    path: '/create_book',
    name: 'create_book',
    component: BookForm,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/index_books',
    name: 'books',
    component: Index,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit_book/:id',
    name: 'edit_book',
    component: Edit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/view_book/:id',
    name: 'view_book',
    component: ViewBook,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      hideNavBar: true
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      hideNavBar: true
    }
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/login'
  },
  {
    path: '/only_view_book/:id',
    name: 'only_view_book',
    component: OnlyViewBook,
    meta: {
      hideNavBar: true,
      requiresAuth: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Verifica si hay un token

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'login' }); // Redirige al login si no está autenticado
  } else {
    next(); // Continúa con la navegación si está autenticado o la ruta no requiere autenticación
  }
});

export default router
