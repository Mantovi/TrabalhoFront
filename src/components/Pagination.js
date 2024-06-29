import React from 'react';
import { Button, Flex } from '@chakra-ui/react';

const Pagination = ({ totalItems, itemsPerPage, currentPage, paginate }) => { 
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) { //calcula e adiciona o numero final de paginas dividindo os totalItens pelo itensPerpage, depois arredonda pra cima usando o math.ceil
        pageNumbers.push(i);
    }

    return (
        <Flex justify="center" mt="6">
            {pageNumbers.map(number => (
                <Button
                    key={number}
                    onClick={() => paginate(number)}
                    m="2"
                    colorScheme={currentPage === number ? 'blue' : 'gray'}>   {/**/}
                    {number}
                </Button>
            ))}
        </Flex>
    );
};

export default Pagination;
