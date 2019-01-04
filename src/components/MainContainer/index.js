import React from 'react';
import styled from 'styled-components';

export default function MainContainer(props) {
    const MainContainerStyle = styled.div`
        margin: auto;
        display: grid;
        grid-template-columns: 100px 10px 100px 10px 100px;
        grid-template-rows: auto 10px auto;
    `;
    const Box = styled.div`
        background-color: rgb(120,70,123);
		border: 5px solid rgb(88,55,112);
		color: #fff;
		border-radius: 5px;
		padding: 20px;
		font: 150%/1.3 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-serif;
        grid-column: ${props => (props.cs || 'auto' ) + '/' + (props.ce || 'auto') };
        grid-row: ${props => (props.rs || 'auto' ) + '/' + (props.re || 'auto') };
    `;
    
    return (
        <MainContainerStyle>
            <Box cs={1} ce={4} rs={1} re={2}> A </Box>
            <Box cs={5} ce={6} rs={1} re={4}> B </Box>
            <Box cs={1} ce={2} rs={3} re={4}> C </Box>
            <Box cs={3} ce={4} rs={3} re={4}> D </Box>
        </MainContainerStyle>
    );
}