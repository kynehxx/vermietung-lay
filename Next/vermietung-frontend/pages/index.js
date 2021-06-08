import {sanityClient, urlFor} from '../sanity'
import Link from "next/link"

console.log(sanityClient)
const Home = ({ properties }) => {
  console.log(properties)
  return (
    <>
           {properties && (
        <div className="main">
          <div className="feed-container">
            <h1>Unterkünfte in der Nähe</h1>
            <div className="feed">
              {properties.map((property) => (
                   <Link href={`property/${property.slug.current}`}>
                  <div key={property._id} className="card">
                    <img src={urlFor(property.mainImage)} />
                    <h3>{property.title}</h3>
                    <h3>
                      <b>CHF{property.pricePerNight}/pro Nacht</b>
                    </h3>
                  </div>
                 </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[ _type == "property"]'
  const properties = await sanityClient.fetch(query)

  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    }
  } else {
    return {
      props: {
        properties,
      },
    }
  }
}

export default Home