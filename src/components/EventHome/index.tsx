import { Link } from 'react-router-dom';
import { 
    EventHomeContainer,
    GeneralInformations,
    EventTitle,
    EventInfoText,
    Button
 } from './styles';


interface EventHomeProps {
    title: string;
    typeEvent: string;
    date: string
}
export default function EventHome({title, typeEvent, date}  : EventHomeProps) {
    return(
        <EventHomeContainer>
            <GeneralInformations>
                <EventInfoText>{typeEvent}</EventInfoText>
                <EventTitle>{title}</EventTitle>
                <EventInfoText>{date}</EventInfoText>
            </GeneralInformations>
            
            <Link to="/event"><Button>Comprar ingresso</Button></Link>
        </EventHomeContainer>
    )
}