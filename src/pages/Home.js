import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Define o componente Home
const Home = () => {
    return (
        // Componente Box do Chakra UI configurado para estilização
        <Box
            display="flex"
            flexDirection="column"
            bgImage="url('digimon_wallpaper_by_scytheaandlanarkine_db8r9vn-fullview.jpg')"
            backgroundSize="cover"
            backgroundPosition="center"
            minHeight="100vh"
            width="100%"
        >
            <Flex justify="center" alignItems="end" height="95vh" marginLeft="30px">
                <Link to="/login">
                    <Button 
                        w="400px"
                        h="60px"
                        bg="rgba(0, 0, 100, 0.6)"
                        color="white"
                        fontSize="30px"
                        _hover={{ 
                            bg: "rgba(0, 0, 100, 0.8)",
                            color: "white"
                        }} 
                    >
                        Logar no Digimundo
                    </Button>
                </Link>
            </Flex>
        </Box>
    );
}

export default Home;
