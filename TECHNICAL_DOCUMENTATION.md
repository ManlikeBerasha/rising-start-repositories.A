# Technical Documentation - Raisers of Stars Consulting

## 📋 Table of Contents
1. [System Architecture](#system-architecture)
2. [Component Documentation](#component-documentation)
3. [Styling System](#styling-system)
4. [State Management](#state-management)
5. [API Integration](#api-integration)
6. [Build & Deployment](#build--deployment)

---

## 🏗️ System Architecture

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                     Browser (Client)                     │
├─────────────────────────────────────────────────────────┤
│                                                           │
│  ┌─────────────────────────────────────────────────┐   │
│  │              React Application                   │   │
│  │  ┌────────────────────────────────────────┐    │   │
│  │  │         App.tsx (Root)                 │    │   │
│  │  │  ┌──────────────────────────────┐     │    │   │
│  │  │  │    ErrorBoundary             │     │    │   │
│  │  │  │  ┌────────────────────────┐  │     │    │   │
│  │  │  │  │  Navigation            │  │     │    │   │
│  │  │  │  │  Hero (3D Effects)     │  │     │    │   │
│  │  │  │  │  Services3D            │  │     │    │   │
│  │  │  │  │  ContactModal          │  │     │    │   │
│  │  │  │  │  FloatingActionButton  │  │     │    │   │
│  │  │  │  └────────────────────────┘  │     │    │   │
│  │  │  └──────────────────────────────┘     │    │   │
│  │  └────────────────────────────────────────┘    │   │
│  └─────────────────────────────────────────────────┘   │
│                                                           │
├─────────────────────────────────────────────────────────┤
│                    Vite Dev Server                       │
│              (Hot Module Replacement)                    │
└─────────────────────────────────────────────────────────┘
```

### Technology Stack Details

| **Layer** | **Technology** | **Version** | **Purpose** |
|-----------|----------------|-------------|-------------|
| **UI Framework** | React | 19.2.0 | Component-based UI |
| **Language** | TypeScript | Latest | Type safety |
| **Build Tool** | Vite | 6.4.1 | Fast builds & HMR |
| **Styling** | Tailwind CSS + Custom CSS | 3.x | Responsive styling |
| **State Management** | React Hooks | Built-in | Local state |
| **Routing** | Smooth Scroll | Native | Section navigation |

---

## 🧩 Component Documentation

### 1. **App.tsx** (Root Component)

**Purpose**: Main application container that orchestrates all components

**State**:
```typescript
const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
```

**Props**: None (Root component)

**Children**:
- ErrorBoundary
- Navigation
- Hero
- Services3D
- ContactModal
- FloatingActionButton

**Key Features**:
- Modal state management
- Component composition
- Error boundary wrapping

---

### 2. **ErrorBoundary.tsx**

**Purpose**: Catches JavaScript errors in child components

**Type**: Class Component (required for error boundaries)

**State**:
```typescript
state = {
  hasError: boolean,
  error: Error | null
}
```

**Methods**:
- `componentDidCatch()` - Logs errors
- `render()` - Shows error UI or children

**Error UI**: User-friendly error message with reload option

---

### 3. **Navigation.tsx**

**Purpose**: Responsive navigation bar with smooth scrolling

**Props**:
```typescript
interface NavigationProps {
  onContactClick: () => void;
}
```

**State**:
```typescript
const [isScrolled, setIsScrolled] = useState<boolean>(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
```

**Features**:
- Scroll-based background change
- Mobile hamburger menu
- Smooth scroll to sections
- Sticky positioning

**Breakpoints**:
- Mobile: < 768px (hamburger menu)
- Desktop: ≥ 768px (full menu)

---

### 4. **Hero.tsx**

**Purpose**: Hero section with 3D parallax effects

**Props**:
```typescript
interface HeroProps {
  onJoinClick: () => void;
}
```

**State**:
```typescript
const [scrollY, setScrollY] = useState<number>(0);
const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0});
```

**3D Effects**:
- **Parallax Scrolling**: Background moves slower than foreground
- **Mouse Tracking**: Elements tilt based on cursor position
- **Floating Shapes**: Animated geometric shapes
- **Glass Morphism**: Frosted glass effect on logo

**Event Listeners**:
- `scroll` - Updates parallax position
- `mousemove` - Tracks cursor for 3D tilt

**Performance**: Uses `requestAnimationFrame` for smooth animations

---

### 5. **Services3D.tsx**

**Purpose**: Display services with 3D card effects

**State**:
```typescript
const [isVisible, setIsVisible] = useState<boolean>(false);
const [mousePosition, setMousePosition] = useState<{x: number, y: number}>({x: 0, y: 0});
```

**Services Data**:
```typescript
const services = [
  {
    title: "Financial Goal Setting",
    description: "Define and achieve your financial objectives",
    icon: "🎯"
  },
  // ... 4 more services
];
```

**Features**:
- **Intersection Observer**: Animates cards on scroll into view
- **3D Hover Effects**: Cards lift and rotate on hover
- **Glass Morphism**: Backdrop blur effects
- **Responsive Grid**: 1-3 columns based on screen size

**Animation Timing**:
- Staggered entrance: 100ms delay between cards
- Hover transition: 300ms cubic-bezier

---

### 6. **ContactModal.tsx**

**Purpose**: Contact form with validation

**Props**:
```typescript
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

**State**:
```typescript
const [formData, setFormData] = useState({
  name: string,
  email: string,
  phone: string,
  message: string
});
const [errors, setErrors] = useState<Record<string, string>>({});
```

**Validation Rules**:
- **Name**: Required, min 2 characters
- **Email**: Required, valid email format
- **Phone**: Optional, valid phone format
- **Message**: Required, min 10 characters

**Features**:
- Real-time validation
- Error messages
- Email/phone links
- Backdrop click to close
- ESC key to close

---

### 7. **FloatingActionButton.tsx**

**Purpose**: Always-visible contact button

**Props**:
```typescript
interface FABProps {
  onClick: () => void;
}
```

**State**:
```typescript
const [isVisible, setIsVisible] = useState<boolean>(false);
const [showTooltip, setShowTooltip] = useState<boolean>(false);
```

**Behavior**:
- Hidden on page load
- Appears after 300px scroll
- Shows tooltip on hover
- 3D hover effect
- Fixed position (bottom-right)

---

## 🎨 Styling System

### CSS Architecture

```
styles/
├── base.css          # Resets, body, scrollbar
├── animations.css    # @keyframes definitions
├── effects-3d.css    # 3D transforms & effects
├── utilities.css     # Helper classes
└── index.css         # Imports all modules
```

### Design Tokens

**Colors**:
```css
--brand-blue: #012A4A;    /* Primary brand color */
--brand-gold: #F2B705;    /* Accent color */
```

**Typography**:
```css
font-family: 'Inter', sans-serif;  /* Body text */
font-family: 'Playfair Display', serif;  /* Headings */
```

**Spacing Scale**:
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px

### Animation Library

**Keyframes**:
1. `fade-in-scale` - Entrance animation
2. `float` - Continuous floating motion
3. `pulse-glow` - Pulsing glow effect
4. `slide-in-3d` - 3D slide entrance

**Timing Functions**:
- `ease-in-out` - Standard transitions
- `cubic-bezier(0.25, 0.46, 0.45, 0.94)` - Custom smooth

### 3D Effects

**Glass Morphism**:
```css
backdrop-filter: blur(16px) saturate(180%);
background: rgba(255, 255, 255, 0.1);
```

**Card 3D Transform**:
```css
transform: translateY(-8px) rotateX(5deg) rotateY(2deg);
transform-style: preserve-3d;
perspective: 1000px;
```

---

## 🔄 State Management

### Strategy: Local State with Hooks

**Why Local State?**
- Simple application
- No complex data flow
- No need for global state management

**State Locations**:
| **Component** | **State** | **Purpose** |
|---------------|-----------|-------------|
| App | `isModalOpen` | Control modal visibility |
| Navigation | `isScrolled`, `isMobileMenuOpen` | UI state |
| Hero | `scrollY`, `mousePosition` | Animation state |
| Services3D | `isVisible`, `mousePosition` | Animation state |
| ContactModal | `formData`, `errors` | Form state |
| FAB | `isVisible`, `showTooltip` | UI state |

### Future: Context API or Redux
For Phase 2 with user authentication and backend integration.

---

## 🌐 API Integration (Future)

### Planned Endpoints

**Contact Form**:
```typescript
POST /api/contact
Body: {
  name: string,
  email: string,
  phone?: string,
  message: string
}
Response: {
  success: boolean,
  message: string
}
```

**Newsletter**:
```typescript
POST /api/newsletter
Body: {
  email: string
}
```

---

## 🚀 Build & Deployment

### Build Process

```bash
npm run build
```

**Output**:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── vendor-[hash].js
```

### Deployment Platforms

**Netlify**:
- Build command: `npm run build`
- Publish directory: `dist`
- Auto SSL

**Vercel**:
- Framework preset: Vite
- Auto-detected settings

### Environment Variables

```env
VITE_SITE_URL=https://your-domain.com
VITE_CONTACT_EMAIL=patriciaj.mahinda@yahoo.com
VITE_CONTACT_PHONE=0721609263
```

---

**Document Version**: 1.0  
**Last Updated**: December 19, 2025
