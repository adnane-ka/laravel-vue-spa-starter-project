import axios from 'axios'
// import router from '../router/index'

const instance = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    headers: {
        // 'Common-header': '..'
    },
});

/**
 * custom handle & catch errors
*/
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if(error.response.status == 401) { // handle token expiration for example
        localStorage.removeItem('token');
        instance.defaults.headers.common['Authorization'] = null;
        // router.push('/login');
    }
    else if(error.response.status == 404){
        // router.push('/not-found');
    }
    else {
        // This is important, so that unhandled cases make axios throw errors
        return Promise.reject(error);
    }
});

export default instance