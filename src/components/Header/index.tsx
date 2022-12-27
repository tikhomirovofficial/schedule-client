import React, {FC} from 'react';

const Header: FC = () => {
    return (
        <header className="flex-row-betw">
            <div className="header__logo d-f al-center gap-20">
                <img src="img/logo.jpg" alt=""/>
                <p className="header__text">
                    Череповецкий
                    Лесомеханический
                    техникум
                </p>
            </div>
            <div className="header__things d-f al-center gap-30">
                <div className="header__thing-item d-f al-center">
                    <div className="emodji"></div>
                    <p>Some text</p>
                </div>
                <div className="header__thing-item d-f al-center">
                    <div className="emodji"></div>
                    <p>Some text</p>
                </div>
                <div className="header__thing-item d-f al-center">
                    <div className="emodji"></div>
                    <p>Some text</p>
                </div>
                <div className="header__thing-item d-f al-center">
                    <div className="emodji"></div>
                    <p>Some text</p>
                </div>
            </div>
        </header>
    );
};

export default Header;