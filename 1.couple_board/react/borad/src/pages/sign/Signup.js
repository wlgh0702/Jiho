import s from '../../css/sign.module.css';
import logo from '../common/logo.png'

function Signup() {
    return(
        <>
            <div className={s.signup}>
                <div className={s.form}>
                    <div className={s.logo}>
                        <img src={logo} style={{height : 80}}/>
                    </div>
                    <br/>
                    <div className={s.info}>
                        <div className={s.infoHead}>아이디</div>
                        <div className={s.infoBody}>
                            <input type="text"/>
                            <div className={s.duplicate}>중복확인</div>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.infoHead}>비밀번호</div>
                        <div className={`${s.infoBody} ${s.pwd}`}>
                            <input type="password"/>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.infoHead}>비밀번호 확인</div>
                        <div className={`${s.infoBody} ${s.pwd}`}>
                            <input type="password"/>
                        </div>
                    </div>
                    <div className={s.info}>
                        <div className={s.infoHead}>이름</div>
                        <div className={`${s.infoBody} ${s.pwd}`}>
                            <input type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;