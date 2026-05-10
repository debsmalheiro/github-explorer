# GitHub Explorer

Aplicação client-side que consulta a API do GitHub e exibe informações de usuários e seus repositórios mais populares.

## 🚀 Demo

A aplicação está disponível online em: https://github-explorer-dborah-malheiros-projects.vercel.app/

## 📋 Instalação

### Pré-requisitos

- Node.js (v20 ou superior)
- npm ou yarn

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/debsmalheiro/github-explorer.git
cd github-explorer
```

2. Instale as dependências:

```bash
npm install
```

3. Configure a variável de ambiente:

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_GITHUB_API_URL=https://api.github.com
```

## ▶️ Como executar

### Modo de desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build para produção

```bash
npm run build
```

### Preview da build de produção

```bash
npm run preview
```

## 🛠️ Tecnologias

- **React 19** — Framework UI
- **Vite** — Build tool
- **TypeScript** — Tipagem estática
- **React Router DOM** — Rotas
- **Axios** — Cliente HTTP
- **Bootstrap 5** — Framework CSS responsivo

## 📱 Funcionalidades

| Funcionalidade             | Descrição                                            |
| -------------------------- | ---------------------------------------------------- |
| 🔍 Busca de usuário        | Pesquise qualquer usuário do GitHub                  |
| 👤 Detalhes do perfil      | Avatar, bio, seguidores, seguindo, localização, etc. |
| 📦 Lista de repositórios   | Repositórios ordenados por estrelas (decrescente)    |
| 🔄 Ordenação               | Alterne entre estrelas, nome, data e linguagem       |
| 📄 Detalhes do repositório | Informações completas com link para o GitHub         |

## 📂 Estrutura do projeto

```
src/
├── components/       # Componentes reutilizáveis
├── hooks/           # Custom React hooks
├── pages/           # Páginas da aplicação
├── routes/          # Configuração de rotas
├── services/        # Serviços de API
├── types/           # Tipos TypeScript
└── main.tsx         # Entry point
```
