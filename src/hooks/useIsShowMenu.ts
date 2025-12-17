import { useLocation } from "react-router-dom";
import { routerData, routerType } from '@/router/config'
function useIsShowMenu() {

    const location = useLocation();

    Object.entries(routerData as routerType).forEach(([key, route]) => {
        if (location.pathname.split('/')[1] === key) {
            return route.hasMenu;
        }
    });

    //登录页不显示
    return false;
}

export default useIsShowMenu;