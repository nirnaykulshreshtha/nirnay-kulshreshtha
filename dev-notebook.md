# Developer Notebook

## Font Configuration

### Issue
Fonts were not being applied to text elements despite being properly configured in the layout and CSS.

### Root Cause
The fonts were configured correctly in `layout.tsx` using Next.js font optimization:
- Funnel Display (display font) with variable `--display-family`
- Albert Sans (text font) with variable `--text-family`

However, the font classes (`.font-display` and `.font-text`) were missing the `font-family` property in the CSS, and the components weren't using these classes.

### Solution Applied
1. **Updated CSS classes** in `globals.css`:
   - Added `font-family: var(--display-family)` to `.font-display`
   - Added `font-family: var(--text-family)` to `.font-text`
   - Applied `font-text` as default to body element

2. **Applied font classes** in `page.tsx`:
   - Added `font-display` class to h1 element
   - Added `font-text` class to p element

### Font Setup Architecture
- **Display Font**: Funnel Display (700 weight) - Used for headings
- **Text Font**: Albert Sans (400 weight) - Used for body text
- **CSS Variables**: `--display-family` and `--text-family` are set in layout.tsx
- **Utility Classes**: `.font-display` and `.font-text` apply the fonts with proper weights

### Usage
- Use `font-display` class for headings and display text
- Use `font-text` class for body text and paragraphs
- The body element automatically uses `font-text` as default

### Notes
- Tailwind CSS v4 is being used with `@theme` directives in CSS
- Fonts are optimized using Next.js `next/font/google`
- Font variables are applied to the HTML element for global access

## UI Enhancements & Design System

### Skills & Technologies Section (Latest Update)
Added a comprehensive skills showcase section with categorized technical expertise and animated progress indicators.

#### Key Features Implemented:
1. **Categorized Skills Display**:
   - 6 main categories: Frontend, Mobile, Backend, Database & Cloud, DevOps, AI/ML
   - Each category has unique color schemes and icons
   - Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)

2. **Interactive Progress Bars**:
   - Animated progress bars with staggered entrance effects
   - Shimmer effect overlay for visual appeal
   - Percentage indicators for skill proficiency levels
   - Smooth animations with configurable delays

3. **Modern Card Design**:
   - Glassmorphism effect with backdrop blur
   - Hover animations with scale and lift effects
   - Category-specific color gradients and borders
   - Floating decorative elements for visual interest

4. **Comprehensive Skill Coverage**:
   - **Frontend**: React.js, TypeScript, JavaScript, Next.js, HTML/CSS, Tailwind, Redux, Figma
   - **Mobile**: React Native, Flutter, Dart, Android, iOS, Mobile UI/UX, App Store Deployment
   - **Backend**: Node.js, Python, Express.js, REST APIs, GraphQL, Microservices, Authentication
   - **Database & Cloud**: MongoDB, PostgreSQL, Firebase, AWS, Cloud Deployment, Database Design
   - **DevOps**: Docker, Git/GitHub, CI/CD, Linux/Ubuntu, VS Code, Shell Scripting, Monitoring
   - **AI/ML**: Python ML, TensorFlow, Data Analysis, Machine Learning, Deep Learning, NLP

#### Technical Implementation:
- **Component**: `SkillsSection` in `src/components/skills-section.tsx`
- **Animation Library**: Framer Motion for smooth transitions
- **Icons**: Lucide React icons for consistent visual language
- **Responsive Design**: Mobile-first approach with progressive enhancement
- **Performance**: Optimized animations using transform properties

#### Animation System:
- **Staggered Entrances**: Cards appear with 0.1s delays between categories
- **Progress Bar Animations**: 1.5s duration with shimmer effects
- **Hover Effects**: Scale, lift, and color transitions
- **Icon Animations**: Rotation and scale effects on category icons

#### Design Principles:
- **Visual Hierarchy**: Clear categorization with distinct color schemes
- **Accessibility**: Proper contrast ratios and semantic structure
- **Consistency**: Matches existing portfolio design language
- **Engagement**: Interactive elements encourage exploration

### Portfolio Page Redesign (Previous Update)
Enhanced the main portfolio page with modern design elements and improved user experience.

#### Key Improvements Made:
1. **Background Design**:
   - Added subtle gradient background (`bg-gradient-to-br from-background via-background to-muted/20`)
   - Implemented floating decorative elements with blur effects
   - Created depth with layered background elements

2. **Typography Enhancements**:
   - Applied gradient text effects to headings
   - Integrated AuroraText component for animated name display
   - Improved text hierarchy with better spacing and font weights
   - Added accent colors to highlight key technologies and skills

3. **Animation System**:
   - Implemented Framer Motion for smooth page load animations
   - Added staggered animations for content sections
   - Created hover effects for interactive elements
   - Integrated existing AuroraText and TypingAnimation components

4. **Interactive Elements**:
   - Enhanced CTA buttons with hover animations and icons
   - Added social media links with hover effects
   - Implemented image hover effects with scale animations
   - Created floating decorative elements around the profile image

5. **Visual Hierarchy**:
   - Improved spacing and layout structure
   - Added decorative elements (gradient lines, floating orbs)
   - Enhanced image container with multiple background layers
   - Implemented better responsive design patterns

#### Custom CSS Animations Added:
- **Aurora Animation**: Smooth gradient color transitions
- **Float Animation**: Subtle up-down movement for decorative elements
- **Pulse Glow**: Breathing effect for glowing elements
- **Shimmer**: Loading/shimmer effect for interactive elements

#### Component Architecture:
- **Motion Components**: Used Framer Motion for smooth animations
- **AuroraText**: Integrated for animated name display
- **Enhanced Buttons**: Added icons and hover effects
- **Social Links**: Implemented with proper accessibility

#### Design Principles Applied:
- **Minimalism**: Clean, uncluttered design with purposeful whitespace
- **Modern Aesthetics**: Gradient backgrounds, blur effects, and smooth animations
- **Accessibility**: Proper focus states, alt text, and semantic HTML
- **Responsive Design**: Mobile-first approach with progressive enhancement

### Animation System Architecture

#### Framer Motion Integration:
- **Page Load Animations**: Staggered entrance effects for content sections
- **Hover Animations**: Scale and transform effects for interactive elements
- **Transition Timing**: Consistent easing functions and duration values
- **Performance**: Optimized animations using transform properties

#### Custom CSS Animations:
- **Keyframe Definitions**: Aurora, float, pulse-glow, and shimmer effects
- **Utility Classes**: `.animate-aurora`, `.animate-float`, `.animate-pulse-glow`, `.animate-shimmer`
- **Performance**: Hardware-accelerated animations using transform and opacity

#### Animation Guidelines:
- **Duration**: 0.3s for hover effects, 0.8s for page load animations
- **Easing**: `ease-out` for natural movement
- **Staggering**: 0.2s delays between related elements
- **Subtlety**: Animations enhance rather than distract from content

## Image Handling

### Next.js Image Component Usage
- Images in the `public` directory should be referenced without the `./public/` prefix
- Correct: `src={'/nirnay.png'}`
- Incorrect: `src={'./public/nirnay.png'}`

### Image Optimization
- Use `priority` prop for above-the-fold images
- Add `className` for styling (rounded-full, shadow-lg, etc.)
- Always provide proper `alt` text for accessibility

### Common Issues
- **Invalid URL Error**: Occurs when using relative paths with `./public/` prefix
- **Solution**: Remove the `./public/` prefix and reference directly from root

## Container Configuration

### Custom Container Utilities
The project uses custom container utilities defined in `globals.css` using Tailwind CSS v4's `@theme` directive with utility objects.

### Available Container Utilities
- **`container`**: Default container with responsive max-width and padding
- **`container-sm`**: Max-width 640px
- **`container-md`**: Max-width 768px
- **`container-lg`**: Max-width 1024px
- **`container-xl`**: Max-width 1280px
- **`container-2xl`**: Max-width 1536px
- **`container-tight`**: Reduced padding (0.5rem)
- **`container-wide`**: Increased padding (2rem)
- **`container-full`**: No max-width (full width)

### CSS Variables
- `--container-padding`: 1rem (default horizontal padding)
- `--container-max-width`: 1200px (default max-width)

### Usage Examples
```html
<!-- Default container -->
<div class="container">Content</div>

<!-- Small container -->
<div class="container container-sm">Narrow content</div>

<!-- Container with tight padding -->
<div class="container container-tight">Compact content</div>

<!-- Full width container -->
<div class="container container-full">Full width content</div>
```

### Architecture
- Container utilities are defined in `@theme` directive using utility objects
- CSS variables allow easy customization of padding and max-width
- Responsive variants provide flexibility for different content types
- All containers maintain consistent horizontal centering and padding behavior
- Uses Tailwind CSS v4's native utility system instead of custom CSS classes 