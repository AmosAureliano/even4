import MyEvent from "../../components/MyEvent";
import Menu from "../../components/Menu";
import { MyEventContainer } from "./styles";

export default function MyEvents() {

    const EVENT_DATA = [
        {
            title: 'Como aumentar a produtividade da empresa',
            date: '07/08/2022',
            typeEvent: 'Empresarial'
        },
        {
            title: 'Trabalhando com IA no contexto universitário',
            date: '07/08/2022',
            typeEvent: 'Universitário'
        },
       
    ]
    return(
        <MyEventContainer>
            <Menu />
            {
                EVENT_DATA.map((item) => {
                    return(
                        <MyEvent
                            key={item.title}
                            title={item.title}
                            typeEvent={item.typeEvent}
                            date={item.date}
                        />
                    )
                })
            }
            
        </MyEventContainer>
    )
}