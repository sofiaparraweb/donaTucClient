// NavBar.tsx
import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" p="4" bg="teal.500" color="white">
      <Flex align="center" mr={5}>
        {/* Logo */}
        <Text fontSize="2xl" fontWeight="bold">
          MiApp
        </Text>
      </Flex>

      <Flex align="center" justify="flex-end">
        {/* Enlaces de navegación */}
        <Link as={RouterLink} to="/login" p="2" mx="2" _hover={{ textDecoration: 'underline' }}>
          SÉ PARTE
        </Link>
        <Link as={RouterLink} to="/donations" p="2" mx="2" _hover={{ textDecoration: 'underline' }}>
          Donaciones Disponibles
        </Link>
        <Link as={RouterLink} to="/want-to-donate" p="2" mx="2" _hover={{ textDecoration: 'underline' }}>
          Quiero Donar!
        </Link>
        <Link as={RouterLink} to="/about" p="2" mx="2" _hover={{ textDecoration: 'underline' }}>
          Quiénes Somos
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;
