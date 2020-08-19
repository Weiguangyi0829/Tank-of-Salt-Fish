export const commonRoutes = [
    {
        path: '/',
        name: 'index',
        component: () => import('_c/Relogin'),
        redirect: '/login',
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('_v/RegLogin/Login')
            },
            {
                path: '/register',
                name: 'register',
                component: () => import('_v/RegLogin/Register')
            }
        ]
    }
]