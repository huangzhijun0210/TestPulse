import { Outlet } from "react-router-dom";
import Header from "./header";
import Menu from "./menu";
import './layout.scss'
import useIsShowMenu from "@/hooks/useIsShowMenu";
import useIsShowHeader from "@/hooks/useIsShowHeader";

function Layout() {

    const isShowMenu = useIsShowMenu();
    const isShowHeader = useIsShowHeader();
    console.log(isShowMenu)
    return (
        <>
            <div className="layout">
                {isShowHeader === true ? (<header><Header /></header>) : null}
                {isShowMenu === true ? (<nav><Menu /></nav>) : null}
                <div><Outlet /></div>
            </div>
        </>
    )
}

export default Layout;