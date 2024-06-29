import React, { useState } from 'react'; 
import { Input, Button, Flex, Center} from '@chakra-ui/react'; 

// Define o componente SearchBar
const SearchBar = ({ digimons, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const handleSearch = () => {
        
        // Filtra os digimons com base no termo de pesquisa
        const filteredDigimons = digimons.filter(digimon =>
            digimon.name.toLowerCase().includes(searchTerm.toLowerCase()) // Compara o nome do digimon com oq foi pesquisa (ignorando maiúsculas/minúsculas)
        );
        
        // Chama a função de callback para retornar os resultados da pesquisa
        onSearch(filteredDigimons);
    };

    // Função para lidar com a mudança no campo de input
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Renderiza o componente SearchBar
    return (
        <Center mt="4">
            <Flex width="50%">
                <Input
                    type="text" 
                    value={searchTerm} 
                    onChange={handleChange} 
                    placeholder="Procurar Digimon" 
                    mr="2" 
                    bg="white" 
                />
                <Button bg="blue.400" _hover={{bg: "blue.600"}} onClick={handleSearch}>Procurar</Button> 
            </Flex>
        </Center>
    );
};

export default SearchBar; 
