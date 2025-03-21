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
              <Image className="imageContent" src="/images/cool-cat.png" width={600} height={840} alt="Image of a cat wearing sunglasses" />
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