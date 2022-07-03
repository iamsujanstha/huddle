import styled from "styled-components";

export const StyledFooter = styled.div`
    background-color: ${({theme})=> theme.colors.footer};
    color: #fff;
    padding: 100px 60px;

    ul {
        margin-top: 20px;
        list-style-type: none;
        margin-right: 50px;
    }
    
    ul li{
        margin-bottom: 20px;
    }

    p{
        text-align: center;
    }

    @media(max-width: ${({ theme }) => theme.mobile}){
        text-align: center;
        ul {
            padding:0;

        }

        p{
            text-align: center;
        }
    }
`