import React from 'react'; 
import { Button, Heading, Box, Link, Stack } from '@chakra-ui/react';
import LoginForm from '../components/Credentials/LoginForm'; 
import { useNavigate } from 'react-router-dom';

// Define o componente Login
const Login = () => {
    const navigate = useNavigate();

    // Função de callback para manipular o envio do formulário de login
    const handleLogin = (data) => {
        console.log('Login data:', data); 
        navigate('/catalog'); 
    };

    return (
        // Componente Box do Chakra UI configurado para estilização
        <Box 
            display="flex" 
            bgImg="url('dbwbmgc-e62fe5d1-f3c6-4be3-baea-031cecfd0e4e.png')" 
            width="100%" 
            minHeight="100vh" 
            justifyContent="center" 
            alignItems="center" 
            bgPos="center" 
            bgSize="cover" 
        >
            {/* Container do formulário de login com estilos adicionais */}
            <Box p="4vh" maxWidth="400px" mx="auto" bgColor="rgba(200, 210, 255, 0.7)" borderRadius="md" >
                <Stack spacing={4}> 
                    <Heading as="h1" size="xl" textAlign="center" color="blue.700" marginBottom="10px">
                        Bem-vindo ao digimundo
                    </Heading>
                    <Heading as="h2" size="lg" textAlign="center" color="blue.700">
                        Login
                    </Heading>
                    
                    <Box
                        bg="azure" 
                        p={8} 
                        boxShadow="xl"
                        borderRadius="md"
                        borderWidth="2px" 
                        borderColor="white" 
                    >
                      
                        <LoginForm onSubmit={handleLogin} />
                        <Link mt={4} display="block" textAlign="center" color="blue.500" href="/signup">
                            <Button bg="gray.300" _hover={{ bg: "blue.400" }}>Criar uma conta</Button>
                        </Link>
                    </Box>
                    <Link fontSize="lg" display="block" textAlign="center" color="black" href="/forgot-password">
                        Esqueceu sua senha?
                    </Link>
                </Stack>
            </Box>
        </Box>
    );
};

export default Login; 
