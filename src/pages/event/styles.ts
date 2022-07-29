import styled from 'styled-components';

export const EventContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5rem 15rem;

    @media(max-width: 900px) {
        padding: 1rem 2rem;
    }
`

export const Divisor = styled.hr`
    color: #000
`
export const EventTitle = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const InfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const Description = styled.p`
    background-color: #f5f5f5;
    padding: 1rem 2rem;
    border-radius: .5rem;
    box-shadow: 2px 5px 10px 1px rgba(0, 0, 0, 0.1);
`

export const Price = styled.p`
    font-size: 1.5rem;
`

export const ContainerBuy = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    p  {
        color: red;
    }
`

export const Button = styled.button`
    padding: 1rem;
    border-radius: .5rem;
    border: 1px solid gray;
    background-color: #ba01ff;
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1rem;
    width: 50%;
    margin: .5rem 0;
    cursor: pointer;
    transition: .3s;
    
    &:hover {
        background-color: #228dff;
    }
`;