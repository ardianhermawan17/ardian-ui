# Running the Project

## Dependency
* React 18.3.1
* Tailwind 4.1.18
* Storybook 10.2.7
* Playwright (For Vite + Storybook)


## Local Development Setup
```bash
npm install
```

### For React Development Server
```bash
npm run dev
```
Go to React Development Server at `http://localhost:5173`

### For Storybook Server
```bash
npm run storybook
```
Go to Storybook Server at `http://localhost:6006`


## Prerequisites (DOCKER Ways)

```bash
docker compose build
```

### Running whole project with Docker Compose

```bash
docker compose up -d
```

Go to React Development Server at `http://localhost:5173`


### Running in Development mode (watch mode)

```bash
docker compose watch react-dev storybook
```

Go to React Development Server at `http://localhost:5173`

Go to Storybook Server at `http://localhost:6006`