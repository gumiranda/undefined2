// ── Interfaces ──────────────────────────────────────────────────────────────

export interface PricingPagePlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  featureComparison: Record<string, boolean | string>;
  cta: string;
  ctaType: "self-service" | "whatsapp";
  highlighted?: boolean;
  badge?: string;
  showPrice: boolean;
}

export interface PricingPageFaq {
  question: string;
  answer: string;
}

// ── Helper ──────────────────────────────────────────────────────────────────

export function formatBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

// ── Plans ───────────────────────────────────────────────────────────────────

export const pricingPagePlans: PricingPagePlan[] = [
  {
    id: "gratuito",
    name: "Gratuito",
    description: "Para quem quer conhecer a plataforma sem compromisso.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Ate 2 projetos",
      "500 MB de armazenamento",
      "500 requisicoes/mes",
      "Suporte da comunidade",
    ],
    featureComparison: {
      "Projetos": "2",
      "Armazenamento": "500 MB",
      "Requisicoes API/mes": "500",
      "Usuarios": "1",
      "Relatorios avancados": false,
      "Integracoes": "Basicas",
      "Suporte prioritario": false,
      "API completa": false,
      "SSO / SAML": false,
      "Gerente de conta": false,
    },
    cta: "Comecar gratis",
    ctaType: "self-service",
    showPrice: true,
  },
  {
    id: "essencial",
    name: "Essencial",
    description: "Para pequenas equipes que querem comecar rapido.",
    monthlyPrice: 97,
    annualPrice: 77,
    features: [
      "Ate 5 usuarios",
      "10 GB de armazenamento",
      "Relatorios basicos",
      "Suporte por email",
      "Integracoes essenciais",
    ],
    featureComparison: {
      "Projetos": "10",
      "Armazenamento": "10 GB",
      "Requisicoes API/mes": "10.000",
      "Usuarios": "5",
      "Relatorios avancados": false,
      "Integracoes": "Essenciais",
      "Suporte prioritario": false,
      "API completa": false,
      "SSO / SAML": false,
      "Gerente de conta": false,
    },
    cta: "Comecar agora",
    ctaType: "self-service",
    showPrice: true,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Para equipes em crescimento que precisam de mais.",
    monthlyPrice: 197,
    annualPrice: 157,
    features: [
      "Ate 25 usuarios",
      "100 GB de armazenamento",
      "Relatorios avancados",
      "Suporte prioritario",
      "Todas as integracoes",
      "API completa",
      "Automacoes",
    ],
    featureComparison: {
      "Projetos": "Ilimitados",
      "Armazenamento": "100 GB",
      "Requisicoes API/mes": "100.000",
      "Usuarios": "25",
      "Relatorios avancados": true,
      "Integracoes": "Todas",
      "Suporte prioritario": true,
      "API completa": true,
      "SSO / SAML": false,
      "Gerente de conta": false,
    },
    cta: "Comecar agora",
    ctaType: "self-service",
    highlighted: true,
    badge: "Mais popular",
    showPrice: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Para operacoes que precisam de controle total.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "Usuarios ilimitados",
      "Armazenamento ilimitado",
      "Relatorios customizados",
      "Gerente de conta dedicado",
      "SLA garantido",
      "SSO / SAML",
      "On-premise disponivel",
      "Treinamento incluso",
    ],
    featureComparison: {
      "Projetos": "Ilimitados",
      "Armazenamento": "Ilimitado",
      "Requisicoes API/mes": "Ilimitadas",
      "Usuarios": "Ilimitados",
      "Relatorios avancados": true,
      "Integracoes": "Todas + Custom",
      "Suporte prioritario": true,
      "API completa": true,
      "SSO / SAML": true,
      "Gerente de conta": true,
    },
    cta: "Falar com consultor",
    ctaType: "whatsapp",
    showPrice: false,
  },
];

// ── FAQs ────────────────────────────────────────────────────────────────────

export const pricingPageFaqs: PricingPageFaq[] = [
  {
    question: "Quais formas de pagamento voces aceitam?",
    answer:
      "Aceitamos PIX, boleto bancario e cartao de credito (Visa, Mastercard, Elo, Amex). No cartao, voce pode parcelar em ate 12x sem juros.",
  },
  {
    question: "Tem desconto no PIX?",
    answer:
      "Sim! Pagamentos via PIX tem 5% de desconto automatico aplicado no checkout. O desconto vale para planos mensais e anuais.",
  },
  {
    question: "Posso parcelar no cartao de credito?",
    answer:
      "Sim, planos anuais podem ser parcelados em ate 12x sem juros no cartao de credito. O valor de cada parcela e exibido diretamente na pagina de precos.",
  },
  {
    question: "Posso trocar de plano a qualquer momento?",
    answer:
      "Sim! Voce pode fazer upgrade ou downgrade a qualquer momento. No upgrade, a diferenca e cobrada proporcionalmente. No downgrade, o credito restante e aplicado no proximo ciclo.",
  },
  {
    question: "Existe um periodo de teste gratis?",
    answer:
      "O plano Gratuito nao tem limite de tempo. Para os planos pagos, oferecemos 14 dias de teste gratis com acesso completo a todas as funcionalidades do plano escolhido.",
  },
  {
    question: "Como funciona o reembolso?",
    answer:
      "Oferecemos garantia de 30 dias. Se voce nao ficar satisfeito, devolvemos 100% do valor pago, sem perguntas.",
  },
  {
    question: "Os precos incluem impostos?",
    answer:
      "Sim, todos os precos exibidos ja incluem os impostos aplicaveis. O valor que voce ve e o valor que voce paga.",
  },
  {
    question: "Como funciona a cobranca para equipes?",
    answer:
      "O preco do plano ja inclui o numero de usuarios indicado. Caso precise de usuarios adicionais alem do limite do plano, entre em contato para um orcamento personalizado.",
  },
];
