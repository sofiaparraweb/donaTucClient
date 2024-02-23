import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar: React.FC = () => {
  return (
    <Flex as="nav" className={styles.navbar} align="center" justify="space-between">
      <Flex align="center" mr={5}>
        {/* Logo */}
        <Text className={styles.logo} fontSize="2xl" fontWeight="bold">
          DonaTuc
        </Text>
      </Flex>

      <Flex align="center" justify="flex-end">
        {/* Enlaces de navegación */}
        <Link as={RouterLink} to="/login" p="2" mx="2" className={styles.navbarLink} _hover={{ textDecoration: 'underline' }}>
          SÉ PARTE
        </Link>
        <Link as={RouterLink} to="/donations" p="2" mx="2" className={styles.navbarLink} _hover={{ textDecoration: 'underline' }}>
          Donaciones Disponibles
        </Link>
        <Link as={RouterLink} to="/want-to-donate" p="2" mx="2" className={styles.navbarLink} _hover={{ textDecoration: 'underline' }}>
          Quiero Donar!
        </Link>
        <Link as={RouterLink} to="/about" p="2" mx="2" className={styles.navbarLink} _hover={{ textDecoration: 'underline' }}>
          Quiénes Somos
        </Link>
      </Flex>
    </Flex>
  );
};

export default NavBar;