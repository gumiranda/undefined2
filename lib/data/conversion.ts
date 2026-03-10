export const dualCtaPlans = [
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
    cta: "Comecar agora",
    ctaType: "self-service" as const,
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
    cta: "Comecar agora",
    ctaType: "self-service" as const,
    highlighted: true,
    badge: "Mais popular",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Para operacoes que precisam de controle total.",
    monthlyPrice: 497,
    annualPrice: 397,
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
    cta: "Falar com consultor",
    ctaType: "whatsapp" as const,
  },
];

export const checkoutSelfServiceData = {
  title: "Finalizar compra",
  subtitle: "Escolha sua forma de pagamento preferida.",
};

export const thankYouOnboardingData = {
  title: "Pagamento confirmado!",
  subtitle:
    "Sua conta esta ativa. Siga os passos abaixo para comecar a usar a plataforma.",
  ctaLabel: "Acessar meu dashboard",
  checklist: [
    {
      id: "profile",
      label: "Complete seu perfil",
      description: "Adicione foto e informacoes basicas da sua empresa.",
    },
    {
      id: "team",
      label: "Convide sua equipe",
      description: "Envie convites por email para seus colaboradores.",
    },
    {
      id: "integration",
      label: "Conecte suas ferramentas",
      description: "Integre com Slack, Google e outras ferramentas que voce ja usa.",
    },
    {
      id: "first-project",
      label: "Crie seu primeiro projeto",
      description: "Comece com um template ou crie do zero.",
    },
  ],
};

export const thankYouScheduledData = {
  title: "Reuniao agendada com sucesso!",
  subtitle:
    "Nosso especialista vai entrar em contato para uma demonstracao personalizada.",
  consultantName: "Ricardo Mendes",
  consultantRole: "Especialista em Solucoes Enterprise",
  dateLabel: "Proxima terca-feira, 14h",
  nextSteps: [
    "Voce recebera um email de confirmacao em instantes",
    "Nosso consultor entrara em contato 24h antes da reuniao",
    "Prepare suas duvidas — a reuniao e 100% focada no seu cenario",
    "Sem compromisso: voce decide no seu tempo",
  ],
  whatsappLabel: "Precisa remarcar? Fale conosco",
  whatsappNumber: "5511999999999",
  prefilledMessage:
    "Ola! Preciso reagendar minha demonstracao. Meu nome e ",
};

export const waitlistData = {
  title: "Lancamento em breve",
  subtitle:
    "Estamos finalizando os ultimos detalhes. Entre na lista de espera e seja um dos primeiros a testar.",
  placeholderEmail: "seu@email.com.br",
  placeholderWhatsApp: "(11) 99999-9999",
  buttonText: "Entrar na lista",
  socialProofLabel: "pessoas ja estao na fila",
  initialCount: 2847,
  disclaimer: "Avisaremos por email e WhatsApp assim que estiver disponivel.",
};
