export const leadMagnetData = {
  badge: "Material gratuito",
  title: "Guia completo: como escalar seu SaaS no Brasil",
  subtitle:
    "Baixe nosso ebook com 47 estrategias testadas por startups brasileiras que cresceram 10x em 12 meses.",
  offer: "Ebook Gratuito",
  offerDescription:
    "PDF com 32 paginas, checklists prontos e templates de growth.",
  placeholder: "seu@email.com.br",
  buttonText: "Baixar agora",
  disclaimer:
    "Ao informar seu email, voce concorda com nossa Politica de Privacidade.",
};

export const leadCaptureModalData = {
  title: "Espera! Tem certeza que quer sair?",
  subtitle:
    "Antes de ir, garanta acesso gratuito ao nosso material exclusivo sobre automacao para PMEs.",
  fields: [
    { label: "Nome", placeholder: "Seu nome completo", type: "text" },
    { label: "Email", placeholder: "seu@email.com.br", type: "email" },
    { label: "WhatsApp", placeholder: "(11) 99999-9999", type: "tel" },
  ],
  buttonText: "Quero receber o material",
  disclaimer: "Sem spam. Voce pode cancelar a qualquer momento.",
};

export const whatsAppCaptureData = {
  title: "Fale com um consultor especializado",
  subtitle:
    "Nosso time esta pronto para entender sua necessidade e montar um plano personalizado.",
  benefits: [
    "Resposta em ate 5 minutos no horario comercial",
    "Analise gratuita do seu cenario atual",
    "Proposta personalizada sem compromisso",
    "Suporte dedicado do inicio ao fim",
  ],
  buttonText: "Conversar no WhatsApp",
  floatingLabel: "Fale conosco",
  whatsappNumber: "5511999999999",
  prefilledMessage:
    "Ola! Gostaria de saber mais sobre a plataforma e receber uma proposta personalizada.",
};

export const demoRequestData = {
  title: "Agende uma demonstracao personalizada",
  subtitle:
    "Veja na pratica como a plataforma pode transformar a operacao da sua empresa.",
  fields: [
    { label: "Nome completo", placeholder: "Maria Silva", type: "text" as const },
    { label: "Empresa", placeholder: "Sua Empresa LTDA", type: "text" as const },
    {
      label: "Cargo",
      placeholder: "Selecione",
      type: "select" as const,
      options: ["CEO / Fundador", "Diretor", "Gerente", "Coordenador", "Analista", "Outro"],
    },
    { label: "Email corporativo", placeholder: "maria@empresa.com.br", type: "email" as const },
    { label: "WhatsApp", placeholder: "(11) 99999-9999", type: "tel" as const },
    {
      label: "Tamanho da equipe",
      placeholder: "Selecione",
      type: "select" as const,
      options: ["1-10", "11-50", "51-200", "201-500", "500+"],
    },
  ],
  buttonText: "Solicitar demonstracao",
  calendlyPlaceholder: "Horarios disponiveis aparecerao apos o envio",
  disclaimer:
    "Suas informacoes sao protegidas e nao serao compartilhadas com terceiros.",
};
