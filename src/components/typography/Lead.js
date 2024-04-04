export default function Lead({ children }) {
    return (
        <p
            lang="de"
            className="text-black font-normal leading-8 lg:leading-10 text-xl lg:text-3xl mb-8 lg:mb-12"
        >
            {children}
        </p>
    );
}
