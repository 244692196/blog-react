import Home from '../views/home/home';
import Login from '../views/login/login';
import Register from '../views/register/register';
import About from '../views/about/about';

const routes = [
    {
        path:'/home',
        component:Home,
        exact:true
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/about',
        component:About
    }
]

export default routes;
