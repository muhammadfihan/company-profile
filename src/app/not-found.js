export default function NotFound() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <section className="bg-white animate-fade-up animate-once animate-duration-[800ms] animate-delay-200 animate-ease-in">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-7xl text-red-600 ">
              Error
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">
              Something&#39;s missing.
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 ">
              Sorry, we can&#39;t find that page. You&#39;ll find lots to explore on the home page.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
