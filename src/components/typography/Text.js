export default function Text({ children, styles }) {
    return (
        <p
            lang="de"
            className={`font-normal my-3 ${styles ? styles : 'text-xl'}`}
        >
            {children}
        </p>
    );
}
