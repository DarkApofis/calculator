import styled from "styled-components";

export const Main = styled.main`
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    min-width: 375px;
    max-width: 560px;
`

export const Title = styled.h1`
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.keyColor};
`

export const Screen = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-bottom: 1.5rem;
    padding: 1rem;
    width: 100%;
    height: 80px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.screenBackground};
`

export const ScreenInfo = styled.p`
    font-size: 2rem;
    color: ${(props) => props.theme.keyColor};
`

export const ButtonsContainer = styled.div`
    width: 100%;
    padding: 1rem;
    display: grid;
    grid-template: repeat(5, 60px) / repeat(4, minmax(60px, 120px));
    gap: 1.5rem;
    border-radius: 5px;
    background-color: ${(props) => props.theme.screenBackground};
`

export const DeleteButton = styled.button`
    color: ${(props) => props.theme.keyColor};
    background-color: ${(props) => props.theme.funcKeys};
    box-shadow: 0px 3.5px 1px ${(props) => props.theme.funcKeysShadow};
    &:active{
        background-color: ${(props) => props.theme.funcKeysPress};
    }
`

export const ResetButton = styled.button`
    grid-column: 1 / 3;
    color: ${(props) => props.theme.keyColor};
    background-color: ${(props) => props.theme.funcKeys};
    box-shadow: 0px 3.5px 1px ${(props) => props.theme.funcKeysShadow};
    &:active{
        background-color: ${(props) => props.theme.funcKeysPress};
    }
`

export const ResultButton = styled.button`
    grid-column: 3 / 5;
    color: ${(props) => props.theme.keyColor};
    background-color: ${(props) => props.theme.resultKey};
    box-shadow: 0px 3.5px 1px ${(props) => props.theme.resultShadow};
    &:active{
        background-color: ${(props) => props.theme.resultPress};
    }
`