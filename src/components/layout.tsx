import { Outlet } from "react-router-dom";
import Header from "./header";
import Menu from "./menu";
import './layout.scss'
import useIsShowMenu from "@/hooks/useIsShowMenu";

function Layout() {

    const isShowMenu = useIsShowMenu();

    return (
        <>
            <div className="layout">
                <header><Header /></header>
                {isShowMenu === true ? (<nav><Menu /></nav>) : null}
                <div><Outlet /></div>
            </div>
        </>
    )
}

export default Layout;