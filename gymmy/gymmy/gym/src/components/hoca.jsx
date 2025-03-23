import React from 'react';
import styled from 'styled-components';

// Resimlerinizi içe aktarın
import pilatesImage from '../assets/pilates.jpg';
import yogaImage from '../assets/yogaaa.jpg';
import fitnessImage from '../assets/fitness.jpg';
import kickBoxImage from '../assets/kickk.jpg';

// TextContainer bileşeni
const TextContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #222;
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.8);
  border-radius: 5px;
  margin-top: 130px;
  margin-left: 320px;
  color: #fff; // Tüm yazı renkleri için
  max-width: 850px; // Div genişliğini küçültmek için maksimum genişlik ayarlandı
  transition: transform 0.3s ease, box-shadow 0.3s ease;

&:hover {
  transform: scale(1.05); /* Üzerine gelindiğinde büyüt */
  box-shadow: 0 0 20px rgba(57, 255, 20, 1); /* Daha belirgin kutu gölgesi */
}

  img {
    width: 500px; // Resim boyutu küçültüldü
    height:500px; // Resim boyutu küçültüldü
    object-fit: cover;
    margin-right: 20px; // Resim ile metin arasında boşluk
  }

  h2 {
    color: #39ff14;
    font-size: 2em;
    margin-bottom: 10px;
  }
`;

// Hoca bileşeni
function Hoca({ name, age, experience, specialty, education, description, motto, image }) {
  return (
    <TextContainer>
      <img src={image} alt={name} />
      <div>
        <h2 style={{textAlign:'center'}}>{name}</h2>
        <p>Yaş: {age}</p>
        <p>Tecrübe: {experience}</p>
        <p>Uzmanlık Alanı: {specialty}</p>
        <p>Eğitim: {education}</p>
        <p>{description}</p>
        <p><strong>Motto: </strong>{motto}</p>
      </div>
    </TextContainer>
  );
}

// Antrenörlerin listeleneceği ana bileşen
function HocaListesi() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Pilates Hoca */}
      <Hoca 
        name="Elif Yılmaz"
        age={32}
        experience="8 yıl"
        specialty="Reformer Pilates, Mat Pilates, Hamile Pilatesi"
        education="Spor Bilimleri Fakültesi mezunu, uluslararası pilates sertifikaları"
        description="Elif, spor ve sağlıklı yaşam konusunda tutkulu bir pilates eğitmeni. Yılların deneyimiyle, farklı seviyelerdeki öğrencilere kişiye özel programlar sunarak, esneklik ve güçlenme üzerine yoğunlaşıyor. Hamile pilatesi üzerine de eğitimler veren Elif, her yaştan bireye uygun pilates programları oluşturuyor."
        motto="Hareket özgürlüktür, vücudunuza iyi bakın."
        image={pilatesImage}
      />
      
      {/* Yoga Hoca */}
      <Hoca 
        name="Ayşe Kara"
        age={28}
        experience="6 yıl"
        specialty="Hatha Yoga, Vinyasa, Meditasyon"
        education="Yoga Alliance sertifikalı, meditasyon ve nefes teknikleri üzerine özel eğitimler"
        description="Ayşe, yoga ile zihinsel ve fiziksel dengeyi sağlamaya inanan bir yoga eğitmeni. Öğrencilerinin ihtiyaçlarına göre kişiselleştirilmiş yoga seansları sunar ve meditasyonun günlük yaşamın bir parçası haline gelmesine yardımcı olur. Yoga yolculuğuna daha huzurlu ve sağlıklı bir hayat arayanlara rehberlik ediyor."
        motto="Zihin durulduğunda, beden huzur bulur."
        image={yogaImage}
      />
      
      {/* Fitness Hoca */}
      <Hoca 
        name="Mehmet Demir"
        age={35}
        experience="12 yıl"
        specialty="Fonksiyonel Antrenman, Kilo Verme, Vücut Geliştirme"
        education="Spor Akademisi mezunu, uluslararası fitness sertifikaları"
        description="Mehmet, vücut geliştirme ve güç antrenmanlarında uzman bir fitness eğitmenidir. Kilo verme, kas kütlesi artırma ve genel kondisyon geliştirme konusunda kişiye özel antrenman programları hazırlayarak, öğrencilerinin hedeflerine ulaşmalarına yardımcı olur. Egzersizleriyle enerji dolu, motivasyonu yüksek bir atmosfer sağlar."
        motto="Her gün bir adım daha güçlü."
        image={fitnessImage}
      />
      
      {/* Kick Boks Hoca */}
      <Hoca 
        name="Ali Çelik"
        age={29}
        experience="7 yıl"
        specialty="Kick Boks, Savunma Taktikleri, Kardiyo Antrenmanı"
        education="Milli takım sporcusu, uluslararası kick boks turnuvalarında dereceler"
        description="Ali, hem sporcu hem de eğitmen olarak kick boks deneyimini paylaşan bir uzman. Öğrencilerine savunma teknikleri öğretirken, kardiyo ve dayanıklılığı artırıcı antrenmanlarla fit kalmalarını sağlıyor. Hem profesyonel sporculara hem de yeni başlayanlara yönelik dersler veriyor."
        motto="Güç, hız ve teknikle her engeli aş."
        image={kickBoxImage}
      />
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default HocaListesi;
