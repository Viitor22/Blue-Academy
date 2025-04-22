import { Subtitulo, SubTexto } from "./style"

const Subheadline = () => {
    return(
        <>
        <Subtitulo>
            Sua aprovação no ENEM começa aqui
        </Subtitulo>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <SubTexto>
                Assessoria completa para o ENEM com plano de estudos, mentoria individual e estratégias que realmente funcionam. A MELHOR PREPARAÇÃO para o enem na palma da sua mão
            </SubTexto>
        </div>
        </>
    )
}

export default Subheadline