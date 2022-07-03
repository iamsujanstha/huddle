import styled from 'styled-components';

export const StyledCard = styled.div`
    display: flex;
    /* flex-direction: row; */
    padding: 60px;
    align-items:center;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    /* margin-bottom: 20px; */
    margin: 40px 100px;
    border-radius: 15px;
    background-color: #fff;
    flex-direction: ${({layout}) => layout || 'row'};

    p{
        margin-top: 10px;
    }

    img{
        width:300px;
        margin-left: 100px;
    }

   @media(max-width: ${({theme})=> theme.mobile}){
    padding: 20px;
    flex-direction: column;
    margin:40px 20px;
    img{
        width: 60%;
    }

   }

`
