import headerLogo from '@/assets/react_ts.svg'

function Header() {
    return (
        <>
            <div>
                <img src={headerLogo} alt="logo" style={{ width: '80px' }} />
            </div>
        </>
    )
}

export default Header;