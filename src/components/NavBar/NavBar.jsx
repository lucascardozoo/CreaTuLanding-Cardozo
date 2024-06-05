import React from 'react'
import Logo from './assets/logo-negro.png'
import CartWidget from '../CartWidget/CartWidget'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'
import { FaArrowDown } from "react-icons/fa";
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>
        <img id='logo' src={Logo} alt="Logo" />
      </Link>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaArrowDown />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link to='/categorias/Zapatilas'>Zapatilas</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/categorias/Remeras'>Remeras</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/categorias/Buzos'>Buzos</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/categorias/Shorts'>Shorts</Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </nav>
  )
}

export default NavBar