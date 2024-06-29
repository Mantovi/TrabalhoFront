import React from 'react'; 
import SignUpForm from '../components/Credentials/SignUpForm'; 
import { useNavigate } from 'react-router-dom'; 
import { Box, Heading, Stack } from '@chakra-ui/react'; 

// Define o componente SignUpPage
const SignUpPage = () => {
    
    const navigate = useNavigate(); 

    // Função de callback para manipular o envio do formulário de inscrição
    const handleSignUp = (data) => {
        console.log('Sign Up data:', data); 

        navigate("/login"); 
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
            {/* Container do formulário de inscrição com estilos adicionais */}
            <Box p="4vh" maxWidth="400px" mx="auto" bg="rgba(200, 210, 255, 0.7)" borderRadius="md">
                <Stack spacing={4}> 
                    <Heading as="h2" size="xl" textAlign="center" color="blue.600">
                        Sign Up
                    </Heading>

                    {/* Container do formulário de inscrição */}
                    <Box
                        bg="azure"
                        p={8} 
                        boxShadow="xl" 
                        borderRadius="md" 
                        borderWidth="2px" 
                        borderColor="white" 
                    >
                        
                        <SignUpForm onSubmit={handleSignUp} />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default SignUpPage; 
