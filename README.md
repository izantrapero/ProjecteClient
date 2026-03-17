# ProjecteClient

## Fet per Izan Trapero i David Sánchez

## Descripció
Aquest projecte és una aplicació **full-stack** desenvolupada amb **MongoDB, Express, React i Node.js (MERN)**. L’objectiu del projecte ha estat construir una aplicació completa seguint un procés progressiu: disseny del model de dades, backend funcional i frontend amb React + TypeScript, amb especial atenció a la modularitat i les bones pràctiques.
En el nostre cas hem fet un "builder" de mario kart on pots crear, editar i eliminar personatges i vehicles amb les seves estadistiques.

## Fases del projecte

### Fase 1 — Disseny
- **Temàtica escollida:** [Mario Kart]
- **Model de dades definit:**
  - **Camps:**
    - `nom` → string, requerid
    - `tipus` → string, enum, requerid
    - `velocitat` → number, requerid
    - `acceleracio` → number, requerid
    - `pes` → number, requerid
    - `monedas` → number, requerid
    - `miniturbo` → number, requerid
    - `maneig` → number, requerid

  - **Justificació i validacions:**
    - Els camps nom son obligatoris
    - Els camps velocitat no poden ser negatius i son obligatoris
    - Els camps acceleracio no poden ser negatius i son obligatoris
    - Els camps pes no poden ser negatius i son obligatoris
    - Els camps acceleracio no poden ser negatius i son obligatoris
    - Els camps acceleracio no poden ser negatius i son obligatoris
    - Els camps acceleracio no poden ser negatius i son obligatoris

### Fase 2 — Backend funcional
- **Tecnologies:** Node.js, Express, MongoDB, Mongoose
- **Funcionalitats implementades:**
  - CRUD complet per a l’entitat principal.
  - Validacions de camps amb **Mongoose**.
- **Estructura:**
- **Backend:**
  - `models/` → definició dels models Mongoose
  - `routes/` → definició dels endpoints REST
  - `controllers/` → lògica dels endpoints
  - `middlewares/` → gestió d’errors i validacions addicionals

### Fase 3 — Frontend React + TypeScript
- **Tecnologies:** React, TypeScript, CSS
- **Components implementats:**
  - **Llista d’elements:** mostra tots els elements amb opcions d’edició i esborrat.
  - **Formulari de creació:** afegeix nous elements amb validacions frontend.
  - **Formulari d’edició:** permet modificar elements existents.
  - **Component detall:** mostra la informació completa d’un element.
  - **Components reutilitzables:** Button, Card, Badge, Alert, etc.
- **Validacions i UX:**
  - Validació abans d’enviar formularis.
  - Missatges d’error clars i consistents.
  - Experiència d’usuari millorada amb estils coherents i modulars.
- **Estructura de carpetes:**
  - `assets` → destinada a recursos estàtics com imatges, icones, fonts i fitxers CSS o SCSS globals.
  - `components/` → components reutilitzables i específics
  - `pages/` → pàgines principals de l’aplicació
  - `services/` → gestió de crides a l’API
  - `hooks/` → hooks personalitzats (si aplica)
  - `types/` → definició de tipus TypeScript

## Contribució del grup
- Tots els membres han participat en:
  - Definició del model de dades
  - Implementació d’almenys un endpoint del backend
  - Creació d’almenys un component React
- Responsabilitats principals:
  - David Sánchez → Backend principal
  - Izan Trapero → Frontend principal i UX
  - Tots han col·laborat en revisió i refactorització

## Execució del projecte

### Backend
1. Instal·lar dependències:
   ```bash
   npm install

2. Configurar variables d’entorn (MongoDB URI, port, etc.)
3. Executar servidor:

```bash
node index.js
```

### Frontend

1. Instal·lar dependències:

```bash
npm install
```

2. Executar aplicació:

```bash
npm run dev
```
