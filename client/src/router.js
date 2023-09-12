import {ForAdmin} from './pages/ForAdmin'
import {Dencrypted} from './pages/Dencrypted'
import {Encrypted} from './pages/Encrypted'
import {Home} from './pages/Home'
import {Auth} from './pages/Auth'
import {Registration} from './pages/Registartion'
import { ADMIN_ROUTE, AUTH_ROUTE, DENCRYPTED_ROUTE, ENCRYPTED_ROUTE, HOME_ROUTE, REGISTRATION_ROUTE } from './utils/consts'

//Список маршрутов для авторизованного пользователя
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: ForAdmin
    },
    {
        path: DENCRYPTED_ROUTE,
        Component: Dencrypted
    },
    {
        path: ENCRYPTED_ROUTE,
        Component: Encrypted
    },
]

//Список маршрутов для неавторизованного пользователя
export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
]