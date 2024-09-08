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
    EventsDescription,
} from "./styles"; // Estilos customizados
import PageDefault from "../../components/PageDefault";

const Events: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null); // Controla a imagem no modal

    const events = [
        {
            image: "https://media.licdn.com/dms/image/v2/D4D22AQGrF-FDwHQJ_A/feedshare-shrink_800/feedshare-shrink_800/0/1725540743048?e=1728518400&v=beta&t=MDb9s6sCcqNB4duYUB7uOskf84tSDIN9-JQcU0w7qUA",
            description:
                "Trilha intermediária de desenvolvimento Full-stack com foco em React e Node.js. Ideal para quem deseja se atualizar com as melhores práticas e ferramentas do mercado, além de impulsionar sua carreira com novas habilidades em programação.",
        },
    ];

    const openModal = (image: string) => {
        setSelectedImage(image); // Abre o modal com a imagem selecionada
    };

    const closeModal = () => {
        setSelectedImage(null); // Fecha o modal
    };

    return (
        <PageDefault>
            <EventsWrapper>
                <EventsTitle>Eventos que Marcaram Minha Jornada</EventsTitle>
                <EventsDescription>
                    Ao longo da minha carreira, participei de eventos que
                    tiveram um grande impacto no meu crescimento profissional e
                    pessoal. Aqui estão alguns dos momentos mais marcantes que
                    fizeram parte dessa jornada.
                </EventsDescription>
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
                            <EventDescription>
                                {event.description}
                            </EventDescription>
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
