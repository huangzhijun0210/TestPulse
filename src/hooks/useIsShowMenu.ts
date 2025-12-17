import { useLocation } from "react-router-dom";
import { routerData, routerType } from '@/router/config'
function useIsShowMenu() {

    const location = useLocation();


    const router = Object.entries(routerData as routerType).find(([key, route]) => {
        return location.pathname.split('/')[1] === key  // 匹配到则返回 true，find 会终止并返回该 [key, route]
    });

    const isShow = router ? router[1].hasMenu : false;
    return isShow;
}

export default useIsShowMenu;