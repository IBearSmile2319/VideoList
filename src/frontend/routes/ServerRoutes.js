import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFount from "../pages/NotFount"
import Player from "../pages/Player"
const routes=[
    {
        exact:true,
        path:"/",
        render:Home,
    },
    {
        exact:true,
        path:"/login",
        render:Login,
    },
    {
        exact:true,
        path:"/register",
        render:Register,
    },
    {
        exact:true,
        path:"/player/:id",
        render:Player,
    },
    {
        name:"NotFound",
        render:NotFount,
    }
]


export default routes