import { ArrowLink, Heading } from "@/components/ui/primitives";

export default function NotFound() {
  return (
    <section className="container" style={{ paddingTop: "clamp(160px, 22vh, 240px)", paddingBottom: 40 }}>
      <p className="eyebrow" data-anim="fade">
        Greška 404
      </p>
      <div style={{ marginTop: 28 }}>
        <Heading as="h1" size="display" lines={["Ovaj kadar", "je promašen"]} />
      </div>
      <p className="lead" data-anim="fade" style={{ marginTop: 32, marginBottom: 36 }}>
        Stranica koju tražiš ne postoji ili je premeštena. Vrati se na početak i pogledaj radove.
      </p>
      <ArrowLink href="/">Nazad na početnu</ArrowLink>
    </section>
  );
}
