import React, { useState, useEffect, useRef } from 'react'; 
import axios from "axios"
import { Box, Flex } from '@chakra-ui/react';
import Pagination from '../components/Pagination'; 
import Card from "../components/Card"; 
import SearchBar from "../components/SearchBar"; 
import { useLocation, useNavigate } from "react-router-dom"; 

// Define o componente Catalog
const Catalog = () => {
    const [digimons, setDigimons] = useState([]); 
    const [filteredDigimons, setFilteredDigimons] = useState([]); 
    const [currentPage, setCurrentPage] = useState(1); 
    const digimonsPerPage = 15; 
    const firstCardRef = useRef(); 
    const navigate = useNavigate(); 
    const location = useLocation(); 

    // Carrega os digimons da API ao montar o componente
    useEffect(() => {
        const getDigimons = async () => {
            try {
                const response = await axios.get("https://digimon-api.vercel.app/api/digimon");
                setDigimons(response.data); 
            } catch (error) {
                console.log(error); 
            }
        };
        getDigimons(); 
    }, []); 

    // Atualiza a página atual com base na query string ao mudar a localização
    useEffect(() => {
        const pageNumber = parseInt(new URLSearchParams(location.search).get("page"), 10) || 1;
        setCurrentPage(pageNumber); 
    }, [location.search]); 

    // Foca no primeiro card quando a página muda
    useEffect(() => {
        if (firstCardRef.current) {
            firstCardRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentPage]); 

    // Atualiza a lista de digimons filtrados com base na pesquisa
    const handleSearch = (filteredResults) => {
        setFilteredDigimons(filteredResults); 
    };

    // Função para mudar a página
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber); 
        navigate(`?page=${pageNumber}`); // Navega para a página correspondente na query string
        if (firstCardRef.current) {
            firstCardRef.current.scrollIntoView({ behavior: 'smooth', block: "start" });
        }
    };

    // Renderiza o componente Catalog
    return (
        <Box bg="blue.100" p="4"> 
            <SearchBar digimons={digimons} onSearch={handleSearch} /> 

            <Flex wrap="wrap" justify="center"> 
                {(filteredDigimons.length > 0 ? filteredDigimons : digimons) 
                    .slice((currentPage - 1) * digimonsPerPage, currentPage * digimonsPerPage) 
                    .map((digimon, index) => (
                        <Card
                            key={index} 
                            digimon={digimon} 
                            ref={index === 0 ? firstCardRef : null} 
                            bg="white" 
                        />
                    ))}
            </Flex>

            {/* Componente de paginação */}
            <Pagination
                totalItems={filteredDigimons.length > 0 ? filteredDigimons.length : digimons.length}
                itemsPerPage={digimonsPerPage} 
                currentPage={currentPage} 
                paginate={paginate} 
            />
        </Box>
    );
};

export default Catalog;