import Header from "~/components/Header";

export default function Links() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="container mx-auto mb-20 max-w-4xl px-6 py-6 sm:px-6 sm:py-10 md:min-h-screen lg:py-14">
          <h1 className="pb-6 text-5xl font-bold">Links</h1>
          <div className="mb-4 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .3C5.4.3.3 5.4.3 12c0 5.3 3.4 9.8 8.1 11.4.6.1.9-.2.9-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.5-.3-5.1-1.3-5.1-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.5.2 2.7.1 3 .7.8 1.2 1.9 1.2 3.2 0 4.5-2.6 5.5-5.1 5.8.4.4.8 1.1.8 2.3v3.4c0 .4.3.8.9.6 4.7-1.6 8.1-6.1 8.1-11.4 0-6.6-5.1-11.7-11.7-11.7z" />
            </svg>
            <a
              className="ml-4 text-2xl"
              href="https://github.com/Plesin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
          <div className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="30"
              height="30"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
            <a
              className="ml-4 text-2xl"
              href="https://www.linkedin.com/in/radek-pleska%C4%8D-01379620a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
