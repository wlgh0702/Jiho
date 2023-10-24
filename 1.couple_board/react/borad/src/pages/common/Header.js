import hd from '../../css/header.module.css';
import logo from './logo.png';
import {NavLink, useLocation} from "react-router-dom";

function Header() {
    if(window.location.pathname == '/signup') return null;
    return(
        <>
            <div className={hd.headerWrapper}>
                <div className={hd.topNav}>
                    <div className={hd.logo}>
                        <img src={logo} style={{height : "37px", marginLeft : "20px", marginTop : "4px"}}/>
                    </div>
                    <div className={hd.menuWrapper}>
                        <NavLink to={'/board'} className={hd.menu}>
                            전체게시판
                        </NavLink>
                        <NavLink to={'/soloBoard'} className={hd.menu}>
                            솔로게시판
                        </NavLink>
                        <NavLink to={'/coupleBoard'} className={hd.menu}>
                            커플게시판
                        </NavLink>
                        <div className={hd.logout}>
                            로그아웃
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;