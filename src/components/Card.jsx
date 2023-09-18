import '../App.scss'
import data from '../data'

export const Card = ({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <div className='card-body'>
        <div className='country-container'>
          <p className='country'>{location}</p>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className='title'>{title}</h2>
        <p className='date'>
          {startDate} - {endDate}
        </p>
        <p className='desc'>{description}</p>
      </div>
    </div>
  )
}
