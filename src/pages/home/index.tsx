import EventHome from "../../components/EventHome";
import Menu from "../../components/Menu";
import { HomeContainer } from "./styles";

export default function Home() {

    const EVENT_DATA = [
        {
            title: 'Como aumentar a produtividade da empresa sem cansar os colaboradores',
            date: '07/08/2022',
            typeEvent: 'Empresarial'
        },
        {
            title: 'Trabalhando com IA no contexto universitário',
            date: '07/08/2022',
            typeEvent: 'Universitário'
        },
        {
            title: 'Como aumentar a eficiencia no aprendizado',
            date: '30/08/2022',
            typeEvent: 'Universitário'
        },
        {
            title: 'Quando atualizar as tecnologias do meu sistema?',
            date: '25/08/2022',
            typeEvent: 'Empresarial'
        }
    ]
    return(
        <HomeContainer>
            <Menu />
            {
                EVENT_DATA.map((item) => {
                    return(
                        <EventHome 
                            key={item.title}
                            title={item.title}
                            typeEvent={item.typeEvent}
                            date={item.date}
                        />
                    )
                })
            }
            
        </HomeContainer>
    )
}