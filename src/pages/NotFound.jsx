import Seo from '../components/Seo'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" path="/404" description="The page you are looking for could not be found." />
      <section className="flex min-h-screen items-center bg-brand-800 text-cream">
        <div className="container-page text-center">
          <p className="font-serif text-7xl text-brand-200">404</p>
          <h1 className="mt-4 text-3xl sm:text-4xl">This page took a wrong turn</h1>
          <p className="mx-auto mt-4 max-w-md text-cream/90">
            The page you are looking for has moved or no longer exists. Let&rsquo;s get you back on
            track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/" variant="light">
              Back to Home
            </Button>
            <Button to="/start-my-project" variant="outlineLight">
              Start My Project
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
