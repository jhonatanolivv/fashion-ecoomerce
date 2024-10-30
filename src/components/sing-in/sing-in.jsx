import { Button } from "../button/button";
import { FormInput } from "../form-input/form-input";



export function SingIn() {
    return (
        <div>
            <h2>Você já possui conta?</h2>
            <form action="">
                <FormInput
                label="E-mail"
                type="email"
                requiried
                name="email"
                placeholder="Digite seu e-mail"
                autocomplete="off"
                />
                <FormInput
                label="Senha"
                type="password"
                requiried
                name="senha"
                placeholder="Digite seu senha"
                />
            </form>
            <Button type="submit">
                Login
            </Button>
            <Button type="button" typeButton="google">
                Login con Google
            </Button>
        </div>
    )
}