import {
    ADMIN_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    ORDER_ROUTE,
    REQUEST_ROUTE,
    STORAGE_ROUTE,
    USER_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin/Admin";
import User from "./pages/User";
import Auth from "./pages/Auth/Auth";
import StoragePage from "./pages/StoragePage/StoragePage";
import DevicePage from "./pages/DevicePage/DevicePage";
import OrderPage from "./pages/OrderPage";
import RequestPage from "./pages/RequestPage/RequestPage";


export const adminRouters = [
    {
        path: ADMIN_ROUTE,
        Component: Admin,
    },

]
export const storageRouters = [
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: STORAGE_ROUTE,
        Component: StoragePage
    },
    {
        // path: DEVICE_ROUTE,

        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    },
    {
        path: ORDER_ROUTE,
        Component: OrderPage
    },
]
export const userRouters = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: USER_ROUTE,
        Component: User
    },
    {
        path: REQUEST_ROUTE,
        Component: RequestPage
    },
]