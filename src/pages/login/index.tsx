import { Link } from 'react-router-dom';
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
                    <Link to="/home"><Button>Acessar</Button></Link>
                    <p>Ainda não possui conta? <b><Link to="/register">Cadastre-se</Link></b></p>
                </form>
            </RightContent>
            
        </ContainerLogin>
    )
}