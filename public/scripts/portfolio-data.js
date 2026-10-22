export const PROJECTS = [
  {
    "title": "BlinkHint",
    "subtitle": "AI Interview Assistant",
    "src": "/assets/blinkhint-real.webp",
    "image": "/assets/blinkhint-real.webp",
    "alt": "BlinkHint \u2014 AI Interview Assistant",
    "link": "https://blinkhint.com/",
    "href": "https://blinkhint.com/",
    "description": "AI-powered Chrome extension that gives real-time conversation cues during remote interviews, using speech-to-text and LLM pipelines.",
    "tools": [
      "React.js",
      "Next.js",
      "Python",
      "PostgreSQL",
      "RESTful APIs",
      "WebSockets",
      "OpenAI API"
    ]
  },
  {
    "title": "ShopSphere",
    "subtitle": "Gaming Gear E-Commerce",
    "src": "/assets/shopsphere-real.webp",
    "image": "/assets/shopsphere-real.webp",
    "alt": "ShopSphere \u2014 Gaming Gear E-Commerce",
    "link": "https://shop-sphere-e-commerce-sable.vercel.app/",
    "href": "https://shop-sphere-e-commerce-sable.vercel.app/",
    "description": "Gaming hardware storefront with category browsing, product pages, a dynamic cart, and login and checkout flows.",
    "tools": [
      "Next.js",
      "Tailwind CSS",
      "MongoDB"
    ]
  },
  {
    "title": "Travel Addict",
    "subtitle": "Dream Travels / Booking Platform",
    "src": "/assets/dreamtravels-real.webp",
    "image": "/assets/dreamtravels-real.webp",
    "alt": "Travel Addict \u2014 Dream Travels / Booking Platform",
    "link": "https://welcome-to-dream-travels.vercel.app/",
    "href": "https://welcome-to-dream-travels.vercel.app/",
    "description": "Travel packages, destination pages and itinerary management, with authentication, booking and contact flows.",
    "tools": [
      "Next.js",
      "Authentication",
      "Booking Architecture"
    ]
  },
  {
    "title": "Freelaunch",
    "subtitle": "Freelance Work Marketplace",
    "src": "/assets/freelaunch-real.webp",
    "image": "/assets/freelaunch-real.webp",
    "alt": "Freelaunch \u2014 Freelance Work Marketplace",
    "link": "https://freelaunch-two.vercel.app/",
    "href": "https://freelaunch-two.vercel.app/",
    "description": "Freelance work marketplace with client postings, proposals, developer profiles and contract management.",
    "tools": [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs"
    ]
  },
  {
    "title": "Meme Generator",
    "subtitle": "Pro Studio / Canvas Editor",
    "src": "/assets/memegenerator-real.webp",
    "image": "/assets/memegenerator-real.webp",
    "alt": "Meme Generator \u2014 Pro Studio / Canvas Editor",
    "link": "https://memer-generator-app.vercel.app/",
    "href": "https://memer-generator-app.vercel.app/",
    "description": "Browser-based meme studio with image templates, custom text overlays and an interactive canvas editor.",
    "tools": [
      "React.js",
      "HTML5 Canvas"
    ]
  },
  {
    "title": "Film Unit Car",
    "subtitle": "Film & TV Production Transport",
    "src": "/assets/film-unit-cars.webp",
    "image": "/assets/film-unit-cars.webp",
    "alt": "Film Unit Car \u2014 Film & TV Production Transport",
    "link": "https://film-unit-cars-production-transport-omega.vercel.app/#home",
    "href": "https://film-unit-cars-production-transport-omega.vercel.app/#home",
    "description": "UK production transport website with fleet and service showcases, quote enquiries and direct WhatsApp contact.",
    "tools": [
      "Fleet Showcase",
      "Quote Enquiries",
      "Service Coverage"
    ]
  },
  {
    "title": "Rankvi",
    "subtitle": "SEO & GEO Agency Website",
    "src": "/assets/rankvi.png",
    "image": "/assets/rankvi.png",
    "alt": "Rankvi homepage showing SEO services and CNC machining imagery",
    "link": "https://rankvi.com/",
    "href": "https://rankvi.com/",
    "description": "SEO and GEO agency website presenting industry-specific services for manufacturing, chauffeur companies, contractors and mobile bartending businesses, with service pages, case studies and consultation enquiries.",
    "deliverables": [
      "Industry-specific service pages",
      "Case studies and insights",
      "Consultation enquiry flow"
    ]
  },
  {
    "title": "Lux Chauffeur",
    "subtitle": "Electric Chauffeur Services",
    "src": "/assets/luxchauffeur.png",
    "image": "/assets/luxchauffeur.png",
    "alt": "Lux Chauffeur homepage showing a luxury Mercedes van in Milton Keynes",
    "link": "https://luxchauffeur.co.uk/",
    "href": "https://luxchauffeur.co.uk/",
    "description": "Luxury electric chauffeur website for Milton Keynes, showcasing Mercedes vehicles, airport transfers, business travel, weddings and events, with journey quote enquiries and direct contact options.",
    "deliverables": [
      "Electric fleet showcase",
      "Airport and chauffeur service pages",
      "Journey quote and contact flow"
    ]
  },
  {
    "title": "WAWCD",
    "subtitle": "WhatsApp CRM & Automation",
    "src": "/assets/wawcd.png",
    "image": "/assets/wawcd.png",
    "alt": "WAWCD homepage with its WhatsApp sales automation headline and green branding",
    "link": "https://wawcd.com/",
    "href": "https://wawcd.com/",
    "description": "Website for a WhatsApp CRM and automation platform, presenting its Chrome extension, official WhatsApp API, smart inbox, broadcasting and workflow automation features.",
    "deliverables": [
      "Product and feature showcase",
      "Chrome extension and WhatsApp API information",
      "Customer reviews and resource pages"
    ]
  }
];

export const SHOWCASE_PROJECTS = PROJECTS.filter(project => !["BlinkHint", "Film Unit Car"].includes(project.title));
