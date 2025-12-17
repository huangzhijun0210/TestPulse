export type routerType = typeof routerData;
export type routerKeys = keyof routerType;

export const routerData = {
    login: {
        path: '/',
        hasMenu: true,
    },
    exam: {
        path: '/exam',
        hasMenu: false,
    }
}