import React from 'react'
import PageDefault from '../../components/PageDefault';
import { Content, Videomaker } from './styles';


const Contact: React.FC = () => {
    return (
        <PageDefault>
            <Content>
                {/* <h1 className="text-block">Em breve</h1> */}
                <Videomaker>
                    <iframe title="task"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/yZxqFQa_978"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    >
                    </iframe>

                    <iframe title="GoBarber"
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/R5abDxDeg0I"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                </Videomaker>
            </Content>
        </PageDefault>
    )
}
export default Contact;
