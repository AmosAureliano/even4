import Menu from "../../components/Menu";
import { 
    EventContainer,
    EventTitle,
    Divisor,
    InfoContainer,
    Description,
    Price,
    ContainerBuy,
    Button
} from './styles';

export default function Event() {
    return(
        <EventContainer>
            <Menu />
            <EventTitle>Como aumentar a produtividade da empresa sem cansar os colaboradores</EventTitle>
            <Divisor/>
            
            <InfoContainer>
                <p>Empresarial</p>
                <p>07/08/2022</p>
            </InfoContainer>

            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Description>

            <Price><b>Valor:</b> R$ 150,00</Price>

            <ContainerBuy>
                <p>Duas vagas disponíveis</p>
                <Button>Comprar</Button>
            </ContainerBuy>
        </EventContainer>
    )
}