import Menu from '../../components/Menu';
import { 
    ProfileContainer,
    Input,
    Button
} from './styles';

export default function Profile() {
    
    function handleSubmit() {}

    return(
        <ProfileContainer>
            <Menu />
            <p>Perfil</p>
            <form onSubmit={handleSubmit}>
                <Input placeholder="Nome" value="Usuário" type="text"/>
                <Input placeholder="Email" value="user@user.com" type="email"/>
                <Input type="password" placeholder="Senha"/>
                <Input type="password" placeholder="Confirmar senha"/>

                <Button>Atualizar</Button>
            </form>
        </ProfileContainer>
    )
}