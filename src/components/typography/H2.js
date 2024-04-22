const H2 = ({ children, styles, resetStyles }) => {
    const defaultStyles = '';
    const H2Styles = ` ${
        resetStyles
            ? defaultStyles
            : 'font-semibold text-3xl lg:text-4xl mb-6 lg:mb-8'
    } ${styles || ''}`;
    return <h2 className={H2Styles}>{children}</h2>;
};

export default H2;
