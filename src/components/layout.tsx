import { Outlet } from "react-router-dom";
import Header from "./header";
import Menu from "./menu";
import styles from '@/layout.module.scss'
import useIsShowMenu from "@/hooks/useIsShowMenu";
import useIsShowHeader from "@/hooks/useIsShowHeader";

function Layout() {

    const isShowMenu = useIsShowMenu();
    const isShowHeader = useIsShowHeader();
    return (
        <>
            <div className={styles.layout}>
                {isShowHeader === true ? (<header className={styles.header}><Header /></header>) : null}
                {isShowMenu === true ? (<nav><Menu /></nav>) : null}
                <div className={styles.outlet}>
                    <div className={styles.content}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout;
