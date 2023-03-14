import Header from '~/components/Header'

export default function About() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
          <h1 className="pb-6 text-5xl font-bold text-gray-900 dark:text-slate-300">
            About Me
          </h1>
          <p>I'm a passionate Frontend developer</p>
        </main>
      </div>
    </>
  )
}
