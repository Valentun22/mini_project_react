import {NavLink} from "react-router-dom";
import css from './FooterComponent.module.css';

const FooterComponent = () => {
    return (
        <div className={css.footerStyle}>
            <img src={"https://owu.com.ua/image/logo/webp/Blue-Big-Bird-Final-Logo.webp"} alt={'img'}/>
            <NavLink className={css.footerLink} to={'https://owu.com.ua/?utm_source=google&utm_medium=gad&utm_campaign=main&utm_content=dynamicad&gad_source=1&gclid=CjwKCAjwydSzBhBOEiwAj0XN4Cao5bKtqkMUUBECk5vGPWGOK7IoX-7-1KQiQ0DghgmQtEC0vHvHuxoCmS8QAvD_BwE'}>
                Okten School
            </NavLink>
        </div>
    );
};

export {FooterComponent};