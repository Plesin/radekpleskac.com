import Header from '~/components/Header'

export default function Index() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
          <h1 className="pb-8 text-3xl md:text-5xl font-bold leading-tight">
            A freelance frontend developer passionate about the craft of
            developing performant, usable, accessible web applications.
          </h1>
          <p className="text-lg  md:text-2xl mb-2">
            Hi! I'm Radek, a web developer based in Brno, Czech Republic. I'm
            currently open for new projects. Please check out the projects
            section or my Github, Linked.
          </p>
        </main>
      </div>
    </>
  )
}
