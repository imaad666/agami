# AAGAMISEQ Medical Technology Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Medical technology landing page inspired by modern healthcare platforms like 23andMe, Color Genomics, and Tempus, combined with the professional clarity of Stripe and the approachability of Headspace. The design must match the provided presentation 1:1 in structure, color, and content.

## Core Design Principles
1. **Clinical Trust**: Professional, evidence-based visual language that inspires confidence
2. **Human-Centered**: Warm accessibility balanced with medical authority
3. **Scientific Precision**: Clean layouts reflecting technological sophistication
4. **Hope & Clarity**: Optimistic messaging without overpromising

## Color Palette (Exact from Presentation)
- **Primary Blue**: #4169E1 (royal blue) - CTAs, headings, key accents
- **Light Blue Background**: #E8F4F8 - section backgrounds, alternating sections
- **Cyan Accent**: #00BCD4 - graphics, DNA visualization, process icons
- **White**: #FFFFFF - primary backgrounds, card surfaces
- **Dark Gray**: #2D3748 - body text, descriptions
- **Medium Gray**: #718096 - secondary text, captions
- **Success Green**: #10B981 - statistics positive indicators

## Typography System
**Font Family**: Inter (Google Fonts) - clean, medical-grade legibility
- **Hero Headline**: 48px/56px, weight 700, tight letter-spacing (-0.02em)
- **Section Headings**: 36px/44px, weight 600
- **Subsection Headings**: 24px/32px, weight 600
- **Body Text**: 16px/24px, weight 400
- **CTA Buttons**: 16px/20px, weight 600, uppercase tracking
- **Statistics Numbers**: 48px/56px, weight 700, primary blue
- **Statistics Labels**: 14px/20px, weight 500, medium gray

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 desktop, py-12 mobile
- Container max-width: 1280px (max-w-7xl)
- Content max-width: 896px (max-w-4xl) for text-heavy sections
- Card spacing: gap-8 desktop, gap-6 mobile
- Element spacing: mb-6 for headings, mb-4 for paragraphs

## Images & Graphics
**Hero Section**: Large, high-quality medical/laboratory image showing DNA sequencing equipment or scientists in clean lab environment. Image should convey precision and hope. Overlay with semi-transparent gradient (dark blue to transparent) for text readability.

**DNA Visualization**: Custom SVG graphic showing DNA double helix threading through a nanopore chip with signal waves. Use cyan (#00BCD4) for DNA, blue (#4169E1) for chip, and light blue for waves.

**Process Icons**: Circular SVG icons (80px diameter) with 4px stroke, cyan color:
1. Blood drop icon
2. DNA strand icon
3. Signal/waveform icon
4. AI/brain chip icon

**Technology Section**: Isometric illustration of nanopore chip with DNA visualization, similar to presentation style.

## Component Specifications

### Navigation Header
- Sticky header, white background, subtle shadow on scroll
- AAGAMISEQ triangle logo (40px height), left-aligned
- Navigation links: Our Mission | How It Works | Our Approach | About Us | Contact
- Mobile: Hamburger menu, full-screen overlay navigation

### Hero Section
- Full viewport height (100vh)
- Background image with gradient overlay
- Centered content with AAGAMISEQ logo (60px)
- Headline: "Clarity in the Fight Against Cancer" (white text)
- Tagline below (16px, weight 400, light opacity)
- Two CTA buttons side-by-side:
  - "For Patients & Families" (primary blue, white text, backdrop-blur)
  - "For Medical Professionals" (white, blue text, backdrop-blur)
- Buttons: rounded-lg, px-8, py-4, hover lift effect

### Our Mission Section
- White background
- Centered heading "Our Mission"
- Three statistics cards in grid (grid-cols-1 md:grid-cols-3, gap-8)
- Cards: white background, subtle shadow, rounded-xl, p-8
- Large number in primary blue, label below in dark gray
- Stats: ">50% earlier detection", "$6K+ cost savings", "<50% invasive procedures"

### The AAGAMISEQ Process
- Light blue background (#E8F4F8)
- Heading "The AAGAMISEQ Process"
- Four-column grid on desktop, stacked on mobile
- Each step: circular icon (80px), heading, 2-3 line description
- Steps: Simple Blood Draw → DNA Threads Through Nanopore → Signal Acquisition → AI-Powered Diagnosis

### Information and Hope Section
- White background
- Two-column layout on desktop (Patient side | Family side)
- Four Q&A cards per column, total 8 cards
- Cards: light gray border, rounded-lg, p-6, hover subtle shadow
- Question as heading (weight 600), answer as body text
- Questions: "What is this test?", "What does it mean for me?", "Why is it different?", "How do I get the test?"

### For Clinicians Section
- Light blue background
- Professional tone, technical language
- User/doctor icon (60px) with content
- Bulleted list of clinical benefits
- CTA: "Access Clinical Resources" button

### Our Technology Section
- White background
- Two-column layout: DNA visualization graphic (left) | content (right)
- Heading "Our Technology"
- Three technical bullet points with small icons
- Explains nanopore sequencing, signal processing, AI analysis

### Footer
- Dark gray background (#2D3748), white text
- Three columns: Company info | Quick Links | Contact
- AAGAMISEQ logo, tagline, copyright
- Social media icons (LinkedIn, Twitter)
- Email signup form with inline submit button

## Interaction Design
- Smooth scroll behavior for anchor navigation (scroll-smooth)
- Cards: subtle hover shadow and 2px lift (transform translateY)
- Buttons: 0.3s transition, slight scale on hover (scale-105)
- No distracting animations - maintain medical professionalism
- Fade-in on scroll for section entries (intersection observer)

## Accessibility
- WCAG 2.1 AA compliance minimum
- Color contrast ratios: 4.5:1 for body text, 3:1 for large text
- Focus indicators on all interactive elements (2px blue outline)
- Semantic HTML (header, nav, main, section, footer)
- Alt text for all images and icons
- Keyboard navigation support throughout