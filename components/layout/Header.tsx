"use client";
import { Header as DsfrHeader } from "@codegouvfr/react-dsfr/Header";
import { Badge } from "@codegouvfr/react-dsfr/Badge";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "J'ai besoin de soutien",
    path: "/besoin-de-soutien",
    key: "need",
  },
  {
    title: "Je veux comprendre",
    path: "/comprendre",
    key: "/understand",
  },
  {
    title: "Je veux aider",
    path: "/aider",
    key: "help",
  },
];

export function Header() {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <DsfrHeader
      brandTop={
        <>
          INTITULE
          <br />
          OFFICIEL
        </>
      }
      homeLinkProps={{
        href: "/",
        title: "Accueil",
      }}
      navigation={navItems.map((item) => ({
        text: item.title,
        linkProps: { target: "self", href: item.path },
        isActive: pathname === item.path,
      }))}
      serviceTagline="Prendre soin de sa santé mentale quand on est étudiant"
      serviceTitle={
        <>
          Santé Mentale .Etudiants{" "}
          <Badge as="span" noIcon severity="success">
            Beta
          </Badge>
        </>
      }
    />
  );
}
