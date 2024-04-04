const H3 = ({ styles, children, resetStyles, onClick }) => {
    const defaultStyles = 'font-bold text-xl lg:text-2xl mb-4 lg:mb-6';
    const H3Styles = resetStyles
        ? defaultStyles
        : `${defaultStyles} ${styles || ''}`;
    return (
        <h3 lang="de" className={H3Styles} onClick={onClick}>
            {children}
        </h3>
    );
};

export default H3;
