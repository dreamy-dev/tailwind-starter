import React from 'react';
import Link from 'next/link';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

export default function Submenu({ blok }) {
    return (
        <div /* href={ButtonUrlRenderer(blok.LinkLogo)} */>
            <a>{blok.main_link_1_text}</a>
        </div>
    );
}
