# Design Guidelines: Local Edge Technology Solutions

## Design Approach

**Reference-Based Approach**: Draw inspiration from Linear (clean B2B SaaS), Stripe (trust and professionalism), and Vercel (dark theme with accent colors) to create a premium tech consultancy aesthetic that builds credibility and drives conversions.

**Core Principles**:
- **Tech Premium**: Dark, sophisticated interface with strategic teal accent usage
- **Trust-First**: Every section builds credibility through social proof and professional polish
- **Conversion-Focused**: Multiple strategic touchpoints guiding visitors to contact form
- **Portal Theme**: Maintain existing portal/dimensional aesthetic with glowing accents

## Typography System

**Font Family**: Inter (already loaded via Google Fonts)

**Hierarchy**:
- **Hero Headline**: 900 weight, 4.5rem desktop / 2.5rem mobile, tight line-height (1.1)
- **Section Headers**: 800 weight, 3rem desktop / 2rem mobile
- **Subheaders**: 700 weight, 1.75rem
- **Body Large**: 500 weight, 1.125rem (CTAs, important callouts)
- **Body**: 400 weight, 1rem, line-height 1.6
- **Small/Meta**: 400 weight, 0.875rem (timestamps, captions)

**Color Application**:
- Headlines: Pure white (#ffffff)
- Body: Light gray (#e5e7eb) for readability
- Accent text: Teal (#14b8a6) for statistics, key phrases
- Muted: Gray-400 (#9ca3af) for secondary information

## Layout System

**Spacing Units**: Tailwind scale focusing on 2, 4, 8, 12, 16, 20, 24, 32 units
- **Section Padding**: py-20 desktop, py-12 mobile
- **Card Padding**: p-8 desktop, p-6 mobile  
- **Component Gaps**: gap-8 for major sections, gap-4 for related elements
- **Container**: max-w-7xl centered with px-8 desktop, px-4 mobile

**Grid Patterns**:
- **Services**: 3-column grid desktop (lg:grid-cols-3), single column mobile
- **Testimonials**: 2-column grid tablet (md:grid-cols-2), single column mobile
- **Stats Bar**: 4-column desktop (lg:grid-cols-4), 2-column mobile
- **Founder Bios**: 2-column desktop, stacked mobile with images

## Color & Visual Treatment

**Maintain Existing Palette**:
- Background: Gray-950 (#030712)
- Teal accent: #14b8a6 (primary CTAs, hover states, glows)
- Teal light: #5eead4 (gradients, highlights)
- Teal dark: #0d9488 (shadows, depth)

**Glass Morphism Cards**:
- Background: rgba(255, 255, 255, 0.05)
- Backdrop blur: 20px
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Box shadow: 0 8px 32px rgba(0, 0, 0, 0.3)

**Glow Effects** (use sparingly):
- CTAs: 0 0 20px rgba(20, 184, 166, 0.3)
- Hover: 0 0 40px rgba(20, 184, 166, 0.5)
- Active elements: teal box-shadow with blur

## Component Library

### Hero Section
- Full viewport height with parallax background image
- Centered content with headline, subheadline, dual CTAs
- Floating particle effects (subtle, teal dots)
- Trust badges below CTAs: "Trusted by 50+ businesses" with logos/icons
- Portal accent image as decorative element

### Lead Capture Form (Primary Conversion Element)
**Placement**: Dedicated section mid-page + sticky footer variant
**Fields**:
- Name (required) - single input
- Email (required) - with validation indicator
- Phone (optional, labeled) - formatted input
- Message/Interest (textarea, 4 rows)

**Design Treatment**:
- Glass morphism container with enhanced glow on focus
- Teal focus rings (2px solid)
- Real-time validation with checkmarks/error icons
- Submit button: Full-width, teal background, bold weight
- Privacy message below: "We'll never sell your information" in gray-400
- Success state: Replace form with checkmark animation + confirmation message
- Error state: Red accent border with inline error messages

### Service Cards (À La Carte Showcase)
- 3 glass morphism cards in grid
- Icon at top (portal/tech themed)
- Service name as h3
- 2-3 line description
- "Learn More" link in teal
- Hover: Lift effect (translateY -4px) with enhanced glow

### AI-Impact FAQ Accordion
**Content Structure** (5-6 questions):
- "How much can AI improve business efficiency?" (Answer: 40-60% productivity gains stat)
- "What's the ROI timeline for AI adoption?" (Answer: 6-12 months with specific examples)
- "Do small businesses need AI?" (Answer: Yes, with cost-benefit examples)
- "What AI solutions work best for small businesses?" (Answer: Automation, customer service, analytics)
- "Is AI implementation risky?" (Answer: Address concerns with success rates)

**Design**:
- Each item: Glass container with teal accent border-left
- Question: Bold, clickable row with + icon
- Answer: Expands smoothly with stats highlighted in teal
- Include 2-3 numerical stats per answer (styled distinctly)

### Founder Bios Section
- Side-by-side layout desktop, stacked mobile
- Circular headshot images (ben-headshot.jpg, brian-headshot.png) with teal ring border
- Name + title below each photo
- 3-4 line bio emphasizing expertise
- LinkedIn icons linking to profiles

### Testimonials Carousel
- 2 testimonials visible desktop, 1 mobile
- Auto-rotate every 5 seconds
- Customer photo (circular), quote, name, company
- Navigation dots below (teal when active)
- Glass card treatment

### Zero-Risk Guarantee Section
- Centered content block
- Shield/checkmark icon at top
- Bold headline: "100% Satisfaction Guaranteed"
- 3 guarantee points with checkmarks:
  - No long-term contracts
  - Results-driven or money back
  - Free consultation to assess fit
- Teal CTA button below

### Multiple CTA Strategy
1. **Hero**: Primary + secondary buttons
2. **Sticky FAB**: Bottom-right floating action button (appears on scroll)
3. **Service cards**: Soft CTAs in each card
4. **Form section**: Main conversion point
5. **Footer**: Final CTA before footer content

## Micro-Interactions

- **Button Hover**: Slight lift (2px) + glow increase
- **Card Hover**: Tilt effect (subtle 3D) + glow border
- **Form Focus**: Glow animation on active input
- **Scroll Reveals**: Fade up with stagger delay (0.1s per item)
- **Counter Stats**: Animate numbers on scroll into view
- **Cursor**: Maintain custom glowing cursor on desktop
- **Loading**: Portal animation on page load

## Mobile Optimization

- **Touch Targets**: Minimum 44px height for all interactive elements
- **Hamburger Menu**: Slide-in full-screen overlay with large text
- **Form**: Full-width inputs, larger font size (16px to prevent zoom)
- **Sticky CTA**: Smaller, bottom-center position on mobile
- **Reduced Animations**: Disable parallax, cursor effects on mobile
- **Optimized Images**: Serve smaller versions, lazy load below fold

## Images

**Hero Background**: portal-themed abstract image (hero-portal.png) with parallax scroll effect and dark overlay
**Transformation Section**: Use transformation-bg.png as background for services or guarantee section
**Portal Accent**: Decorative portal-accent.png image in appropriate section
**Founder Headshots**: ben-headshot.jpg and brian-headshot.png in team section
**Image Treatment**: All background images with subtle blur and dark overlay (rgba(3, 7, 18, 0.6))