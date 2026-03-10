"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { dualCtaPlans, checkoutSelfServiceData } from "@/lib/data/conversion";
import SectionWrapper from "../_shared/section-wrapper";
import SectionHeading from "../_shared/section-heading";
import PixQrCode from "../_shared/pix-qr-code";
import { cn } from "@/lib/utils";
import type { SectionProps } from "../_shared/types";
import {
  CreditCard,
  Lock,
  ShieldCheck,
  Copy,
  Check,
  Clock,
  CheckCircle2,
  QrCode,
  FileText,
} from "lucide-react";

const mockPixCode =
  "00020126580014br.gov.bcb.pix0136a1b2c3d4-e5f6-7890-abcd-ef12345678905204000053039865405970058BR";
const mockBoletoNumber =
  "23793.38128 60000.000003 00000.000400 1 84340000009700";

type PaymentTab = "pix" | "cartao" | "boleto";

export default function CheckoutSelfService({
  className,
  id,
}: SectionProps) {
  const plan = dualCtaPlans[1]; // Pro plan
  const [tab, setTab] = useState<PaymentTab>("pix");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [copied, setCopied] = useState(false);
  const [seconds, setSeconds] = useState(600);

  useEffect(() => {
    if (status === "success" || seconds <= 0) return;
    if (tab !== "pix") return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [status, seconds, tab]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("success"), 2000);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const tabs: { key: PaymentTab; label: string; icon: React.ReactNode }[] = [
    { key: "pix", label: "PIX", icon: <QrCode className="h-4 w-4" /> },
    { key: "cartao", label: "Cartao", icon: <CreditCard className="h-4 w-4" /> },
    { key: "boleto", label: "Boleto", icon: <FileText className="h-4 w-4" /> },
  ];

  return (
    <SectionWrapper id={id ?? "checkout-self-service"} className={className}>
      <SectionHeading
        title={checkoutSelfServiceData.title}
        subtitle={checkoutSelfServiceData.subtitle}
      />

      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-(--radius-section)">
        <div className="relative z-10 grid grid-cols-1 gap-6 p-2 md:grid-cols-5">
          {/* Payment form */}
          <div className="col-span-1 rounded-(--radius-card) border border-border bg-card p-6 md:col-span-3">
            {/* Tabs */}
            <div className="mb-6 flex gap-1 rounded-(--radius-card) bg-muted p-1">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setTab(t.key);
                    setStatus("idle");
                  }}
                  className={cn(
                    "flex flex-1 items-center justify-center gap-1.5 rounded-(--radius-button) px-3 py-2 text-sm font-medium transition-colors",
                    tab === t.key
                      ? "bg-card text-section-heading shadow-sm"
                      : "text-muted-foreground hover:text-section-heading"
                  )}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {/* PIX tab */}
              {tab === "pix" && (
                <motion.div
                  key="pix"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col items-center"
                >
                  {status !== "success" ? (
                    <>
                      <PixQrCode size={160} />
                      <div className="mt-4 flex items-center gap-2 text-sm text-section-subheading">
                        <Clock className="h-4 w-4" />
                        <span>
                          Expira em{" "}
                          <span className="font-mono font-semibold text-section-heading">
                            {String(minutes).padStart(2, "0")}:
                            {String(secs).padStart(2, "0")}
                          </span>
                        </span>
                      </div>
                      <div className="mt-4 w-full">
                        <label className="mb-1.5 block text-xs font-medium text-section-subheading">
                          PIX Copia e Cola
                        </label>
                        <div className="flex gap-2">
                          <input
                            readOnly
                            value={mockPixCode}
                            className="flex-1 truncate rounded-(--radius-input) border border-border bg-muted px-3 py-2 text-xs text-section-heading"
                          />
                          <button
                            onClick={() => handleCopy(mockPixCode)}
                            className={cn(
                              "flex items-center gap-1 rounded-(--radius-button) px-3 py-2 text-xs font-medium transition-colors",
                              copied
                                ? "bg-green-500/10 text-green-500"
                                : "bg-primary text-primary-foreground hover:opacity-90"
                            )}
                          >
                            {copied ? (
                              <>
                                <Check className="h-3.5 w-3.5" /> Copiado
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" /> Copiar
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => setStatus("success")}
                        className="mt-4 rounded-(--radius-button) border border-border bg-card px-4 py-2 text-sm font-medium text-section-heading hover:bg-muted"
                      >
                        Simular pagamento
                      </button>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center py-6"
                    >
                      <CheckCircle2 className="h-12 w-12 text-green-500" />
                      <p className="mt-3 font-semibold text-section-heading">
                        Pagamento confirmado!
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Card tab */}
              {tab === "cartao" && (
                <motion.div
                  key="cartao"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                >
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                        Nome no cartao
                      </label>
                      <input
                        type="text"
                        placeholder="Maria da Silva"
                        className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                        Numero do cartao
                      </label>
                      <input
                        type="text"
                        placeholder="4242 4242 4242 4242"
                        maxLength={19}
                        className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                          Validade
                        </label>
                        <input
                          type="text"
                          placeholder="MM/AA"
                          maxLength={5}
                          className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                          CVV
                        </label>
                        <input
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-section-subheading">
                        CPF
                      </label>
                      <input
                        type="text"
                        placeholder="000.000.000-00"
                        maxLength={14}
                        className="w-full rounded-(--radius-input) border border-border bg-card px-4 py-2.5 text-sm text-section-heading placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className={cn(
                        "w-full rounded-(--radius-button) px-6 py-2.5 text-sm font-semibold transition-colors",
                        status === "success"
                          ? "bg-green-500 text-white"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      )}
                    >
                      {status === "idle" && `Pagar R$ ${plan.monthlyPrice},00`}
                      {status === "loading" && (
                        <motion.span
                          animate={{ opacity: [1, 0.4, 1] }}
                          transition={{ duration: 1.2, repeat: Infinity }}
                        >
                          Processando...
                        </motion.span>
                      )}
                      {status === "success" && "Pagamento confirmado ✓"}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* Boleto tab */}
              {tab === "boleto" && (
                <motion.div
                  key="boleto"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-full rounded-(--radius-card) bg-muted p-4">
                    <p className="mb-2 text-sm font-medium text-section-heading">
                      Linha digitavel
                    </p>
                    <div className="flex gap-2">
                      <input
                        readOnly
                        value={mockBoletoNumber}
                        className="flex-1 truncate rounded-(--radius-input) border border-border bg-card px-3 py-2 text-xs font-mono text-section-heading"
                      />
                      <button
                        onClick={() => handleCopy(mockBoletoNumber)}
                        className={cn(
                          "flex items-center gap-1 rounded-(--radius-button) px-3 py-2 text-xs font-medium transition-colors",
                          copied
                            ? "bg-green-500/10 text-green-500"
                            : "bg-primary text-primary-foreground hover:opacity-90"
                        )}
                      >
                        {copied ? (
                          <>
                            <Check className="h-3.5 w-3.5" /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" /> Copiar
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-muted-foreground">
                    O boleto pode levar ate 3 dias uteis para ser compensado.
                    Sua conta sera ativada apos a confirmacao.
                  </p>
                  <button
                    onClick={() => setStatus("success")}
                    className="mt-4 rounded-(--radius-button) border border-border bg-card px-4 py-2 text-sm font-medium text-section-heading hover:bg-muted"
                  >
                    Simular compensacao
                  </button>
                  {status === "success" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 text-sm font-medium text-green-500"
                    >
                      Boleto compensado com sucesso!
                    </motion.p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Security badges */}
            <div className="mt-6 flex items-center justify-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Lock className="h-3.5 w-3.5" /> SSL 256-bit
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> PCI Compliant
              </span>
            </div>
          </div>

          {/* Order summary */}
          <div className="col-span-1 rounded-(--radius-card) border border-border bg-card p-6 md:col-span-2">
            <h3 className="text-lg font-semibold text-section-heading">
              Resumo do pedido
            </h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-section-subheading">
                  Plano {plan.name}
                </span>
                <span className="font-medium text-section-heading">
                  R$ {plan.monthlyPrice},00/mes
                </span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex justify-between">
                  <span className="font-semibold text-section-heading">
                    Total
                  </span>
                  <span className="font-semibold text-section-heading">
                    R$ {plan.monthlyPrice},00
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-(--radius-card) bg-muted p-4">
              <h4 className="text-sm font-medium text-section-heading">
                Incluso no plano
              </h4>
              <ul className="mt-2 space-y-1.5">
                {plan.features.slice(0, 5).map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2 text-xs text-section-subheading"
                  >
                    <span className="text-primary">&#10003;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 rounded-(--radius-card) border border-border p-3">
              <p className="text-xs text-muted-foreground">
                Garantia de 30 dias. Se nao ficar satisfeito, devolvemos 100% do
                seu investimento.
              </p>
            </div>
          </div>
        </div>

        <BackgroundBeams className="pointer-events-none" />
      </div>
    </SectionWrapper>
  );
}
