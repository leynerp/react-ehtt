import styled from 'styled-components';

export const Modal = styled.dialog`
  background-color: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.75rem; 
  border-width: 0px;
  transition: all 10s ease;  
   box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04); 

    p{
     font-size:20px;
     margin-top:0;     
     font-weight: bold;
    }
`;

export const Overlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 5px;
  justify-content: center;
  align-items: center;
  background-color: rgba(52, 64, 84, 0.6);
  backdrop-filter: blur(8px); 

`;

/* export const Modal = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:80%;
  height: 80%;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.1),
    0px 8px 8px -4px rgba(16, 24, 40, 0.04);
  transition: all 0.5s ease;
  z-index: 100;
`;

// The rest of elements content inside the Modal
const Icon = styled.img`
  // Icon styles
`;

const Title = styled.div`
  //Title styles
`;

const Text = styled.div`
  // Text styles
`;

const Wrapper = styled.div`
  // Wrapper styles
`;

export const CancelButton = styled.button`
  // Cancel button styles
`;

const ContactButton = styled.button`
  // Contact button styles
`; */
