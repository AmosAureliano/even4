import { 
    ContainerLogin,
    LeftContent,
    RightContent,
    TitleLogin,
    Input,
    Button
} from './styles';

export default function Login() {

    function handleSubmit(){}

    return(
        <ContainerLogin>
            <LeftContent>
            </LeftContent>

            <RightContent>
                <form onSubmit={handleSubmit}>
                    <TitleLogin>Entre e vá a um evento :)!</TitleLogin>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Senha"/>

                    <Button>Acessar</Button>
                </form>
            </RightContent>
            
        </ContainerLogin>
    )
}