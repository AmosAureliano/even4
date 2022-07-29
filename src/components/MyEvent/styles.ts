import styled from 'styled-components';

export const EventHomeContainer = styled.div`
    background-color: #F5F5F5;
    padding: 1rem 5rem;
    margin: 2rem 0;
    box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.2);
    border-radius:  1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    @media(max-width: 900px) {
        padding: 1rem 2rem;
        margin: 2rem 0;
        flex-direction: column;
    }
`

export const GeneralInformations = styled.div`

`

export const EventTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-right: 1rem;

    @media(max-width: 900px) {
        font-size: 1rem;
    }
`

export const EventInfoText = styled.p`
    font-size: 1rem;
    font-weight: 400;
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid gray;
    background-color: #ba01ff;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    margin: .5rem 0;
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        background-color: #228dff;
    }
`;