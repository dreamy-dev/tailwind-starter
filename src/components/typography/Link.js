export default function Link({ children, styles, href }) {
    return (
        <>
            <a
                href={href ?? '/#'}
                className={`inline-flex items-center font-medium text-gray-900 underline underline-offset-4 hover:no-underline ${styles}`}
            >
                {children}
            </a>
        </>
    );
}
