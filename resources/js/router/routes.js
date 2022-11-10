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
      title: "Main page"
    }
  },

  // example 
  {
    path: '/example',
    name: 'example',
    component: OtherView,
    meta:{
      middleware: example,
      title: "Example page"
    }
  },

  // Not found 
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not.found',
    component: NotFoundView,
    title: "404"
  }
]

export default routes;