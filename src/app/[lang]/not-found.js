import ButtonPrimary from "@/src/components/elements/ButtonPrimary";
import Header from "@/src/components/sections/Header";
import Footer from "@/src/components/sections/Footer";

export default function NotFound() {
    return (
        <>
         
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary dark:text-primary">
                            404
                        </h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
                            Something's missing.
                        </p>
                        <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                            Sorry, we can't find that page. You'll find lots to
                            explore on the home page.
                        </p>
                        <div className="flex justify-center">
                            <ButtonPrimary
                                href="/"
                                position="center"
                                buttonText="Back to Home"
                            >
                                Back to Home
                            </ButtonPrimary>
                        </div>
                    </div>
                </div>
            </section>
         
        </>
    );
 
}