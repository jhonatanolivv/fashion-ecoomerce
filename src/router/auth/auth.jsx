import './auth.scss'
import { SingIn } from "../../components/sing-in/sing-in";
import { SingUp } from "../../components/sing-up/sing-up";


export function Auth() {
    return (
        <div className="contianer-auth">
            <SingIn />
            <SingUp />
        </div>
    )
}