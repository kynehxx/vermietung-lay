import { sanityClient } from '../../sanity'
import Image from '../../components/Image'
import Map from '../../components/Map'
import Link from "next/link"

const Property = ({
    title,
    location,
    propertyType,
    mainImage,
    images,
    pricePerNight,
    beds,
    bedrooms,
    id,
    description,
    host
}) => {
    
    return (
        <div className="container">
            <h1><b>{title}</b></h1>
            <div className="images-section">
        <Image identifier="main-image" image={mainImage} />
        <div className="sub-images-section">
          {images.map(({ _key, asset }, image) => (
            <Image key={_key} identifier="image" image={asset} />
          ))}
        </div>
      </div>

            <div className="section">
              <div className="information">
                <h2><b>{propertyType} hosted von {host?.name}</b></h2>
               <h4>{bedrooms} Zimmer + {beds} Bet(ter)</h4>
               <hr />
                  <h4>
                    <b>Informationen</b>
                  </h4>
                  <h4>
                    <b>Diese Einrichtung hat alle alltägliche Gebrauchsgegenstände vorhanden.</b>
                  </h4>
                  <p>
                    Tücher und Shampoo werden bereitgestellt
                  </p>
                  <h4>
                    <b>Regeln</b>
                  </h4>
                  <p>
                  Der Host erlaubt keine parties in dieser Einrichtung.
                  </p>
                  <p>
                  Der Host erlaubt keine Tiere.
                  </p>
                  
                  <div className="price-box">
                  <h2>CHF {pricePerNight}</h2>
                  <div className="button" onClick={() =>{ }}>Datum auswählen</div>
                </div>
              </div>
            </div>

            <hr />
            <h4>{description}</h4>

            <hr />
            <h2>Location</h2>
            <Map location={location}></Map>


        </div>
    )
}

export const getServerSideProps = async (pageContext) => {
    const pageSlug = pageContext.query.slug
    
    const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
        title,
        location,
        propertyType,
        mainImage,
        images,
        pricePerNight,
        beds,
        bedrooms,
        id,
        description,
        host->{
          id,
          name,
          slug,
          image,
          alter
        },
      }`
      const property = await sanityClient.fetch(query, {pageSlug})
      console.log(sanityClient)

      if (!property){
          return{
              props: null,
              notFound: true,
          }
      } else{
          return {
              props: {
                title: property.title,
                location: property.location,
                propertyType: property.propertyType,
                mainImage: property.mainImage,
                images: property.images,
                pricePerNight: property.pricePerNight,
                beds: property.beds,
                bedrooms: property.bedrooms,
                id: property.id,
                description: property.description,
                host: property.host,
              },
          }
      }
}

 export default Property