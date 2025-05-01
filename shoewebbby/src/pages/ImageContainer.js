import React from 'react'
import "../styles/imageContainer.css"
import { Link } from 'react-router-dom';
 
const backendURL = "https://mkcolectionsb-1.onrender.com"

const imageAnchor = [
    {url : `${backendURL}/uploads/men1.jpg`, link: "/men"},
    {url : `${backendURL}/uploads/men2.jpg`, link: "/women"},
    {url : `${backendURL}/uploads/kidq.jpg`, links: "/kids"},
    {url : `${backendURL}/uploads/slip3.webp`, link: "/sport"},
    {url : `${backendURL}/uploads/puma3.webp`, link: "/official"},
    {url : `${backendURL}/uploads/slip6.webp`, link: "/sneakers"},
    {url : `${backendURL}/uploads/slip01.webp`, link: "/slips"}
]
function ImageContainer() {
   
  return (
    <div className='imageHomes'>
      <div className='slidingImages'>
        {imageAnchor.map((image, index) => (
            <Link to={image.link} key={index}>
                <img src={image.url} alt={`Slide${index}`} />
            </Link>
        ))

        }
        {imageAnchor.map((image, index) =>(
            <Link to={image.link} key={`dup-${index}`}  >
            <img src={image.url} alt={`Slide${index}-duplicate`} />
            </Link>
        ) )  }
      </div>
    </div>
  )
}

export default ImageContainer
