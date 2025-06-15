import { Icons } from "@/components/icons";
import {
  BrainIcon,
  CodeIcon,
  GlobeIcon,
  PlugIcon,
  UsersIcon,
  ZapIcon,
  ShieldIcon,
  EyeOffIcon,
  TrendingUpIcon,
  LayersIcon,
  LockIcon,
  Target,
} from "lucide-react";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "IncognitoEx",
  description: "The future of secure & private digital asset trading with AI-powered execution.",
  cta: "Start Trading Now",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Private DEX",
    "Dark Pool Trading",
    "MEV Protection",
    "AI Trading Engine",
    "Secure DeFi",
    "Anonymous Trading",
  ],
  links: {
    email: "support@incognitoex.com",
    twitter: "https://twitter.com/incognitoex",
    discord: "https://discord.gg/incognitoex",
    github: "https://github.com/incognitoex",
    instagram: "https://instagram.com/incognitoex",
  },
  hero: {
    title: "IncognitoEx",
    description:
      "The Future of Secure & Private Digital Asset Trading",
    cta: "Start Trading Now",
    ctaDescription: "Join the next generation of private DeFi trading",
  },
  features: [
    {
      name: "Confidential Dark Pools",
      description:
        "Execute large trades anonymously without revealing your positions or impacting market prices.",
      icon: <EyeOffIcon className="h-6 w-6" />,
    },
    {
      name: "AI Execution Engine",
      description:
        "Our intelligent AI optimizes trade execution, finds the best prices, and protects against MEV attacks.",
      icon: <BrainIcon className="h-6 w-6" />,
    },
    {
      name: "Slippage Protection",
      description:
        "Advanced algorithms actively shield your trades from front-running and slippage costs.",
      icon: <ShieldIcon className="h-6 w-6" />,
    },
    {
      name: "Decentralized Security",
      description:
        "Built on trustless protocols with immutable smart contracts and zero-knowledge proofs.",
      icon: <LockIcon className="h-6 w-6" />,
    },
    {
      name: "Institutional Grade",
      description:
        "Designed for high-volume traders requiring maximum privacy and optimal execution.",
      icon: <TrendingUpIcon className="h-6 w-6" />,
    },
    {
      name: "Cross-Chain Trading",
      description:
        "Seamlessly trade across multiple blockchains with unified liquidity and optimal routing.",
      icon: <LayersIcon className="h-6 w-6" />,
    },
  ],
  pricing: [
    {
      name: "Trader",
      price: { monthly: "0.1%", yearly: "0.08%" },
      frequency: { monthly: "per trade", yearly: "per trade (annual)" },
      description: "Perfect for individual traders seeking privacy.",
      features: [
        "Anonymous trading up to $100K daily",
        "Basic MEV protection",
        "Community support",
        "Standard execution priority",
        "Access to public dark pools",
      ],
      cta: "Start Trading",
    },
    {
      name: "Professional",
      price: { monthly: "0.05%", yearly: "0.03%" },
      frequency: { monthly: "per trade", yearly: "per trade (annual)" },
      description: "Advanced features for serious traders and small funds.",
      features: [
        "Anonymous trading up to $1M daily",
        "Advanced AI execution",
        "Priority support",
        "Custom order types",
        "Private pool access",
        "Detailed analytics dashboard",
      ],
      cta: "Go Professional",
    },
    {
      name: "Institutional",
      price: { monthly: "Custom", yearly: "Volume-based" },
      frequency: { monthly: "pricing", yearly: "discounts" },
      description: "Tailored solutions for institutions and large traders.",
      features: [
        "Unlimited trading volume",
        "Dedicated relationship manager",
        "24/7 priority support",
        "Custom AI model training",
        "Private infrastructure deployment",
        "Advanced compliance tools",
        "Custom integration APIs",
      ],
      popular: true,
      cta: "Contact Sales",
    },
  ],
  footer: {
    socialLinks: [
      {
        icon: <Icons.github className="h-5 w-5" />,
        url: "#",
      },
      {
        icon: <Icons.twitter className="h-5 w-5" />,
        url: "#",
      },
    ],
    links: [
      { text: "Pricing", url: "#" },
      { text: "Documentation", url: "#" },
      { text: "Security", url: "#" },
      { text: "Contact", url: "#" },
    ],
    bottomText: "All rights reserved.",
    brandText: "IncognitoEx",
  },

  testimonials: [
    {
      id: 1,
      text: "IncognitoEx has revolutionized how we execute large trades. The AI protection against MEV is incredibly sophisticated.",
      name: "Sarah Chen",
      company: "Quantum Capital",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      text: "The dark pool functionality saved us millions in slippage costs. Our institutional clients demand this level of privacy.",
      name: "Marcus Rodriguez",
      company: "Alpha Trading Group",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 3,
      text: "Finally, a DEX that understands institutional needs. The execution quality rivals traditional dark pools.",
      name: "Jeff King",
      company: "DeFi Ventures",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 4,
      text: "IncognitoEx's AI engine consistently finds better prices than any other DEX. It's like having a trading desk in your pocket.",
      name: "Ellen Thompson",
      company: "Stealth Capital",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 5,
      text: "The privacy features are unmatched. We can execute our strategies without telegraphing our moves to the market.",
      name: "Ross Foster",
      company: "Eclipse Fund",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 6,
      text: "The MEV protection alone has saved us more than we pay in fees. This platform is a game-changer for DeFi.",
      name: "Alisha Wagner",
      company: "Nexus Trading",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 7,
      text: "Cross-chain trading with this level of privacy was impossible before IncognitoEx. The technology is years ahead.",
      name: "Thomas Liu",
      company: "Bridge Capital",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 8,
      text: "Our family office requires absolute discretion. IncognitoEx delivers institutional-grade privacy without compromise.",
      name: "Victoria Sterling",
      company: "Sterling Family Office",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 9,
      text: "The AI learns from market patterns and protects against attacks we didn't even know existed. Truly next-generation.",
      name: "Christopher Park",
      company: "Vanguard Crypto",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 10,
      text: "Integration was seamless and the API documentation is exceptional. Our developers had us trading in hours.",
      name: "Priya Shah",
      company: "Algorithmic Strategies",
      image:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 11,
      text: "Best execution I've seen in DeFi. The AI consistently outperforms our manual trading strategies.",
      name: "Robert Martinez",
      company: "Phoenix Capital",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 12,
      text: "IncognitoEx solved the trilemma of privacy, liquidity, and optimal execution. This is the future of trading.",
      name: "Elena Kozlov",
      company: "Apex Digital Assets",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 13,
      text: "The zero-knowledge proofs give us confidence that our trading data remains completely private.",
      name: "James Anderson",
      company: "Sovereign Wealth Fund",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 14,
      text: "Reduced our trading costs by 60% while improving execution quality. The ROI is undeniable.",
      name: "Michelle Chang",
      company: "Quantum Hedge Fund",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
    {
      id: 15,
      text: "Multi-chain support with unified liquidity pools. IncognitoEx is building the infrastructure DeFi needed.",
      name: "Kevin O'Brien",
      company: "CrossChain Capital",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    },
  ],
};

export type SiteConfig = typeof siteConfig;