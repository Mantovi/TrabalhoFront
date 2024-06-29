import React from 'react'; 
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'; 
import { z } from 'zod'; 
import { Button, Flex, Input } from '@chakra-ui/react'; 

// Define o esquema de validação com Zod
const schema = z.object({
    email: z.string().email(), 
    password: z.string().min(8), 
});

// Define o componente LoginForm
const LoginForm = ({ onSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema), 
    });

    // Função chamada ao enviar o formulário
    const onSubmitForm = (data) => {
        onSubmit(data); 
    };

    // Renderiza o componente LoginForm
    return (
        <form onSubmit={handleSubmit(onSubmitForm)}> 
            <Input {...register('email')} placeholder="Email" bg="#e0ffff" /> 
            {errors.email && <p>{errors.email.message}</p>} 

            <Input {...register('password')} type="password" placeholder="Password" mt="10px" bg="#e0ffff"/> 
            {errors.password && <p>{errors.password.message}</p>} 

            <Flex justify="center" mt="20px"> 
                <Button type="submit" bg="gray.300" _hover={{bg:"blue.300"}}>Login</Button> 
            </Flex>
            
        </form>
    );
};

export default LoginForm;
