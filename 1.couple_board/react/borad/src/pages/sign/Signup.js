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
                    <div className={s.info}>
                        <pre style={{margin : 0}}><b>아이디</b></pre>
                        <input type="text"/>
                    </div>
                    <div className={s.info}>
                        <pre style={{margin : 0}}><b>비밀번호</b></pre>
                        <input type="password"/>
                    </div>
                    <div className={s.info}>
                        <pre style={{margin : 0}}><b>비밀번호 확인</b></pre>
                        <input type="password"/>
                    </div>
                    <div className={s.info}>
                        <pre style={{margin : 0}}><b>이름</b></pre>
                        <input type="text"/>
                    </div>
                    <div className={s.info}>
                        <pre style={{margin : 0}}><b>이메일</b></pre>
                        <input type="text"/>
                    </div>
                    <div className={s.info}>
                        <pre style={{margin : 0}}><b>생년월일</b></pre>
                        <input type="text"/>
                    </div>
                    <div className={s.info}>
                        <pre style={{margin : 0}}><b>성별</b></pre>
                        <input type="text"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;