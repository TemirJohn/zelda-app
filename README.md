# Zelda: Breath of the Wild Web App

## Project Description
This web application is a tribute to "The Legend of Zelda: Breath of the Wild," featuring an immersive, Hyrule-themed UI, game information, character search, and a chat feature with Link powered by the Google Gemini API (free tier). Built with a Go backend and a React frontend styled with Tailwind CSS 3.4.17, it fulfills all gamification task requirements, including:
- **Level 1**: Basic UI with navigation, main page, and game info page.
- **Level 2**: Dynamic data via a Go API for characters, creators, and search.
- **Level 3**: Public access via deployment on Render.
- **Bonus Task**: Conversational UI with Link using Gemini API.

The project is hosted in a public GitHub repository and deployed on Render.

## Installation and Setup

### Prerequisites
- **Go** (1.22 or later): [Install](https://golang.org/dl/)
- **Node.js** (LTS): [Install](https://nodejs.org/)
- **Git**: [Install](https://git-scm.com/)
- **Render Account**: Sign up at [Render](https://render.com)
- **Google Gemini API Key**: Obtain from [Google Cloud Console](https://console.cloud.google.com/)

### Project Structure
```
zelda-app/
├── backend/
│   ├── main.go
│   ├── go.mod
│   ├── Procfile
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── GameInfo.jsx
│   │   │   └── ChatWithLink.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env
├── .gitignore
└── README.md
```

### Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/TemirJohn/zelda-app.git
   cd zelda-app
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```bash
     cd backend
     go mod tidy
     ```
   - Create a `.env` file in the project root:
     ```
     GEMINI_API_KEY=your-api-key
     ```
     Obtain the key from [Google Cloud Console](https://console.cloud.google.com/):
     - Create a project.
     - Enable "Generative Language API".
     - Generate an API key in "Credentials".
   - Install `godotenv`:
     ```bash
     go get github.com/joho/godotenv
     ```
   - Run the backend:
     ```bash
     go run main.go
     ```
     The API runs on `http://localhost:8080`.

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```bash
     cd frontend
     npm install
     ```
   - Create a `frontend/.env` file:
     ```
     REACT_APP_API_URL=http://localhost:8080
     ```
   - Run the frontend:
     ```bash
     npm run dev
     ```

4. **Environment Variables**:
   - Ensure `.env` in the root contains:
     ```
     GEMINI_API_KEY=your-api-key
     ```
   - Ensure `frontend/.env` contains:
     ```
     REACT_APP_API_URL=http://localhost:8080
     ```
   - Add both `.env` files to `.gitignore`:
     ```
     .env
     frontend/.env
     ```

5. **Deployment on Render**:
   - Push the project to a public GitHub repository:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/TemirJohn/zelda-app.git
     git push -u origin main
     ```
   - **Backend (Web Service)**:
     1. In Render Dashboard, click **New > Web Service**.
     2. Connect your GitHub repository (`zelda-app`).
     3. Configure:
        - **Name**: `zelda-backend`
        - **Root Directory**: `backend`
        - **Environment**: Go
        - **Region**: Choose the nearest (e.g., Ohio)
        - **Branch**: `main`
        - **Build Command**: `go build -o main`
        - **Start Command**: `./main`
        - **Instance Type**: Free
     4. Add environment variable under **Advanced**:
        - **Key**: `GEMINI_API_KEY`
        - **Value**: your-api-key
     5. Click **Create Web Service**.
     6. Note the URL (e.g., `https://zelda-app-server.onrender.com`).
   - **Frontend (Static Site)**:
     1. In Render Dashboard, click **New > Static Site**.
     2. Connect the same repository.
     3. Configure:
        - **Name**: `zelda-frontend`
        - **Root Directory**: `frontend`
        - **Branch**: `main`
        - **Build Command**: `npm install && npm run build`
        - **Publish Directory**: `dist`
     4. Add environment variable under **Advanced**:
        - **Key**: `REACT_APP_API_URL`
        - **Value**: `https://zelda-app-server.onrender.com`
     5. Click **Create Static Site**.
     6. Note the URL (e.g., `https://zelda-app-client.onrender.com`).
   - Add URLs to this README:
     ```markdown
     **Backend URL**: https://zelda-app-server.onrender.com
     **Frontend URL**: https://zelda-app-client.onrender.com
     ```

## Design and Development Process
- **Planning**: Designed a Hyrule-themed UI with navigation, game info, and chat. Selected Go for a performant backend and React with Vite for a modular frontend.
- **Backend**: Built a REST API with `gin` for endpoints (`/characters`, `/creators`, `/characters/search`, `/chat`). Integrated Gemini API server-side.
- **Frontend**: Developed a single-page React app with `react-router-dom`, styled with Tailwind CSS 3.4.17, using Vite.
- **Bonus Task**: Implemented a chat with Link, using a Gemini API prompt for a heroic tone.

## Unique Approaches
- **Free LLM**: Used Google Gemini API (free tier) with a Hugging Face fallback.
- **Hyrule Design**: Green/gold palette (`hyrule-green`, `hyrule-gold`) and Unsplash backgrounds.
- **Modular Frontend**: React components with Vite for maintainability.
- **Server-Side API**: Secured Gemini API calls via backend.

## Trade-offs
- **Static Data**: In-memory data limits scalability but simplifies setup.
- **Gemini Quotas**: Free-tier limits may cause `429` errors, mitigated by Hugging Face.
- **Render Free Tier**: Services "spin down" after 15 minutes of inactivity, causing a delay on first request.

## Known Issues
- **Gemini Quotas**: Chat may return `429` errors if quota exceeded. Use Hugging Face fallback.
- **Search**: Case-insensitive but limited to name matches.
- **Render Spin-Down**: Free-tier services pause after inactivity, causing a 10–30s delay on first request.
- **React Router**: Ensure `BrowserRouter` wraps `App` to avoid `useContext` errors.

## Why This Tech Stack?
- **Go**: Fast, simple, and concurrent. `gin` simplifies routing.
- **React**: Dynamic, component-based UI. `react-router-dom` for navigation.
- **Tailwind CSS 3.4.17**: Rapid, utility-first styling.
- **Gemini API**: Free, robust LLM with fallback option.
- **Render**: Easy deployment with free tier, supports Go and React.[](https://render.com/)


**Backend URL**: (Add after deploying, e.g., `https://zelda-app-server.onrender.com`)

**Frontend URL**: (Add after deploying, e.g., `https://zelda-app-client.onrender.com`)
