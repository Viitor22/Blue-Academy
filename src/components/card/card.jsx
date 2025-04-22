import { Titulo, Texto} from "../../Style"
import { CardContainer } from "./style"

const Card = () => {
    return(
    <CardContainer>
        <Card>
            <div></div>
            <div>
                <Titulo>
                    Você sabia ?
                </Titulo>
                <Texto>
                O New Model Army foi um exército revolucionário criado por Oliver Cromwell durante a Guerra Civil Inglesa (1642–1651). Organizado com base na meritocracia e disciplina rígida, ele substituiu as forças feudais tradicionais. Tornou-se fundamental para a vitória dos parlamentaristas contra o rei Carlos I, sendo também uma força com forte influência política e religiosa puritana.
                </Texto>
            </div>
        </Card>
    </CardContainer>
    )
}

export default Card