<div align="center">

# 🏃‍♂️ Drip Store

### Modern E-commerce for Sports Equipment

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://dripstore-379af.web.app/)
[![Firebase](https://img.shields.io/badge/Firebase-10.13.1-orange.svg)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.10-38B2AC.svg)](https://tailwindcss.com/)

English | [Português](./README.md)

---

</div>

## 📋 About The Project

**Drip Store** is a complete and modern e-commerce platform specialized in sports equipment. Developed with a focus on performance, user experience, and responsive design, the application offers an end-to-end solution for online shopping.

The design was based on the Figma layout provided by the Full Stack Development course at **Digital College**, with complete implementation of authentication, cart management, and order system.

🔗 **[Access Live Demo](https://dripstore-379af.web.app/)**

## ✨ Features

### 🔐 Complete Authentication

- Login/Register via email and password
- Social login (Google and Facebook)
- Password recovery
- Session management with Context API

### 🛒 Shopping Cart

- Add/remove products
- Adjust quantities
- Automatic total calculation
- Data persistence
- Animations and visual feedback

### 🔍 Search and Filter System

- Search by product name
- Category filters (Sneakers, T-Shirts, Pants, Headphones)
- Price range filters
- Brand and condition filters (New/Used)
- Real-time results

### 📦 Order Management

- Complete order history
- Status and details visualization
- Simplified checkout with validated form
- Confirmation page

### 🎨 Interface and Experience

- Responsive design (Mobile First)
- Featured product carousel
- Interactive cards with hover effects
- Intuitive navigation with React Router
- Toast notifications for feedback
- Loading states and skeleton screens

## 🛠️ Technologies Used

### Frontend

- **[React 18.3.1](https://reactjs.org/)** - Library for building user interfaces
- **[Vite 5.4.19](https://vitejs.dev/)** - Ultra-fast build tool and dev server
- **[React Router DOM 6.26.1](https://reactrouter.com/)** - Routing and navigation
- **[TailwindCSS 3.4.10](https://tailwindcss.com/)** - Utility-first CSS framework

### Backend and Infrastructure

- **[Firebase 10.13.1](https://firebase.google.com/)**
  - **Authentication** - User management and social login
  - **Firestore** - Real-time NoSQL database
  - **Hosting** - Project deployment and hosting

### Supporting Libraries

- **[React Hook Form 7.53.0](https://react-hook-form.com/)** - Form validation
- **[React Hot Toast 2.4.1](https://react-hot-toast.com/)** - Notification system
- **[Swiper 11.1.12](https://swiperjs.com/)** - Carousels and sliders

### Development Tools

- **ESLint 9.9.0** - Linting and code quality
- **PostCSS 8.4.45** - CSS processing
- **Autoprefixer 10.4.20** - CSS compatibility

## 📁 Project Structure

```
drip-store/
├── src/
│   ├── assets/           # Images and static resources
│   ├── components/       # Reusable components
│   │   ├── Header/       # Navigation and search
│   │   ├── Home/         # Homepage components
│   │   ├── Products/     # Filters and product cards
│   │   └── CartCheckout/ # Cart and checkout
│   ├── contexts/         # Context API (UserContext)
│   ├── firebase/         # Firebase configuration and services
│   │   ├── config.js     # Firebase initialization
│   │   ├── auth.js       # Authentication functions
│   │   ├── produto.js    # Products CRUD
│   │   └── pedido.js     # Order management
│   ├── pages/            # Application pages
│   ├── App.jsx           # Main component
│   └── main.jsx          # Entry point
├── public/               # Public files
├── firebase.json         # Firebase configuration
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

## 🚀 How to Run the Project

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- Firebase account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/flaviare1s/drip-store.git
cd drip-store
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Firebase**

Create a `.env` file in the project root with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Run the project**

```bash
npm run dev
```

The project will be available at `http://localhost:5173`

### Production Build

```bash
npm run build
npm run preview
```

### Deploy to Firebase

```bash
npm install -g firebase-tools
firebase login
firebase deploy
```

## 🎯 Challenges and Learnings

### 🔥 Firebase Integration

The complete implementation of Firebase Authentication with multiple providers (email, Google, and Facebook) presented interesting challenges:

- OAuth configuration in Facebook for Developers
- Authentication state management
- Handling specific errors and exceptions

### 📱 Responsiveness and UX

Developing a responsive interface faithful to the original design required:

- Implementation of strategic breakpoints with Tailwind
- Image and asset optimization
- Extensive testing on different devices
- Smooth animations and transitions

### 🛒 State Management

Using Context API to share cart and user state between components, ensuring synchronization and performance.

### 🎨 Design System

Creating reusable components following atomic design principles, facilitating maintenance and scalability.

## 🔜 Future Improvements

- [ ] Implement product review system
- [ ] Add wishlist functionality
- [ ] Payment gateway integration
- [ ] Discount coupon system
- [ ] Administrative panel for product management
- [ ] Email notifications
- [ ] Dark mode
- [ ] PWA (Progressive Web App)
- [ ] Unit and integration tests

## 👥 Contributing

Contributions are always welcome! Feel free to open issues or submit pull requests.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project was developed as part of the Full Stack Development course at Digital College.

## 🙏 Acknowledgments

- **Digital College** - For the training and support during development
- Teachers and monitors who contributed with knowledge and feedback
- React and Firebase community for documentation and resources

## 📞 Contact

**Flavia Reis**

[![GitHub](https://img.shields.io/badge/GitHub-flaviare1s-181717?style=for-the-badge&logo=github)](https://github.com/flaviare1s)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/flavia-reis-desenvolvedor-full-stack/)

---

<div align="center">

**[⬆ Back to top](#-drip-store)**

Made by [Flavia Reis](https://github.com/flaviare1s)

</div>
