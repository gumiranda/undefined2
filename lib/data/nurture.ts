export const roiCalculatorData = {
  title: "Calcule sua economia mensal",
  subtitle:
    "Descubra quanto sua empresa pode economizar automatizando processos com a plataforma.",
  inputs: [
    {
      id: "employees",
      label: "Colaboradores na operacao",
      defaultValue: 10,
      min: 1,
      max: 500,
      step: 1,
      unit: "pessoas",
    },
    {
      id: "hours",
      label: "Horas gastas em tarefas manuais/semana",
      defaultValue: 15,
      min: 1,
      max: 60,
      step: 1,
      unit: "horas",
    },
    {
      id: "hourlyRate",
      label: "Custo medio por hora (R$)",
      defaultValue: 45,
      min: 15,
      max: 300,
      step: 5,
      unit: "R$/hora",
    },
  ],
  resultLabel: "Economia mensal estimada",
  resultSuffix: "/mes",
  ctaLow: {
    label: "Comecar com plano Essencial — R$ 97/mes",
    threshold: 2000,
  },
  ctaHigh: {
    label: "Falar com consultor para plano personalizado",
    threshold: 2000,
  },
};

export const resultsShowcaseData = {
  title: "Resultados reais de empresas brasileiras",
  subtitle:
    "Veja como nossos clientes transformaram suas operacoes com a plataforma.",
  results: [
    {
      company: "TechSol Informatica",
      industry: "Tecnologia",
      metric: "Reducao de custos operacionais",
      value: "40%",
      description:
        "Reduziu o tempo de processos internos de 3 dias para 4 horas com automacoes.",
    },
    {
      company: "Distribuidora Rapida",
      industry: "Logistica",
      metric: "Aumento na produtividade",
      value: "3x",
      description:
        "Triplicou a capacidade de processamento de pedidos sem contratar mais pessoas.",
    },
    {
      company: "Clinica VidaMais",
      industry: "Saude",
      metric: "Economia mensal",
      value: "R$ 28k",
      description:
        "Eliminou retrabalho e erros manuais no agendamento e faturamento.",
    },
    {
      company: "EduTech Brasil",
      industry: "Educacao",
      metric: "Tempo de onboarding",
      value: "-65%",
      description:
        "Reduziu o tempo de integracao de novos alunos de 2 semanas para 3 dias.",
    },
    {
      company: "Agro Conecta",
      industry: "Agronegocio",
      metric: "ROI em 6 meses",
      value: "12x",
      description:
        "Retorno sobre investimento de 12x nos primeiros 6 meses de uso.",
    },
    {
      company: "Construtora Horizonte",
      industry: "Construcao Civil",
      metric: "Reducao de erros",
      value: "92%",
      description:
        "Praticamente eliminou erros em orcamentos e cronogramas de obra.",
    },
  ],
};
