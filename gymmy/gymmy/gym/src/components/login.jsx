import React from "react";
import styled from "styled-components";
import loginImage from "../assets/login.jpg";

const Login = () => {
  return (
    <>
    <LoginContainer>
      <ImageSection>
        <LoginImage src={loginImage} alt="Login Background" />
      </ImageSection>
      <FormSection>
        <LoginForm>
          <FormTitle>Üye Girişi</FormTitle>
          <FormInput type="text" placeholder="Ad Soyad" />
          <FormInput type="email" placeholder="E-posta Adresi" />
          <FormInput type="password" placeholder="Şifre" />
          <LoginButton>Giriş Yap</LoginButton>
        </LoginForm>
      </FormSection>
    </LoginContainer>
    <br/>
    </>
  );
};

export default Login;

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  height: calc(100vh - 60px); /* Adjusting for header height */
  align-items: center;
  margin-left: 50px; /* Shift the entire container slightly to the right */
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginImage = styled.img`
  width: 65%;
  height: auto;
  object-fit: cover;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const LoginForm = styled.div`
  width: 80%;
  max-width: 400px;
  padding: 40px;
  margin-left: 120px; /* Shift the form slightly to the right */
  border: 2px solid #39ff14;
  border-radius: 8px;
  box-shadow: 0 0 20px #39ff14;
  background-color: #1e1e1e;
  text-align: center;
`;

const FormTitle = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: white;
`;

const LoginButton = styled.button`
  width: 30%;
  padding: 10px;
  background-color: #39ff14;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  color: black;
  font-weight: bold;
  
  &:hover {
    background-color: #32e30f;
  }
`;
