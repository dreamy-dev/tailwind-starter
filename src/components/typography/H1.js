export default function H1({ children, styles, resetStyles }) {
    const defaultStyles = '';
    const H1Styles = `font-bold pt-3 mb-8 lg:mb-12 text-4xl lg:text-5xl ${
        resetStyles ? defaultStyles : ''
    } ${styles || ''}`;
    return <h1 className={H1Styles}>{children}</h1>;
}
