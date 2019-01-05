import React from 'react';
import styled from 'styled-components';

export default function MainContainer(props) {
    const MainContainerStyle = styled.div`
        width: 90%;
        display: grid;
        margin: 0 auto 0 auto;
        grid-template-columns: 9fr 3fr;
        grid-template-rows: auto;
        grid-column-gap: 40px;
        // grid-row-gap: 10px;
        grid-template-areas:
            "header header"
            "content sidebar"
            "footer footer"
    `;

    const Box = styled.div`
        color: #000;
        padding: 10px;
    `;

    const Header = styled(Box)`
        grid-area: header;
        background-color: #eee;
        border: 1px solid #ccc;
    `;

    const Content = styled(Box)`
        grid-area: content;
        padding: 0px;
        display: grid;
        grid-template-columns: 9fr 3fr;
        grid-template-rows: auto;
        grid-column-gap: 40px;
        grid-template-areas:
            "chapterhead ."
            "article-primary article-secondary";

        h1 {
            grid-area: chapterhead;            
        }
    `;

    const Primary = styled.div`
        grid-area: article-primary;
    `;

    const ColumnRightArticle = styled.aside`
        grid-area: article-secondary;
    `;

    const ColumnRight = styled(Box)`
        grid-area: sidebar;
        background-color: #ccc;

    `;
    const Footer = styled(Box)`
        grid-area: footer;
        background-color: #eee;
        border: 1px solid #ccc;
    `;

    return (
        <MainContainerStyle>
            <Header> 
                <h1>Title</h1> 
            </Header>
            <Content>
                <h1>Title Article</h1>
                <Primary>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue dui non justo maximus, id hendrerit nulla dignissim. Donec sagittis mauris nec tincidunt laoreet. Fusce in luctus massa, vel molestie arcu. Nunc placerat dolor ligula, et blandit nunc faucibus at. Quisque rutrum egestas sapien fringilla ullamcorper. Nullam malesuada, tellus blandit gravida dapibus, neque velit mollis enim, eu imperdiet purus nulla vel diam. Curabitur at porta justo, cursus cursus est. Proin ultricies at nisl tincidunt feugiat. Etiam dapibus lorem ac turpis luctus, eu porta enim sagittis. Proin non sem at mi facilisis pretium. Sed in semper mauris. Phasellus elementum hendrerit dolor eget scelerisque.</p>
                </Primary>
                <ColumnRightArticle>
                    <p>Morbi vitae ultrices est, quis euismod ante. In sodales molestie aliquam. Donec sed nisl ex. Morbi nec gravida nisl. Vivamus luctus at ligula vitae consectetur. Aenean sit amet libero at lectus vulputate porttitor. Morbi et facilisis nisi, ut mollis elit. Nam nec enim eleifend sapien ultrices porta. Fusce ut consequat augue. Aliquam pharetra et massa ut mattis. Donec bibendum eros vel pellentesque interdum.</p>
                </ColumnRightArticle>
            </Content>
            <ColumnRight>
                <p>Morbi pharetra porttitor sapien, in condimentum arcu dignissim sed. Proin scelerisque et nunc quis pellentesque. Nunc eget blandit ligula, ac pellentesque elit. Sed nec leo vitae nibh malesuada auctor eget sed metus. Aenean molestie libero tincidunt, posuere elit egestas, volutpat tellus. Donec at mauris mattis, molestie purus ut, consequat dolor. Ut molestie sapien ac nulla bibendum, at scelerisque ipsum congue. Nulla mollis eu risus nec vestibulum.</p>
            </ColumnRight>
            <Footer>
                <p>Morbi sit amet leo vitae velit volutpat aliquet. Donec ultricies odio lacus, eget vehicula nunc tempor in. Sed ut tincidunt neque. Ut non elementum ante.</p>
            </Footer>
        </MainContainerStyle>
    );
}