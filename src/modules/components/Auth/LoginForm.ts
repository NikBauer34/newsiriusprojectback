import { useForm } from "@mantine/form";

const LoginForm = useForm({
    initialValues: {nikname: '', password: ''},
    validateInputOnChange: true,
    validate: {
        nikname: (value) => (value.length<5 ? 'Никнейм должен состоять хотя-бы из 5 символов' : null),
        
    }
})
