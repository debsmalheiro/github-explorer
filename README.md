# GitHub Explorer

Aplicação client-side que consulta a API do GitHub e exibe informações de usuários e seus repositórios mais populares.

## 🚀 Demo

A aplicação está disponível online em: https://github-explorer-eight-ebon.vercel.app/

## ▶️ Como executar localmente

### Pré-requisitos

- Node.js (v20 ou superior)
- npm ou yarn

### Passos

#### 1. Clone o repositório

```bash
git clone https://github.com/debsmalheiro/github-explorer.git
cd github-explorer
```

#### 2. Instale as dependências

```bash
npm install
```

#### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`:

```bash
cp .env.example .env
```

O arquivo `.env` deve conter:

```env
# URL da API do GitHub
VITE_GITHUB_API_URL=https://api.github.com
```

#### 4. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173`

#### 5. (Opcional) Build para produção

Para gerar a versão de produção:

```bash
npm run build
```

Para testar a build localmente:

```bash
npm run preview
```

#### 6. (Opcional) Verificar lint

```bash
npm run lint
```

## 🛠️ Scripts Disponíveis

| Comando            | Descrição                          |
| ------------------ | ---------------------------------- |
| `npm run dev`      | Inicia servidor de desenvolvimento |
| `npm run build`    | Cria build de produção             |
| `npm run preview`  | Preview da build localmente        |
| `npm run lint`     | Verifica código com ESLint         |
| `npm run lint:fix` | Corrige problemas automaticamente  |
| `npm run format`   | Formata código com Prettier        |

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

## 📚 Documentação da API

### Endpoints Utilizados

A aplicação utiliza a API pública do GitHub (GitHub REST API v3). Não é necessária autenticação para consultas básicas, mas há limites de taxa (rate limit).

#### Buscar Usuário

```http
GET /users/{username}
```

**Resposta:**

```json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "name": "monalisa octocat",
  "bio": "There once was...",
  "public_repos": 2,
  "followers": 20,
  "following": 0,
  "location": "San Francisco"
}
```

#### Listar Repositórios

```http
GET /users/{username}/repos?sort=updated&per_page=100
```

**Parâmetros de Query:**
| Parâmetro | Tipo | Descrição |
|-----------|------|-----------|
| `sort` | string | `created`, `updated`, `pushed`, `full_name` (padrão: `created`) |
| `per_page` | integer | Número de resultados por página (máx: 100) |
| `page` | integer | Número da página |

**Resposta:**

```json
[
  {
    "id": 1296269,
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "description": "This your first repo!",
    "stargazers_count": 1350,
    "language": "JavaScript",
    "created_at": "2011-01-26T19:01:12Z",
    "html_url": "https://github.com/octocat/Hello-World"
  }
]
```
