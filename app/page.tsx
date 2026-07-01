import { StartDsfrOnHydration } from "../dsfr-bootstrap";
import { Button } from "@codegouvfr/react-dsfr/Button";

export default function Home() {
  return (
    <>
      <StartDsfrOnHydration />
      <main role="main" id="content">
        <div className="fr-container fr-my-6w">
          <h1>Bienvenue</h1>
          <Button
            linkProps={{
              href: "/quiz",
            }}
          >
            Quiz
          </Button>
        </div>
      </main>
    </>
  );
}
