import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Box, Text, Spinner, Center, Flex, Button } from "@chakra-ui/react";
import Card from "../components/Card";

// Define o componente Detail
const Detail = () => {
    const { name } = useParams();
    const [digimon, setDigimon] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const getDigimon = async () => {
            try {
                const response = await axios.get(`https://digimon-api.vercel.app/api/digimon/name/${name}`);
                setDigimon(response.data[0]);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching digimon data:", error);
                setLoading(false);
            }
        };
        getDigimon();
    }, [name]);

        // Se ainda estiver carregando, exibe um spinner de carregamento
    if (loading) {
        return (
            <Center height="100vh">
                <Spinner color='blue' emptyColor="lightgray" size="xl" speed="0.5s" thickness="3px" />
            </Center>
        );
    }

        // Se não houver dados do digimon, exibe uma mensagem de erro 404
    if (!digimon) {
        return <Text textAlign="center" fontSize="40px" fontWeight="bold" mt="8">404. Digimon não encontrado</Text>;
    }

    return (
        // Renderiza os detalhes do digimon
        <Box bg="blue.100" p="1vh">
            <Flex wrap="wrap" justify="center">
                <Box p="6" textAlign="center" bg="rgba(255, 255, 255, 0.5)" borderRadius="50px">
                    <Text fontWeight="bold" fontSize="30px" marginBottom="2px">Digimon:</Text>
                    <Card digimon={digimon} bg="white"/>
                    <Link to="/catalog">
                        <Button marginTop="24px" onClick={() => navigate(-1)} bg="blue.300" _hover={{bg: "blue.500"}}>Voltar para o catálogo</Button>
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
};

export default Detail;
