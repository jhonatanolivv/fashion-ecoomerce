import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import './sing-up.scss'

const defaultFormFilds = {
    nome: "",
    email: "",
    senha: "",
    confirmeSenha: ""
}

export function SingUp() {

    const [formFilds, setFormFilds] = useState(defaultFormFilds)
    const { nome, email, senha, confirmeSenha} = formFilds

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormFilds( {...formFilds, [name]: value} )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (senha !== confirmeSenha) {
            alert("Senhas não são iguais!")
            return
        }

        setFormFilds(defaultFormFilds)
        console.log(formFilds)
    }

    return (
        <div className="sing-up">
            <h2>Não possui conta?</h2>
            <form className="form-container" onSubmit={handleSubmit}>
                <FormInput
                label="Nome"
                type="text"
                required
                name="nome"
                placeholder="Digite seu nome"
                autoComplete="off"
                onChange={handleChange}
                value={nome}
                />
                <FormInput
                label="E-mail"
                type="email"
                required
                name="email"
                placeholder="Digite seu e-mail"
                autoComplete="off"
                onChange={handleChange}
                value={email}


                />
                <FormInput
                label="Senha"
                type="password"
                required
                name="senha"
                placeholder="Digite seu senha"
                onChange={handleChange}
                value={senha}
                />
                <FormInput
                label="Confirme sua senha"
                type="password"
                required
                name="confirmeSenha"
                placeholder="Digite sua senha novamente"
                onChange={handleChange}
                value={confirmeSenha}
                />
            </form>
            <Button type="submit" onClick={handleSubmit}>
                CRIAR CONTA
            </Button>
        </div>
    )
}