import styled from 'styled-components';

export const StyledHeader = styled.header`
    background-color: ${({theme}) => theme.colors.header};
    padding: 40px;
`

export const Nav = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;


    @media(max-width:${({theme}) => theme.mobile}){
        flex-direction: column;
    }
`

export const Logo = styled.img`
    @media(max-width:${({theme}) => theme.mobile}){
       margin-bottom: 40px;
    }

`

export const Images = styled.img`
    width: 400px;
    margin-left: 280px;

    @media(max-width:${({theme}) => theme.mobile}){
        margin: 20px;
    }
`

