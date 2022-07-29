import { Link } from 'react-router-dom';
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
                    <Input type="password" placeholder="Confirmar senha"/>

                    <Link to="/home"><Button>Acessar</Button></Link>
                    <p>Já possui conta? <b><Link to="/">Faça login</Link></b></p>
                </form>
            </RightContent>
            
        </ContainerLogin>
    )
}