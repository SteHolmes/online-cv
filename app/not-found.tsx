import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className="pageTransition">
      <div className="pageContent pageContent--centred">
        <section>
          <h2>404: Not Found</h2>
          <div className="contentCard dualColumnLayout dualColumnLayout--centered">
            <div>
              <Image className="imageContent" src="https://images.unsplash.com/photo-1721622560183-4172c8ef8934?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={100} height={150} alt="Unknown image chosen at random" />
            </div>
            <div>
              <h3>Could not find the requested resource</h3>
              <p>Check your browser URL for typos or head back to the homepage to select a different page.</p>
              <Link className="pageLink" href="/">Return to Home page</Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}