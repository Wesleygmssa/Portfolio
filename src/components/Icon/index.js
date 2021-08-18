import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { Content } from "./styles";

// interface IConProps extends InputHTMLAttributes<HTMLInputElement> {
//     name?: string;
//     icon?: React.ComponentType<IconBaseProps>;
// }
const Conatiner = ({ icon: Icon, ...rest }) => {
    return (
        <>
            <Content {...rest}>{Icon && <Icon size={40} />}</Content>
        </>
    );
};

export default Conatiner;
