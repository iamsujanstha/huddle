import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & >div, &ul{
        flex:1;
        
    }
    h1,p{
        margin-bottom: 18px;
        line-height: 1.2em;

    }

    @media(max-width:${({theme}) => theme.mobile}){
        flex-direction: column;
        text-align:center;
    }
`