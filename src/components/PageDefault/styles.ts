import styled, { keyframes } from "styled-components";

const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(0px);
 }
 to{
   opacity: 1;
   transform: translateX(0px);
 }
`;

export const AnimationContainer = styled.div`
    animation: ${apperFromCenter} 1s;
`;

export const Container = styled.div`
    min-height: 90vh;
`;
