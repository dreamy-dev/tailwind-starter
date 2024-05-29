import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import { ArrowForward } from '../icons/ArrowForward';

export default function ButtonPrimary(props) {
    const containerStyles = {
        display: 'flex',
        /* TODO: Check how we can manage the position styles from CMS or with Logic */
        /* justifyContent:
      props.position === "left"
        ? "flex-start"
        : position === "center"
        ? "center"
        : "flex-end",
    alignItems: "center", */
    };
    const primaryButtonStyles = `cursor-pointer bg-stadlergradient text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2`;

    return (
        <div style={containerStyles}>
            <a
                ariaLabel="Button"
                className={primaryButtonStyles}
                href={props.href}
            >
                <p>{props.buttonText}</p>
                <ArrowForward styles="fill-white w-3 h-3" />
            </a>
        </div>
    );
}
