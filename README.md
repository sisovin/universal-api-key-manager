# Universal API Key Manager

A modern, developer-friendly platform for centralized API key management, usage analytics, and service integration. Built with **Next.js 15.5.2**, **TypeScript**, **React 19**, and **Tailwind CSS v4**, it provides a secure and intuitive interface for creating, monitoring, and managing API keys across your projects.

---

## ✨ Features

- **Centralized API Key Management:** Easily generate, revoke, and manage API keys for multiple projects.
- **Secure Key Generation:** Create API keys tied to project names with one-click, securely handled client and server-side.
- **Dashboard Analytics:** Real-time visualization of active keys, request volume, rate limit status, error logs, and service routing statistics.
- **Responsive UI:** Clean, professional, and fully responsive interface optimized for both desktop and mobile.
- **Data Visualization:** Interactive charts powered by Chart.js for detailed request metrics.
- **Custom UI Components:** Consistent, ShadCN-inspired components for buttons, cards, tables, and more.
- **TypeScript Type Safety:** Strict typing throughout for reliability and maintainability.
- **Modern App Router:** Next.js 15 App Router structure for efficient navigation and page layouts.

---

## 🗂️ Project Structure

```
frontend-app/
├── app/
│   ├── auth/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── dashboard/
│   │   ├── page.tsx
│   │   └── layout.tsx
│   ├── apikey/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ActiveApiKeys.tsx
│   ├── RequestVolume.tsx
│   ├── RateLimitStatus.tsx
│   ├── ErrorLogs.tsx
│   ├── ServiceRoutingStats.tsx
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── table.tsx
│       └── progress.tsx
├── lib/
│   ├── api.ts
│   ├── chart.ts
│   └── auth.ts
├── types/
│   └── index.ts
├── styles/
│   ├── globals.css
│   └── tailwind.css
└── public/
    ├── favicon.ico
    └── logo.svg
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.x
- Yarn or npm
- Backend API (see [API Library](#api-library))

### Installation

```bash
git clone https://github.com/sisovin/universal-api-key-manager.git
cd universal-api-key-manager/frontend-app
npm install
# or
yarn install
```

### Environment Variables

Create a `.env.local` file and set the backend API URL:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will start at [http://localhost:3000](http://localhost:3000).

---

## 🧩 Key UI Components

### Main Layout

`app/layout.tsx`  
Global layout with navigation bar and container styling using Tailwind CSS.

### Dashboard

`app/dashboard/page.tsx`  
Displays analytics widgets:  
- **ActiveApiKeys**  
- **RequestVolume** (Chart.js bar graphs by key and service)  
- **RateLimitStatus**  
- **ErrorLogs**  
- **ServiceRoutingStats**

### API Key Management

`app/apikey/page.tsx`  
- Input for project name
- Generate key button
- Secure key display

### UI Library

Reusable components in `components/ui` for consistent design.

---

## 🛠️ API Library

`lib/api.ts`  
Functions to interact with the backend API:

- `fetchDashboardData()`
- `generateApiKey(projectName: string)`
- `revokeApiKey(keyId: string)`

All requests use `credentials: 'include'` for secure auth.

---

## 🎨 Styling

- **Tailwind CSS v4**  
  Custom color theme for light/dark modes in `styles/tailwind.css`  
- **globals.css** for base styles and resets

---

## 📈 Data Visualization

- **Chart.js** integrated via `react-chartjs-2`
- Dashboard charts for request volume by key/service

---

## 🌍 Responsive Design

- Mobile-first, grid layouts
- Adaptive components for all device sizes

---

## 🧪 Testing

_Coming soon: unit and integration tests for UI components and API interactions._

---

## 📚 Documentation

- Each major component is documented inline via TypeScript interfaces and JSDoc.
- For backend API, see [lib/api.ts](frontend-app/lib/api.ts) for endpoint usage.

---

## 🤝 Contributing

Pull requests, issues, and suggestions are welcome!  
See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📝 License

MIT

---

## 📬 Contact & Support

- [GitHub Issues](https://github.com/sisovin/universal-api-key-manager/issues)
- Email: [your-email@example.com](mailto:your-email@example.com)

---

## 📷 Screenshots

_Add screenshots or UI images here._

---

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [ShadCN UI](https://ui.shadcn.com/)

---

> _This README was generated based on the UI and implementation guide provided in "Building an UI design for the Universal API Key System.md"._
