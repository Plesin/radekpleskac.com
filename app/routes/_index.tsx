import Header from '~/components/Header'

export default function Index() {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <main className="container md:min-h-screen px-6 sm:px-6 py-6 sm:py-10 lg:py-14 mb-20 mx-auto max-w-4xl">
          <p>Some text on home page</p>
        </main>
      </div>
    </>
  )
}
