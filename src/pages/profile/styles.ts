import styled from 'styled-components';

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 15rem;

    @media(max-width: 900px) {
        padding: 3rem 2rem;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 1.5rem;
        font-weight: bold;
        text-align: center;
    }
`

export const Input = styled.input`
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid gray;
    background-color: #f5f5f5;
    min-width: 30vw;
    margin: .5rem 0;
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid gray;
    background-color: #ba01ff;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1rem;
    min-width: 100%;
    margin: .5rem 0;
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        background-color: #228dff;
    }
`