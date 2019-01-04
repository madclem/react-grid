import React from 'react';
import styled from 'styled-components';

export default function MainContainer(props) {
    const MainContainerStyle = styled.div`
        justify-content: center;	
        display: grid;
        grid-template-columns: [col1-start] 200px [col2-start] 200px [col3-start] 200px [col3-end];
        grid-template-rows: auto;
        grid-column-gap: 10px;
        grid-row-gap: 10px;
        grid-template-areas:
            "header header header"
            "sidebar content content"
            "footer footer footer"
    `;
    const Box = styled.div`
        background-color: rgb(120,70,123);
        border: 5px solid rgb(88,55,112);
		color: #fff;
		border-radius: 5px;
		padding: 20px;
		font: 150%/1.3 Lucida Grande,Lucida Sans Unicode,Lucida Sans,Geneva,Verdana,sans-serif;
    `;

    const Header = styled(Box)`
        grid-area: header;
    `;
    const Sidebar = styled(Box)`
        grid-area: sidebar;
    `;
    const Content = styled(Box)`
        grid-area: content;
    `;
    const Footer = styled(Box)`
        grid-area: footer;
    `;

    return (
        <MainContainerStyle>
            <Header> Header </Header>
            <Sidebar> Sidebar </Sidebar>
            <Content> Content </Content>
            <Footer> Footer </Footer>
        </MainContainerStyle>
    );
}