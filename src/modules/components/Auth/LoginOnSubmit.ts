import { useContext } from "react";
import { Context } from "../../../main";

interface ILogin{
    nikname: string;
    password: string;
}

const LoginOnSubmit = ({nikname, password}: ILogin) => {
    const {user} = useContext(Context)
    user.login(nikname, password)
}

export default LoginOnSubmit;