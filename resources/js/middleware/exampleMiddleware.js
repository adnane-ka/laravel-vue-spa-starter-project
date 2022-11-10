export default function example({ next, router }) {

    // if (!localStorage.getItem('token')) {
    //   return router.push('/login');
    // }
  
    return next();
}