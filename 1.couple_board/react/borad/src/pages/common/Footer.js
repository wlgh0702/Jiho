import ft from '../../css/footer.module.css';

function Footer() {
    if(window.location.pathname == '/signup') return null;
    return(
        <>
            <div className={ft.foot}>
                Copyright 2023 DoughKim. All rights reserved.
            </div>
        </>
    )
}

export default Footer;