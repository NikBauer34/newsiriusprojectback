import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import React, { FC } from "react";
import LoginForm from "../../modules/components/Auth/LoginForm";
import { LoginOnSubmit } from "../../modules/components/index";

const Login: FC = () => {
    return (
        <Box maw={340} mx="auto">
            <form onSubmit={LoginForm.onSubmit((value) => LoginOnSubmit(value))}>
                <TextInput label='Ник' placeholder="Введите здесь..." {...LoginForm.getInputProps('nikname')}></TextInput>
                <PasswordInput label='Пароль' placeholder="Введите здесь..." {...LoginForm.getInputProps('password')}></PasswordInput>
                <Button type="submit" mt='sm'>
                    Подтвердить
                </Button>
            </form>
        </Box>
    );
};

export default Login;