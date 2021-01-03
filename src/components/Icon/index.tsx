import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from 'react-icons';
import {Content} from './styles';

interface IConProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string,
    icon: React.ComponentType<IconBaseProps>;
}
const Conatiner: React.FC<IConProps> = ({icon: Icon, ...rest}) => {
  return (
      <>
           <Content  {...rest}>
                 <Icon  size={40}/>
          </Content>
      
      </>
    
  );
};

export default Conatiner;
