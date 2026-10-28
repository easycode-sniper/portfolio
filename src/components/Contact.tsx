"use client";

import { useLang } from "@/context/LangContext";
import { Button } from "./ui/Button";
import { Section } from "./ui/Section";
import { LinkedInIcon, MailIcon, PinIcon } from "./ui/icons";

export function Contact() {
  const { t } = useLang();

  return (
    <Section id="contact" title={t.contact.title} intro={t.contact.text}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap gap-3">
          <Button href={`mailto:${t.contact.email}`}>
            <MailIcon />
            {t.contact.email}
          </Button>
          <Button
            href={t.contact.linkedin}
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </Button>
        </div>
        <p className="inline-flex items-center gap-2 text-sm text-muted">
          <PinIcon />
          {t.contact.location}
        </p>
      </div>
    </Section>
  );
}
