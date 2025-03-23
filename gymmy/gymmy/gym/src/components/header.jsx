import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo src={logo} alt="Gym Logo" />
        <GymName>GYMMY</GymName>
      </LogoContainer>
      <NavMenu>
        <NavItem to="/" active={location.pathname === '/'}>Anasayfa</NavItem>
        <NavItem to="/hakkimizda" active={location.pathname === '/hakkimizda'}>Hakkımızda</NavItem>
        <NavItem to="/planlar" active={location.pathname === '/planlar'}>Spor Planları</NavItem>
        <NavItem to="/hoca" active={location.pathname === '/hoca'}>Eğitmenler</NavItem>
        <NavItem to="/iletisim" active={location.pathname === '/iletisim'}>İletişim</NavItem>
      </NavMenu>
      <AuthButtons>
        <AuthButtonLogin to="/login">ÜYE GİRİŞİ</AuthButtonLogin>
        <AuthButton to="/register">BİZE KATIL</AuthButton>
      </AuthButtons>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.header`
 background: rgba(0, 0, 0, 0.5); /* Arka planda yarı saydam siyah */
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  width: 98%;
  position: fixed;
  top: 0;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.img`
    width: 90px;
  height: 90px;
  margin-right: 10px;
  border-radius: 50px;
  box-shadow: 0 1px 10px rgba(0, 255, 0, 0.9);
`;

const GymName = styled.h1`
  font-size: 2rem;
  color: #fff;
  font-weight: bold;
  
`;

const NavMenu = styled.nav`
  display: flex;
  gap: 60px;
`;

const NavItem = styled(Link)`
  color: ${({ active }) => (active ? '#39ff14' : '#fff')};
  text-decoration: none;
  font-size: 1.1rem;
  position: relative;

  &:hover {
    color: #39ff14;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background-color: #39ff14;
    left: 0;
    bottom: -5px;
    transition: width 0.3s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const AuthButtonLogin = styled(Link)`
  padding: 5px 10px;
  background-color: transparent;
  color: #fff;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: #39ff14;
  }
`;

const AuthButton = styled(Link)`
  padding: 5px 10px;
  background-color: #39ff14;
  color: #000;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #32e30f;
  }
`;
