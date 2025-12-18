import headerLogo from '@/assets/react_ts.svg'
import PersonLogo from '@/assets/个人.svg'
import InformationLogo from '@/assets/消息.svg'
import styles from '@/layout.module.scss'

function Header() {
    return (
        <>
            <div className={styles.logo}>
                <img src={headerLogo} alt="logo" />
                <div className={styles.logo_text}>
                    <div> TESTPULSE 考试管理系统</div>
                    <div>TESTPULSE EXAMINATION AND EVALUATION SYSTEM</div>
                </div>
            </div>
            <div className={styles.information}>
                <div className={styles.massage}><img src={PersonLogo}></img></div>
                <div className={styles.person} style={{ marginLeft: '20px', marginRight: '20px' }}><img src={InformationLogo}></img></div>
                <div style={{ color: '#5F6367' }}>管理员</div>
            </div>

        </>
    )
}

export default Header;