import React from 'react';
import styled from 'styled-components';

export default function MainContainer(props) {
    const MainContainerStyle = styled.div`
        justify-content: center;	
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
    `;
    const Box = styled.div`
        background-color: rgb(120,70,123);
        border: 5px solid rgb(88,55,112);
        // height: 100px;
		color: #fff;
		border-radius: 5px;
		padding: 20px;
		font: 150%/1.3 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-serif;
        grid-column: ${props => (props.cs || 'auto' ) + '/' + (props.ce || 'auto') };
        grid-row: ${props => (props.rs || 'auto' ) + '/' + (props.re || 'auto') };
    `;

    return (
        <MainContainerStyle>
            <Box cs={1} ce={3} rs={1} re={2}> A </Box>
            <Box cs={3} ce={4} rs={1} re={3}> B </Box>
            <Box cs={1} ce={2} rs={2} re={3}> C </Box>
            <Box cs={2} ce={3} rs={2} re={3}> D </Box>
        </MainContainerStyle>
    );
}