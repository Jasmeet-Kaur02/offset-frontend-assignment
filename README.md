# Carbon Credit Dashboard

A simple React + Tailwind CSS dashboard to view and manage carbon credits.

# Features

- **Dashboard View*** – Displays all carbon credits in card format with status badges.
- **Search** – Search by Project Name or Vintage Year.
- **Responsive Layout** – Works seamlessly on desktop, tablet, and mobile.
- **Download Certificate** – Generate a PDF certificate with:
  - Offset company name
  - Project details
  - UNIC ID
  - Vintage year
  - Retirement date
  - Certificate ID (Year + UNIC ID)
  - Timestamp of generation

## Design Decisions

#### How did you decide what to show on the main page vs details?

###### Main page -
Show only relevant information that users need at a glance - Project Name, UNIC Id, Status, Vintage. 
Added a search to quikly find a credits by vintage year and name and download button on each card to give user instant access to the certificate.

###### Details Page - 
Add in-depth information about credit. This separation keeps the dashboard lightweight while providing full details when required. 

#### What design choices did you make to keep it clean?
- Minimalist layout with plenty of whitespace for readability.
- Used card components to present credits in a structured and scannable way.
- Consistent typography and soft color palette to keep the focus on key data.
- Search input placed at the top for quick access.

#### If the system has 10,000 credits how would you keep the dashboard fast?
To keep dashboard fast: 
I will use pagination or infinite scrolling to load credits in chunks rather than all at once. 
I will implement debounce search to avoid unnecessary API calls while typing and consider server-side search functionality.


## Setup Instructions 

#### Clone the repository
```
git clone https://github.com/Jasmeet-Kaur02/offset-frontend-assignment.git
cd offset-frontend-assigment
```

#### Install dependencies
```
npm install
```

#### Start development server
```
npm run dev
```

#### Open the app in your browser:
```
http://localhost:3000
```


## Folder Structure
```
offset-frontend-assignment/
│
├─ public/
│   └─ certificate.html
│
├─ src/
│   ├─ assets/
│   │   ├─ data/
│   │   │   └─ credits.json
│   │   └─ fonts/
│   │
│   ├─ atoms/
│   │   ├─ SearchInput.jsx
│   │   └─ ProfileMenu.jsx
│   │
│   ├─ organisms/
│   │   ├─ CarbonCreditCard.jsx
│   │   ├─ Header.jsx
│   │   └─ Sidebar.jsx
│   │
│   ├─ pages/
│   │   └─ dashboard/
│   │       └─ index.jsx
│   │
│   ├─ utils/
│   │   └─ downloadCertificate.js
│   
├─ App.jsx
├─ index.css
└─ package.json

```


## Deployment
This project is deployed on Vercel.
Live Link: https://offset-frontend-assignment.vercel.app/

