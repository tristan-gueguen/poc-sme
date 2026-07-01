"use client";
import { Stepper } from "@codegouvfr/react-dsfr/Stepper";
import { Tile } from "@codegouvfr/react-dsfr/Tile";
import { useRouter } from "next/navigation";

export default function QuizPage() {
  const router = useRouter();
  return (
    <>
      <Stepper
        currentStep={1}
        nextTitle="Titre de la prochaine étape"
        stepCount={2}
        title="Titre de l’étape en cours"
      />
      <h2>tu préfères ?</h2>
      <div className="fr-grid-row fr-grid-row--gutters">
        <div
          style={{ width: 300, cursor: "pointer" }}
          className="fr-col-6"
          onClick={() => {
            router.push("/besoin-de-soutien?preferRemote=true");
          }}
        >
          <Tile title="En distanciel" imageSvg orientation="vertical" titleAs="h3" />
        </div>
        <div
          style={{ width: 300, cursor: "pointer" }}
          className="fr-col-6"
          onClick={() => {
            router.push("/besoin-de-soutien?preferRemote=false");
          }}
        >
          <Tile title="En présentiel" imageSvg orientation="vertical" titleAs="h3" />
        </div>
      </div>
    </>
  );
}
