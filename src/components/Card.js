import { Box, Image, Text } from "@chakra-ui/react"; 
import { useNavigate } from "react-router-dom"; 
import React from 'react'; 

// Define o componente Card usando React.forwardRef para encaminhar a referência
const Card = React.forwardRef(({ digimon, bg }, ref) => {
    const navigate = useNavigate(); 

    // Função para lidar com o clique no card
    const handleClick = () => {
        navigate(`/digimon/${digimon.name}`); 
    };

    // Renderiza o componente Card
    return (
        <Box
            ref={ref} 
            borderWidth="1px" 
            borderRadius="50px" 
            overflow="hidden" 
            m="4" 
            p="6" 
            boxShadow="lg"
            maxW="sm" 
            textAlign="center" 
            onClick={handleClick} 
            cursor="pointer" 
            bg={bg} 
        >
            <Image src={digimon.img} alt={digimon.name} /> 
            <Box> 
                <Text fontWeight="bold" fontSize="24px" marginBottom="2">{digimon.name}</Text> 
                <Text fontWeight="bold">Level: {digimon.level}</Text>
            </Box>
        </Box>
    );
});

export default Card; 