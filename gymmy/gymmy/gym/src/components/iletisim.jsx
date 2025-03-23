import React from 'react';
import styled from 'styled-components';

// Ana Container bileşeni
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Ortaya hizala
  padding: 20px;
  margin-left: 380px;
`;

// TextContainer bileşeni
const TextContainer = styled.div`
  padding: 20px;
  background-color: black;
  
  border-radius: 5px;
  text-align: center; // Metni ortalar

  h3 {
   
    font-size: 2em; // Daha büyük başlık
    margin-bottom: 15px;
 
  }

  p {
    color: #fff; // Yazı rengi beyaz
    text-shadow: 0 0 5px rgba(57, 255, 20, 0.6); // Neon gölgelik
  }
`;

// İletişim bilgileri için stil
const InfoContainer = styled.div`
  display: flex; // Yan yana yerleştir
  justify-content: space-around; // Boşlukları eşit dağıt
  margin-top: 20px;
  color: #fff;
  text-align: center;
  width: 150%;

  .info-box {
    background-color: black; // Kutuların arka plan rengi
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(57, 255, 20, 0.8); // Neon gölgelik
    flex: 1; // Eşit genişlikte yer kaplar
    margin: 0 20px; // Aralarındaki boşluk
    transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.05); /* Üzerine gelindiğinde büyüt */
  box-shadow: 0 0 20px rgba(57, 255, 20, 2); /* Daha belirgin kutu gölgesi */
}
  }

  p {
    margin: 5px 0;
  }
`;

// Sosyal medya ikonları için stil
const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;

  a {
    color: #39ff14;
    font-size: 1.5em;
    text-decoration: none;

    &:hover {
      color: #57ff4e; // Hover efekti için renk
    }
  }
`;

// İletişim bileşeni
function Iletisim() {
  return (
    <Container>
      <TextContainer>
        <h3>Bize Ulaşabilirsiniz</h3>
        <p>Spor salonumuz hakkında bilgi almak ve bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilirsiniz:</p>
      </TextContainer>

      {/* İletişim Bilgileri */}
      <InfoContainer>
        <div className="info-box">
          <p><strong>Telefon:</strong></p>
          <p>(123) 456-7890</p>
        </div>
        <div className="info-box">
          <p><strong>Adres:</strong></p>
          <p>123 Spor Cad. No: 45, İstanbul</p>
        </div>
        <div className="info-box">
          <p><strong>Email:</strong></p>
          <p>gymmy@yourgym.com</p>
        </div>
      </InfoContainer>
    </Container>
  );
}

export default Iletisim;
