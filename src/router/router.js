import Home from '../views/home/home';
import Login from '../views/login/login';
import Register from '../views/register/register';

const routes = [
    {
        path:'/',
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
    }
]

module.exports = routes