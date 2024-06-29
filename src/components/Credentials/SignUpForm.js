import React from 'react'; 
import { useForm } from 'react-hook-form'; 
import { zodResolver } from '@hookform/resolvers/zod'; 
import { z } from 'zod';
import { Button, Flex, Input } from '@chakra-ui/react';

// Define o esquema de validação com Zod
const schema = z.object({
    username: z.string().min(1), 
    email: z.string().email(), 
    password: z.string().min(8), 
    confirmPassword: z.string().min(8), 
}).refine(data => data.password === data.confirmPassword, { 
    message: "Senha inválida", 
    path: ['confirmPassword']
});

// Define o componente SignUpForm
const SignUpForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema), 
    });

    // Função chamada ao enviar o formulário
    const onSubmitForm = (data) => {
        onSubmit(data); 
    };

    // Renderiza o componente SignUpForm
    return (
        <form onSubmit={handleSubmit(onSubmitForm)}> 
            <Input {...register('username')} placeholder="Username" bg="#e0ffff"/>
            {errors.username && <p>{errors.username.message}</p>} 

            <Input {...register('email')} placeholder="Email" mt="10px" bg="#e0ffff"/> 
            {errors.email && <p>{errors.email.message}</p>} 

            <Input {...register('password')} type="password" placeholder="Password" mt="10px" bg="#e0ffff"/> 
            {errors.password && <p>{errors.password.message}</p>} 
            <Input {...register('confirmPassword')} type="password" placeholder="Confirm Password" mt="10px" bg="#e0ffff"/> 
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>} 

            <Flex justify="center" mt="20px">
                <Button type="submit" bg="gray.300" _hover={{bg:"blue.300"}}>Sign Up</Button> 
            </Flex>
        </form>
    );
};

export default SignUpForm; 
