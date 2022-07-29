import { Link } from 'react-router-dom';
import { 
    EventHomeContainer,
    GeneralInformations,
    EventTitle,
    EventInfoText,
    Button
 } from './styles';
import { saveAs } from "file-saver";

interface EventHomeProps {
    title: string;
    typeEvent: string;
    date: string
}
export default function EventHome({title, typeEvent, date}  : EventHomeProps) {
    function saveFile(){
        saveAs(
          "../../assets/ingressos.pdf",
          "ingresso.pdf"
        );
    };
    return(
        <EventHomeContainer>
            <GeneralInformations>
                <EventInfoText>{typeEvent}</EventInfoText>
                <EventTitle>{title}</EventTitle>
                <EventInfoText>{date}</EventInfoText>
            </GeneralInformations>
            
            <Button onClick={saveFile}>Baixar</Button>
        </EventHomeContainer>
    )
}