import { 
    ContainerLogin,
    LeftContent,
    RightContent,
    TitleLogin,
    Input,
    Button
} from './styles';

export default function Register() {

    function handleCreateUser(){}

    return(
        <ContainerLogin>
            <LeftContent>
            </LeftContent>

            <RightContent>
                <form onSubmit={handleCreateUser}>
                    <TitleLogin>Tenha acesso rápido aos melhores eventos :)!</TitleLogin>
                    <Input type="email" placeholder="Email"/>
                    <Input type="password" placeholder="Senha"/>

                    <Button>Acessar</Button>
                </form>
            </RightContent>
            
        </ContainerLogin>
    )
}