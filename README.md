# Quotes – Projektarbete JS2

En enkel React‑applikation där användaren kan hämta slumpmässiga citat från ett API, visa dem på en egen sida och spara favoriter i LocalStorage. Appen är byggd som ett Single Page Application (SPA) med React Router och publicerad via GitHub Pages.

---

## 🚀 Live Demo
https://angelicajonsson97-source.github.io/Projektarbete-JS2-Quotes/

---

## ▶️ Starta projektet lokalt
1. Klona projektet  
   `git clone https://github.com/angelicajonsson97-source/Projektarbete-JS2-Quotes.git`
2. Installera beroenden  
   `npm install`
3. Starta utvecklingsservern  
   `npm run dev`

---

## ✔️ Krav som uppfylls
- SPA med React
- Routing mellan flera sidor
- API‑anrop för att hämta citat
- Favoriter sparas i LocalStorage
- Komponentbaserad struktur
- Deploy via GitHub Pages
- Tydlig mappstruktur (pages/, components/, styles/)
- README med teknisk reflektion 

---

## 🧠 Tekniska val – reflektion
Jag valde en tydlig mappstruktur med *pages*, *components* och *styles* för att hålla projektet organiserat och lätt att bygga vidare på. Sidorna ligger i *pages* eftersom de representerar olika vyer i applikationen, medan återanvändbara delar som navbar ligger i *components*. Det gör koden mer modulär och lättare att underhålla.

Routing‑upplägget med React Router gör att appen fungerar som en SPA utan sidladdningar. Jag använder `BrowserRouter` med `basename` eftersom projektet ligger i en undermapp på GitHub Pages, vilket kräver att alla länkar anpassas. Detta gav mig en bättre förståelse för hur paths fungerar i olika miljöer.

Props används för att skicka citat och funktioner mellan komponenter, vilket gör dem flexibla och återanvändbara. State hanteras med `useState` och `useEffect` för att hålla logiken enkel och tydlig. Favoriter sparas i LocalStorage eftersom projektet inte har en backend och detta är en lättviktig lösning som fungerar bra för mindre appar.

Jag valde ett citat‑API som är snabbt, stabilt och enkelt att använda. Det gjorde att jag kunde fokusera mer på funktionalitet, UI och routing istället för att hantera komplexa API‑strukturer. API:et passade projektets syfte: att skapa en liten, responsiv och användarvänlig SPA.

---

## 📄 Licens
Projektet är skapat för utbildningssyfte.
