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
            image: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
            description:
                "Este evento foi incrível e marcou o início de uma nova era.",
        },
        {
            image: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
            description:
                "Um evento memorável que nos ensinou muito sobre trabalho em equipe.",
        },
        {
            image: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
            description:
                "Aquele dia em que tudo deu certo e alcançamos grandes resultados.",
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
                    Ao longo da minha carreira, tive a oportunidade de
                    participar de diversos eventos que contribuíram para o meu
                    crescimento profissional e pessoal. Aqui estão alguns dos
                    momentos mais marcantes.
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
