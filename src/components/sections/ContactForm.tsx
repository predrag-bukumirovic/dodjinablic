"use client";

import { useState, type FormEvent } from "react";
import { cx } from "@/lib/cx";
import { site } from "@/data/site";
import { ArrowUpRight, Check } from "lucide-react";
import s from "./ContactForm.module.scss";

const TYPES = ["Portret", "Urbani portret", "Noćna fotografija", "Lični brend", "Noćni život / događaj", "Editorijal / retro", "Nešto drugo"];

type Status = "idle" | "sent";

export default function ContactForm() {
  const [types, setTypes] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [copied, setCopied] = useState(false);

  const toggle = (t: string) => setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const date = String(data.get("date") || "").trim();
    const message = String(data.get("message") || "").trim();

    const body = [
      `Zdravo Nikola, ja sam ${name}.`,
      types.length ? `Zanima me: ${types.join(", ")}.` : "",
      date ? `Okvirni termin: ${date}.` : "",
      "",
      message,
      "",
      `Kontakt: ${contact}`,
    ]
      .filter((l, i, arr) => l !== "" || (arr[i - 1] ?? "") !== "")
      .join("\n");

    if (site.email) {
      const subject = `Upit za fotkanje — ${name}`;
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("sent");
      return;
    }

    // Bez email adrese: kopiraj poruku i otvori Instagram DM
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    window.open(site.instagram.business.dm, "_blank", "noopener");
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <div className={s.done} role="status">
        <span className={s.doneIcon}>
          <Check />
        </span>
        <h3>Hvala, poruka je spremna!</h3>
        <p>
          {site.email
            ? "Otvorio se tvoj email program sa popunjenom porukom — samo klikni Pošalji."
            : copied
              ? `Poruka je kopirana. U Instagram prozoru koji se otvorio nalepi je u DM za ${site.instagram.business.handle} i pošalji.`
              : `Otvorio se Instagram — piši mi direktno na ${site.instagram.business.handle}.`}
        </p>
        <button className={s.again} onClick={() => setStatus("idle")}>
          Pošalji novu poruku
        </button>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={onSubmit} data-anim="stagger">
      <div className={s.row}>
        <label className={s.field}>
          <span>Kako se zoveš?</span>
          <input name="name" required autoComplete="name" placeholder="Ime i prezime" />
        </label>
        <label className={s.field}>
          <span>Gde da ti odgovorim?</span>
          <input name="contact" required placeholder="Email, telefon ili @instagram" />
        </label>
      </div>

      <fieldset className={s.types}>
        <legend>Šta te zanima?</legend>
        <div className={s.chips}>
          {TYPES.map((t) => (
            <button
              type="button"
              key={t}
              className={cx(s.chip, types.includes(t) && s.chipOn)}
              aria-pressed={types.includes(t)}
              onClick={() => toggle(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <label className={s.field}>
        <span>Okvirni datum (nije obavezno)</span>
        <input name="date" placeholder="npr. kraj meseca, vikend, proleće…" />
      </label>

      <label className={s.field}>
        <span>Ispričaj mi ideju</span>
        <textarea name="message" required rows={5} placeholder="Šta zamišljaš, gde, sa kim, kakvu atmosferu…" />
      </label>

      <div className={s.submitRow}>
        <p className={s.note}>
          {site.email
            ? "Poruka se otvara u tvom email programu."
            : `Poruka se kopira i šalje preko Instagrama (${site.instagram.business.handle}).`}
        </p>
        <button type="submit" className={s.submit}>
          <span>Pošalji upit</span>
          <ArrowUpRight />
        </button>
      </div>
    </form>
  );
}
