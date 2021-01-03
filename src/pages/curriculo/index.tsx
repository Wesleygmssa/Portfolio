import React from 'react'
import PageDefault from '../../components/PageDefault';
import {Content} from './styles';


const Contact: React.FC = () => {
  return (
    <PageDefault>
        <Content>
            {/* <h1 className="text-block">Em breve</h1> */}
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6715351093980758016" 
            title="Publicação incorporada"></iframe>
        </Content>
    </PageDefault>
  )
}
export default Contact;
