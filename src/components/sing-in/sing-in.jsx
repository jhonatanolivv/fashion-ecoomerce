import { useState } from "react";
import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";
import './sing-in.scss'

const defaultFormFilds = {
    email: "",
    senha: ""
}

export function SingIn() {

    const [formFilds, setFormFilds] = useState(defaultFormFilds) //inicializando status
    const { email, senha } = formFilds // utiliando os values de formFilds

    const handleChange = (event) => {
        const { name, value } = event.target // descontruindo para usar o name e seu value
        setFormFilds({ ...formFilds, [name]: value }) // atualizando meu staus 
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formFilds)
        setFormFilds(defaultFormFilds) // para resetar o formulario
    }


    return (
        <div className="sing-in">
            <h2>Você já possui conta?</h2>
            <form className="form-container" onSubmit={handleSubmit}>
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
            </form>
            <Button type="submit">
                LOGIN
            </Button>
            <Button type="button" typeButton="google">
                LOGIN COM GOOGLE
            </Button>
        </div>
    )
}