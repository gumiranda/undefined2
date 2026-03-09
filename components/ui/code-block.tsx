"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  className,
}: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function highlight() {
      const { codeToHtml } = await import("shiki");
      const result = await codeToHtml(code, {
        lang: language,
        theme: "github-dark",
      });
      if (!cancelled) setHtml(result);
    }
    highlight();
    return () => { cancelled = true; };
  }, [code, language]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-(--radius-card) border border-border bg-surface-sunken",
        className
      )}
    >
      {filename && (
        <div className="flex items-center justify-between border-b border-border px-4 py-2 text-xs text-muted-foreground">
          <span>{filename}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 z-10 rounded-(--radius-badge) border border-border bg-surface-elevated px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-section-heading"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        {html ? (
          <div
            className="overflow-x-auto p-4 text-sm [&_pre]:!bg-transparent [&_code]:!bg-transparent"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : (
          <pre className="overflow-x-auto p-4 text-sm text-muted-foreground">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
