export default function Text({ children, styles }) {
    return (
        <p
            className={`font-normal text-base lg:text-xl my-2 lg:my-3 ${styles ? styles : ' '}`}
        >
            {children}
        </p>
    );
}
