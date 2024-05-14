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

const NavBar = () => {
  return (
    <nav>
        <img id='logo' src={Logo} alt="Logo" />
        <Menu>
          <MenuButton as={Button} rightIcon={<FaArrowDown />}>
            Menu
          </MenuButton>
          <MenuList>
            <MenuItem>Zapatilas</MenuItem>
            <MenuItem>Remeras</MenuItem>
            <MenuItem>Buzos</MenuItem>
            <MenuItem>Shorts</MenuItem>
          </MenuList>
        </Menu>
        <CartWidget />
    </nav>
  )
}

export default NavBar