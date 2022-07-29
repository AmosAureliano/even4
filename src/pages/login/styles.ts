import styled from 'styled-components';


export const ContainerLogin = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    

    @media(max-width: 900px) {
        flex-direction: column;
    }
`

export const LeftContent = styled.div`
    background-image: url('https://pt-br.learn.canva.com/wp-content/uploads/sites/9/2020/01/evento-corporativo-1.jpg');
    width: 50vw;
    height: 100vh;
    box-shadow: inner 3px 4px 5px rgba(0, 0, 0, 0.5);
    
    @media(max-width: 900px) {
        width: 100vw;
        height: 50vh;
    }
`

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;

    form { 
        display: flex;
        flex-direction: column;
    }

    @media(max-width: 900px) {
        width: 100vw;
        height: 50vh;
    }
`


export const TitleLogin = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
`;

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