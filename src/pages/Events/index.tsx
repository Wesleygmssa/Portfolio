import React, { useState } from "react";
import {
    EventsContainer,
    EventCard,
    EventImage,
    EventDescription,
    EventsTitle,
    EventsWrapper,
    Modal,
    ModalImage,
    CloseButton,
    EventOverlay,
} from "./styles";
import PageDefault from "../../components/PageDefault";

const Events: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const events = [
        {
            image: "https://media.licdn.com/dms/image/v2/D4D22AQGrF-FDwHQJ_A/feedshare-shrink_800/feedshare-shrink_800/0/1725540743048?e=1728518400&v=beta&t=MDb9s6sCcqNB4duYUB7uOskf84tSDIN9-JQcU0w7qUA",
            description:
                "Trilha intermediária de desenvolvimento Full-stack com foco em React e Node.js. Ideal para quem deseja se atualizar com as melhores práticas e ferramentas do mercado.",
        },
        // {
        //     image: "https://image-url2.com",
        //     description: "Outro evento impactante na minha carreira.",
        // },
        // {
        //     image: "https://image-url3.com",
        //     description:
        //         "Mais um evento marcante que ajudou no meu crescimento.",
        // },
    ];

    const openModal = (image: string) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <PageDefault>
            <EventsWrapper>
                <EventsTitle>Eventos Importantes</EventsTitle>
                <EventsContainer>
                    {events.map((event, index) => (
                        <EventCard
                            key={index}
                            onClick={() => openModal(event.image)}
                        >
                            <EventImage
                                src={event.image}
                                alt={`Evento ${index + 1}`}
                            />
                            <EventOverlay>
                                <EventDescription>
                                    {event.description}
                                </EventDescription>
                            </EventOverlay>
                        </EventCard>
                    ))}
                </EventsContainer>

                {selectedImage && (
                    <Modal onClick={closeModal}>
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <ModalImage src={selectedImage} alt="Imagem ampliada" />
                    </Modal>
                )}
            </EventsWrapper>
        </PageDefault>
    );
};

export default Events;
