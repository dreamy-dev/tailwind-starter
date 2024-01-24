"use client";

import H2 from "../../components/typography/H2";
import Stepper from "../../components/sections/Stepper";

export default function ApplicationProcess() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="max-w-screen-l sm:text-lg dark:text-gray-400">
          <H2>Ihr Weg zu Stadler</H2>
          <p className="my-4 font-400">
            Sie möchten einsteigen und Teil unseres zugkräftigen Teams werden?
            Bringen Sie Ihre Karriere bei Stadler ins Rollen. Wir freuen uns auf
            Ihre Bewerbung für die offenen Stellen. Gerne können Sie sich auch
            spontan bei uns bewerben.
            <br />
            <br />
          </p>
          <Stepper />
          <br />
          <br />
          <p className="mb-4 font-400">
            Prüfen Sie, ob sich unter den offenen Stellen ein geeignetes Angebot
            befindet. Wir freuen uns auf Ihre Bewerbung über das Bewerbungstool
            in der entsprechenden Anzeige – klicken Sie einfach auf „Bewerben“.
            Finden Sie keine passende Stelle ausgeschrieben, dürfen Sie sich
            gerne spontan bewerben: Klicken Sie auf „Spontanbewerbung“ oberhalb
            der ausgeschriebenen Stellen und empfehlen Sie sich dort.
          </p>
        </div>
      </div>
    </section>
  );
}
