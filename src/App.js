import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import {ThemeProvider} from 'styled-components';
import content from './content';
import Card from './components/Card';


const theme = {
    colors: {
        header: '#ebfbff',
        body:'#fff',
        footer: "#003333"
    },
    mobile: '768px',
}

export default function App() {
    // const [content, setContentData] = React.useState(content)
    return(
        <ThemeProvider theme={theme}>
            <Header />
            
            {content.map((item,id)=>{
                return(
                    <Card 
                        key={id}
                        item = {item}
                        />
                )
            })}
            <Footer />

        </ThemeProvider>
    )
}