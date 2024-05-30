'use client';
import H2 from '../../components/typography/H2';
import Text from '../../components/typography/Text';
import SmallWidth from '../layouts/SmallWidth';

export default function MapTextTitle(props) {
    return (
        <section className="bg-white  dark:bg-gray-900 ">
            <SmallWidth>
                <div className="max-w-4xl mx-auto text-center mb-2 text-4xl font-bold ">
                    <H2>Standorte</H2>
                </div>
            </SmallWidth>
        </section>
    );
}
