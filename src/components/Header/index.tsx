import React, {FC} from 'react';
import HeaderItem from "./HeaderItem";

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
               <HeaderItem text={"n минут"}/>
               <HeaderItem text={"СБ, 3 ДЕК"}/>
               <HeaderItem text={"17:14"}/>
               <HeaderItem text={"-9 С"}/>
            </div>
        </header>
    );
};

export default Header;