<div align="center">

# 🏃‍♂️ Drip Store

### E-commerce moderno de materiais esportivos

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://dripstore-379af.web.app/)
[![Firebase](https://img.shields.io/badge/Firebase-10.13.1-orange.svg)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC.svg)](https://tailwindcss.com/)

[English](./README.en.md) | Português

---

</div>

## 📋 Sobre o Projeto

**Drip Store** é uma plataforma de e-commerce completa e moderna, especializada em materiais esportivos. Desenvolvida com foco em performance, experiência do usuário e design responsivo, a aplicação oferece uma solução end-to-end para compras online.

O design foi baseado no layout Figma fornecido pelo curso de Desenvolvimento Full Stack da **Digital College**, com implementação completa de autenticação, gerenciamento de carrinho e sistema de pedidos.

🔗 **[Acesse a demonstração ao vivo](https://dripstore-379af.web.app/)**

## ✨ Funcionalidades

### 🔐 Autenticação Completa

- Login/Cadastro via e-mail e senha
- Login social (Google e Facebook)
- Recuperação de senha
- Gerenciamento de sessão com Context API

### 🛒 Carrinho de Compras

- Adicionar/remover produtos
- Ajustar quantidades
- Cálculo automático de totais
- Persistência de dados
- Animações e feedback visual

### 🔍 Sistema de Busca e Filtros

- Busca por nome do produto
- Filtros por categoria (Tênis, Camisetas, Calças, Headphones)
- Filtros por faixa de preço
- Filtros por marca e condição (Novo/Usado)
- Resultados em tempo real

### 📦 Gestão de Pedidos

- Histórico completo de pedidos
- Visualização de status e detalhes
- Checkout simplificado com formulário validado
- Página de confirmação

### 🎨 Interface e Experiência

- Design responsivo (Mobile First)
- Carrossel de produtos em destaque
- Cards interativos com hover effects
- Navegação intuitiva com React Router
- Notificações toast para feedback
- Loading states e skeleton screens

## 🛠️ Tecnologias Utilizadas

### Frontend

- **[React 18.3.1](https://reactjs.org/)** - Biblioteca para construção de interfaces
- **[Vite 5.4.19](https://vitejs.dev/)** - Build tool e dev server ultra-rápido
- **[React Router DOM 6.26.1](https://reactrouter.com/)** - Roteamento e navegação
- **[TailwindCSS 3.4.10](https://tailwindcss.com/)** - Framework CSS utilitário

### Backend e Infraestrutura

- **[Firebase 10.13.1](https://firebase.google.com/)**
  - **Authentication** - Gerenciamento de usuários e login social
  - **Firestore** - Banco de dados NoSQL em tempo real
  - **Hosting** - Deploy e hospedagem do projeto

### Bibliotecas Auxiliares

- **[React Hook Form 7.53.0](https://react-hook-form.com/)** - Validação de formulários
- **[React Hot Toast 2.4.1](https://react-hot-toast.com/)** - Sistema de notificações
- **[Swiper 11.1.12](https://swiperjs.com/)** - Carrosséis e sliders

### Ferramentas de Desenvolvimento

- **ESLint 9.9.0** - Linting e qualidade de código
- **PostCSS 8.4.45** - Processamento de CSS
- **Autoprefixer 10.4.20** - Compatibilidade de CSS

## 📁 Estrutura do Projeto

```
drip-store/
├── src/
│   ├── assets/           # Imagens e recursos estáticos
│   ├── components/       # Componentes reutilizáveis
│   │   ├── Header/       # Navegação e busca
│   │   ├── Home/         # Componentes da página inicial
│   │   ├── Products/     # Filtros e cards de produtos
│   │   └── CartCheckout/ # Carrinho e checkout
│   ├── contexts/         # Context API (UserContext)
│   ├── firebase/         # Configuração e serviços Firebase
│   │   ├── config.js     # Inicialização do Firebase
│   │   ├── auth.js       # Funções de autenticação
│   │   ├── produto.js    # CRUD de produtos
│   │   └── pedido.js     # Gestão de pedidos
│   ├── pages/            # Páginas da aplicação
│   ├── App.jsx           # Componente principal
│   └── main.jsx          # Entry point
├── public/               # Arquivos públicos
├── firebase.json         # Configuração do Firebase
├── tailwind.config.js    # Configuração do Tailwind
└── vite.config.js        # Configuração do Vite
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Conta no Firebase

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/flaviare1s/drip-store.git
cd drip-store
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o Firebase**

Crie um arquivo `.env` na raiz do projeto com suas credenciais do Firebase:

```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

4. **Execute o projeto**

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

### Build para Produção

```bash
npm run build
npm run preview
```

### Deploy no Firebase

```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

## 🎯 Desafios e Aprendizados

### 🔥 Integração com Firebase

A implementação completa do Firebase Authentication com múltiplos provedores (e-mail, Google e Facebook) apresentou desafios interessantes:

- Configuração de OAuth no Facebook for Developers
- Gerenciamento de estados de autenticação
- Tratamento de erros e exceções específicas

### 📱 Responsividade e UX

O desenvolvimento de uma interface responsiva e fiel ao design original exigiu:

- Implementação de breakpoints estratégicos com Tailwind
- Otimização de imagens e assets
- Testes extensivos em diferentes dispositivos
- Animações e transições fluidas

### 🛒 Gerenciamento de Estado

Utilização de Context API para compartilhar o estado do carrinho e usuário entre componentes, garantindo sincronização e performance.

### 🎨 Design System

Criação de componentes reutilizáveis seguindo princípios de atomic design, facilitando manutenção e escalabilidade.

## 🔜 Próximas Melhorias

- [ ] Implementar sistema de avaliações de produtos
- [ ] Adicionar wishlist (lista de desejos)
- [ ] Integração com gateway de pagamento
- [ ] Sistema de cupons de desconto
- [ ] Painel administrativo para gestão de produtos
- [ ] Notificações por email
- [ ] Modo escuro
- [ ] PWA (Progressive Web App)
- [ ] Testes unitários e de integração

## 👥 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Fork o projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📄 Licença

Este projeto foi desenvolvido como parte do curso de Desenvolvimento Full Stack da Digital College.

## 🙏 Agradecimentos

- **Digital College** - Pela formação e suporte durante o desenvolvimento
- Professores e monitores que contribuíram com conhecimento e feedback
- Comunidade React e Firebase pela documentação e recursos

## 📞 Contato

**Flavia Reis**

[![GitHub](https://img.shields.io/badge/GitHub-flaviare1s-181717?style=for-the-badge&logo=github)](https://github.com/flaviare1s)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/flavia-reis-desenvolvedor-full-stack/)

---

<div align="center">

**[⬆ Voltar ao topo](#-drip-store)**

Desenvolvido por [Flavia Reis](https://github.com/flaviare1s)

</div>
