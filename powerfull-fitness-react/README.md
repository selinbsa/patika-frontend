# Powerfull Fitness — React (Vite)

Orijinal HTML/JS şablonun tasarımını **bozmadan**, işlevselliğini **koruyarak** React’e taşınmış sürüm.


---

## 🚀 Gereksinimler
- **Node.js** 18+ (önerilen 20+)
- **npm** 9+ (veya pnpm/yarn)

---

## 🧭 Hızlı Başlangıç

# 1) Vite tabanlı React projesi oluştur
npm create vite@latest powerfull-fitness-react -- --template react
cd powerfull-fitness-react

# 2) Bu projenin dosyalarını içeri kopyala
# (özellikle src/, public/ ve index.html)

# 3) Kur ve çalıştır
npm install
npm run dev

## 📁 Klasör Yapısı
powerfull-fitness-react/
├─ index.html
├─ public/
│  └─ assets/
│     ├─ logo.png
│     ├─ hero-man.jpg
│     ├─ bmi-index.jpg
│     ├─ client1.jpg, client2.jpg
│     ├─ group.webp, solo.jpg, stret.webp, yoga.jpg
│     ├─ trainer1.jpg, trainer2.jpg, trainer3.jpg
│     └─ purchase1.jpg ... purchase4.jpg
└─ src/
   ├─ App.jsx
   ├─ styles.css
   └─ components/
      ├─ Header.jsx
      ├─ Hero.jsx
      ├─ Stats.jsx
      ├─ Classes.jsx
      ├─ BmiCalculator.jsx
      ├─ Trainers.jsx
      ├─ Reviews.jsx
      ├─ Contact.jsx
      └─ Footer.jsx
