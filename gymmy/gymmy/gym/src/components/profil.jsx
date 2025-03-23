import React from 'react';
import styled from 'styled-components';
import pImage from '../assets/p.jpg'; // p.jpg'yi import edin

const Profil = () => {


    
  return (
    <>
    <ProfilContainer>
      <WelcomeMessage>Hoşgeldin Ebrar Kılıç</WelcomeMessage>
      <MotivationQuote>"Sağlıklı yaşam, güçlü gelecek!"</MotivationQuote>

      <ContentContainer>
        <Card>
          <CardInner>
            <CardFront>
              <UserInfoContainer>
                <UserImage src={pImage} alt="Gym" />
                <UserInfo>
                  <h3>Ebrar Kılıç</h3>
                  <p>Üye No: 12345</p>
                  <p>Sonuçlar: 70kg / 175cm</p>
                  <p>Aktivite: Haftada 4 gün</p>
                </UserInfo>
              </UserInfoContainer>
            </CardFront>
            <CardBack>
              <p>Katıldığı Sınıflar: Yoga, Pilates</p>
              <p>Hedef Tarih: 30/12/2024</p>
              <p>Son Güncelleme: 01/10/2024</p>
            </CardBack>
          </CardInner>
        </Card>
       
      </ContentContainer>
      <br/>
      <br/>
      <FormContainerWrapper>
      {/* Form Bölümü */}
   <FormContainer>
  <Form>
    <h3>Genel Bilgiler</h3>
    <FormField>
      <InfoContainer>
        <span>Tam İsim:</span>
        <Input type="text" value="Ebrar Kılıç" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Üye Numarası:</span>
        <Input type="text" value="12345" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Doğum Tarihi:</span>
        <Input type="date" value="1995-05-20" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>İletişim Bilgileri:</span>
        <Input type="text" value="+90 555 123 45 67" readOnly />
        <Input type="email" value="ebrar.kilic@example.com" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Kayıt Tarihi:</span>
        <Input type="date" value="2024-01-15" readOnly />
      </InfoContainer>
    </FormField>
  </Form>
</FormContainer>

<FormContainer>
  <Form>
    <h3>Fiziksel Bilgiler</h3>
    <FormField>
      <InfoContainer>
        <span>Ağırlık:</span>
        <Input type="text" value="70 kg" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Boy:</span>
        <Input type="text" value="1.75 m" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>BMI (Vücut Kitle İndeksi):</span>
        <Input type="text" value="22.9" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Yağ Oranı:</span>
        <Input type="text" value="%18" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Kuvvet Seviyesi:</span>
        <Input type="text" value="Orta" readOnly />
      </InfoContainer>
    </FormField>
  </Form>
</FormContainer>

<FormContainer>
  <Form>
    <h3>Üyelik Bilgileri</h3>
    <FormField>
      <InfoContainer>
        <span>Üyelik Tipi:</span>
        <Input type="text" value="Gold" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Üyelik Başlangıç Tarihi:</span>
        <Input type="date" value="2024-02-01" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Üyelik Bitiş Tarihi:</span>
        <Input type="date" value="2025-02-01" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Ödeme Durumu:</span>
        <Input type="text" value="Güncel" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Üyelik Ücreti:</span>
        <Input type="text" value="3000 TL" readOnly />
      </InfoContainer>
    </FormField>
  </Form>
</FormContainer>

<FormContainer>
  <Form>
    <h3>Antreman Bilgileri</h3>
    <FormField>
      <InfoContainer>
        <span>Antreman Programı:</span>
        <Input type="text" value="Haftada 4 Gün" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Önerilen Egzersizler:</span>
        <Input type="text" value="Ağırlık, Kardiyo" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Antreman Saati:</span>
        <Input type="text" value="Akşam 6-8" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Haftalık Kalori Yakımı:</span>
        <Input type="text" value="2500 kcal" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Hedef Ağırlık:</span>
        <Input type="text" value="65 kg" readOnly />
      </InfoContainer>
    </FormField>
  </Form>
</FormContainer>

<FormContainer>
  <Form>
    <h3>Sağlık Bilgileri</h3>
    <FormField>
      <InfoContainer>
        <span>Alerjiler:</span>
        <Input type="text" value="Yok" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Sakatlıklar:</span>
        <Input type="text" value="Sol Bilek" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Kronik Hastalıklar:</span>
        <Input type="text" value="Yok" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Kullanılan İlaçlar:</span>
        <Input type="text" value="Yok" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Düzenli Kontroller:</span>
        <Input type="text" value="6 Ayda Bir" readOnly />
      </InfoContainer>
    </FormField>
  </Form>
</FormContainer>

<FormContainer>
  <Form>
    <h3>Performans Bilgileri</h3>
    <FormField>
      <InfoContainer>
        <span>Maksimum Bench Press:</span>
        <Input type="text" value="80 kg" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Maksimum Squat:</span>
        <Input type="text" value="100 kg" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Maksimum Deadlift:</span>
        <Input type="text" value="120 kg" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Haftalık Antreman Süresi:</span>
        <Input type="text" value="10 saat" readOnly />
      </InfoContainer>
    </FormField>
    <FormField>
      <InfoContainer>
        <span>Hedef Fitness Seviyesi:</span>
        <Input type="text" value="Gelişmiş" readOnly />
      </InfoContainer>
    </FormField>
  </Form>
</FormContainer>


      </FormContainerWrapper>
   
    </ProfilContainer>
    
    </>
  );
};

// Styled Components
const ProfilContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 1350px;
  justify-content: center;
  background-color: #1e1e1e;
  color: white;
  text-align: center;
  margin-left: 100px;
  margin-top: 150px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
`;

const WelcomeMessage = styled.h1`
  margin-bottom: 20px;
`;

const MotivationQuote = styled.p`
  font-size: 1.2rem;
  margin-bottom: 40px;
  font-style: italic;
`;

const Card = styled.div`
  width: 400px; /* Kartın genişliği */
  height: 200px;
  perspective: 1000px;
  margin: 20px 20px; /* Yanındaki resimle araya boşluk bırak */
  color: black;
`;

const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.8);

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 2;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const UserImage = styled.img`
  width: 30%;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  text-align: left;
`;

const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.8);
  transform: rotateY(180deg);
  z-index: 1;
`;

const ImageContainer = styled.div`
  margin-left: 20px; /* Kartla resmi ayır */
`;

const LargeImage = styled.img`
  width: 300px; /* Resmin genişliği */
  height: auto; /* Yükseklik orantılı olarak ayarlanır */
  margin-left: 600px;
  margin-top: 0px;
`;
const FormContainerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; /* Satır dolduğunda yeni satıra geçmesini sağlar */
  justify-content: space-between;
  gap: 20px; /* Kutular arasında boşluk */
`;

const FormContainer = styled.div`
  flex: 1 1 calc(33.33% - 20px); /* Her biri 3 sütun olacak şekilde */
  max-width: calc(33.33% - 20px);
  background-color: #2e2e2e;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px; /* Alt boşluk */
`;

const Form = styled.form`
  background-color: #2e2e2e;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* Alanı eşit dağıt */
  
  
`;

const Input = styled.input`
  width: 60%; /* Alanın genişliğini belirleyin */
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #57ff20; /* Neon yeşil kenar rengi */
  background-color: #1e1e1e;
  color: white;
  &:focus {
    outline: none;
    border: 1px solid #57ff20; /* Neon yeşil kenar rengi */
  }
`;

export default Profil;
