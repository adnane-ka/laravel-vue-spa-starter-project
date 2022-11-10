/**
 * middlewares
 * */ 
import example from '../middleware/exampleMiddleware'

/**
 * views list
 */
const ExampleView = () => import('../views/ExampleView.vue')
const OtherView = () => import('../views/OtherView.vue')

/**
 * fallback view
 */
const NotFoundView = () => import('../views/NotFoundView.vue')

/**
 * defining routes object
*/
const routes = [
  // main 
  {
    path: '/',
    name: 'home',
    component: ExampleView,
    meta:{
      middleware: example,
    }
  },

  // example 
  {
    path: '/example',
    name: 'example',
    component: OtherView,
    meta:{
      middleware: example,
    }
  },

  // Not found 
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not.found',
    component: NotFoundView
  }
]

export default routes;