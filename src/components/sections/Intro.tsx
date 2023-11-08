import H2 from "../typography/H2";

export default function Intro() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light sm:text-lg">
          <H2 titleH2={"Unsere Kultur"}></H2>
          <p className="mb-4 mt-6">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="object-cover object-left h-96 scale-100 rounded-lg"
            src="https://www.stadlerrail.com/media/img/c/industrielackierer_lernende.jpg"
            alt="office content 1"
          />
          <img
            className="object-cover object-center h-96 scale-100 mt-4 h-full lg:mt-10 rounded-lg"
            src="https://www.stadlerrail.com/media/img/c/schreiner_azubi_lernende.jpg"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
}
