"use client";

import ContactForm from "@/components/sections/ContactForm";
import HeroText from "@/components/sections/HeroText";

export default function Contact() {
  return (
    <>
      <HeroText
        title="Weltweit für Sie da"
        leadText="Wir sind gerne für Sie da. Senden Sie uns eine Nachricht."
      ></HeroText>
      <ContactForm></ContactForm>
    </>
  );
}
