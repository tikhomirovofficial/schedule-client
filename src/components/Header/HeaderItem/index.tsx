import React, {FC} from 'react';

interface IHeaderItemProps {
    text: string
}
const HeaderItem: FC<IHeaderItemProps> = ({text}) => {
    return (
        <div className="header__thing-item d-f al-center">
            <div className="emodji"></div>
            <p>{text}</p>
        </div>
    );
};

export default HeaderItem