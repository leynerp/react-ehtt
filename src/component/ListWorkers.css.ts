import styled from 'styled-components';

export const WorkersMain = styled.main`
   ul{
     display :grid ;
     grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
     gap: 20px;
   }
    
`;

export const WorkerItems = styled.li`   
    gap: 1px;
    border: 1px solid blue; 
    p{
      font-size:20px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    img{
      border-radius: 8px;
      margin-top: 16px;
      width: 50%;
      height: 50%;
    }

    header{
      display: flex;
      flex-direction: column;
      align-items: center;  
      height:85%   
    } 

     section{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    } 

    &:hover{
      background-color: aquamarine;
      transition: 5ms ease-in-out;
    }
`;
