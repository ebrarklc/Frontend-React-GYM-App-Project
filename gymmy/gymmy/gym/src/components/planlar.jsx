import React from "react";
import styled from "styled-components";

const SporPlanlari = () => {
  const plans = [
    {
      title: "Temel Fitness Planı",
      description:
        "Bu program, yeni başlayanlar için mükemmel bir başlangıç noktasıdır. Haftada 3 gün yapılan bu plan, temel kuvvet ve kardiyo egzersizlerini içerir.",
      content: [
        "1. Gün: Üst vücut antrenmanı (şınav, dumbbell press, sırt çekiş)",
        "2. Gün: Alt vücut antrenmanı (squat, deadlift, lunges)",
        "3. Gün: Kardiyo (30 dakika koşu veya bisiklet)"
      ],
      goal: "Kas dayanıklılığı artırmak ve genel kondisyonu geliştirmek.",
      price: "800 TL / Ay"
    },
    {
      title: "Ağırlık Artırma Planı",
      description:
        "Bu program, kas kütlesini artırmak isteyenler için tasarlanmıştır. Haftada 4 gün, temel ağırlık antrenmanlarına odaklanır.",
      content: [
        "1. Gün: Göğüs ve triceps (bench press, dumbbell flyes, dips)",
        "2. Gün: Sırt ve biceps (deadlifts, pull-ups, barbell curls)",
        "3. Gün: Bacak (squats, leg press, calf raises)",
        "4. Gün: Omuz ve karın (overhead press, lateral raises, crunches)"
      ],
      goal: "Kas kütlesini artırmak ve güç geliştirmek.",
      price: "1000 TL / Ay"
    },
    {
        title: "Yağ Yakım Programı",
        description:
          "Bu program, yağ oranını azaltmak isteyenler için mükemmeldir. Haftada 5 gün, HIIT (yüksek yoğunluklu interval antrenmanı) ve kardiyo egzersizleri içerir.",
        content: [
          "1. Gün: HIIT (sprintler, burpees, squat jumps)",
          "2. Gün: Kardiyo (45 dakika koşu veya bisiklet)",
          "3. Gün: HIIT (jumping jacks, mountain climbers, kettlebell swings)",
          "4. Gün: Kardiyo (yüzme veya ip atlama)",
          "5. Gün: Tam vücut HIIT (farklı egzersiz kombinasyonları)"
        ],
        goal: "Yağ kaybını hızlandırmak ve genel fitlik sağlamak.",
        price: "1200 TL / Ay"
      },
      
      {
        title: "Esneklik ve Mobilite Planı",
        description:
          "Bu plan, esnekliği artırmak ve yaralanma riskini azaltmak isteyenler için tasarlanmıştır. Haftada 3 gün yoga ve esneme egzersizleri içerir.",
        content: [
          "1. Gün: Yoga (25 dakika) ve derin esneme (15 dakika)",
          "2. Gün: Pilates (40 dakika) ve core egzersizleri",
          "3. Gün: Dinamik esneme (20 dakika) ve statik esneme (20 dakika)"
        ],
        goal: "Vücut esnekliğini artırmak ve genel mobiliteyi geliştirmek.",
        price: "1200 TL / Ay"
      },
      {
        title: "Yüksek Yoğunluklu Antrenman (HIIT) Planı",
        description:
          "Zamanı kısıtlı olanlar için, kısa sürede yüksek etkili antrenmanlar sunan bir programdır. Haftada 4 gün uygulanır.",
        content: [
          "1. Gün: HIIT (20 dakika süreyle sprint ve dinlenme döngüleri)",
          "2. Gün: Tam vücut egzersizleri (jump squats, push-ups, plank)",
          "3. Gün: HIIT (kettlebell ve vücut ağırlığı egzersizleri)",
          "4. Gün: Kardiyo (30 dakika koşu veya bisiklet)"
        ],
        goal: "Zaman kısıtlaması altında maksimum kalori yakmak ve dayanıklılığı artırmak.",
        price: "1500 TL / Ay"
      },
      {
        title: "Süper Set Programı",
        description:
          "Bu program, kas dayanıklılığını artırmak ve vücut şekillendirmek isteyenler için tasarlanmıştır. Haftada 4 gün süper setler içerir.",
        content: [
          "1. Gün: Göğüs ve sırt süper setleri (bench press + bent-over rows)",
          "2. Gün: Bacak süper setleri (squats + lunges)",
          "3. Gün: Omuz ve kol süper setleri (overhead press + tricep dips)",
          "4. Gün: Kardiyo (45 dakika)"
        ],
        goal: "Kas hacmini artırmak ve genel güç geliştirmek.",
        price: "2000 TL / Ay"
      }
    ];
  

  return (
    <>
    <PlanContainer>
      {plans.map((plan, index) => (
        <Plan key={index}>
          <h2>{plan.title}</h2>
          <p>{plan.description}</p>
          <h4>Antrenman İçeriği:</h4>
          <ul>
            {plan.content.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <p><strong>Hedef:</strong> {plan.goal}</p>
          <PriceButton>{plan.price}</PriceButton>
        </Plan>
      ))}
    </PlanContainer>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>
  );
};

// Styled Components
const PlanContainer = styled.div`
  display: grid;
  width: 90%;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
  text-align: center;
  margin-top: 140px;
  margin-left: 60px;
  padding: 20px;
  background-color: black;
  color: #fff;
`;

const Plan = styled.div`
  background-color: #222;
  padding: 20px;
  box-shadow: 0 0 10px rgba(57, 255, 20, 0.6);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(57, 255, 20, 0.8);
  }
`;

const PriceButton = styled.button`
  background-color: rgba(57, 255, 20, 0.8);
  color: black;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(57, 255, 20, 1);
  }
`;

export default SporPlanlari;
