import './Form.Modules.css'
import TextFiled from '../TextField'

export const Form = () => {
    return (
        <section className='form'>
            <form>
                <h2>Preenche os dados para criar o card do colaborador</h2>
                <TextFiled label="Nome" placeholder="Digite seu nome" />
                <TextFiled label="Cargo" placeholder="Digite seu cargo" />
                <TextFiled label="Imagem" placeholder="Digite o endereço da imagen" />
            </form>
        </section>
    )
}