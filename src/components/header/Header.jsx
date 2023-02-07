import React, { useContext } from 'react'
import LinkItem from '../linkItem/LinkItem'
import { HeaderContainer, Logo, Navbar  } from './HeaderStyles'
import { useNavigate } from 'react-router-dom'
import BarsMenu from '../barsMenu/BarsMenu'
import { MenuContext } from '../context/Context'

const Header = () => {

const navigate = useNavigate()

const ctx = useContext(MenuContext)
  return (
    <HeaderContainer>
      <Logo onClick={() => navigate('/')}>
        <img src="https://d26lpennugtm8s.cloudfront.net/stores/026/096/rte/RIC%20AND%20MORTY5.png"  alt="Logo Rick And Morty" />
      </Logo>

            <Navbar isOpen= {ctx.isMenuOpen}>

              <LinkItem to='/'>Home</LinkItem>
              <LinkItem to='/personajes'>Personajes</LinkItem>

            </Navbar>
            <BarsMenu />

    </HeaderContainer>
  )
}

export default Header