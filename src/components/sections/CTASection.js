'use client';

import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import Text from '../typography/Text';

export default function CTASection(props) {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="bg-primaryBgcGray mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <H2>{props.title}</H2>
                    <div className="my-6">
                        <Text>
                            Du hast deine passende Stelle noch nicht gefunden?
                            Sende uns deinen Lebenslauf zu und sei der Erste,
                            der berücksichtigt wird, wenn eine neue
                            Stellenanzeige erstellt wird.
                        </Text>
                    </div>
                    <ButtonPrimary
                        position="center"
                        href="https://recruitingapp-2787.umantis.com/Vacancies/Choose/InitiativeApplication/1?lang=ger"
                    />
                </div>
            </div>
            <div className="mt-8 gap-4 sm:mt-12 sm:grid sm:grid-cols-4">
                <img
                    className="col-span-2 mb-4 h-80 w-full scale-100 object-cover sm:block"
                    src={
                        props.img ??
                        'https://www.stadlerrail.com/media/img/c/schweisser_berufserfahrene.jpg'
                    }
                    alt="Content gallery 1"
                />
                <img
                    className="col-span-1 hidden h-80 scale-100 object-cover sm:block"
                    src={
                        props.img2 ??
                        'https://www.stadlerrail.com/media/img/c/produktionsmechaniker_lernende.jpg'
                    }
                    alt="Content gallery 2"
                />
                <img
                    className="col-span-1 hidden h-80 scale-100 object-cover sm:block"
                    src={
                        props.img3 ??
                        'https://www.stadlerrail.com/media/img/c/interne_transporte_berufserfahrene.jpg'
                    }
                    alt="Content gallery 3"
                />
            </div>
        </section>
    );
}
