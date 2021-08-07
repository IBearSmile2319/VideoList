import Play from '@img/play-icon.png'
import Plus from '@img/plus-icon.png'
import removeIcon from '@img/remove-icon.png'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { setFavorite, deleteFavorite } from '../actions'
const CarouselItem = (props) => {
    const { id, cover, title, year, contentRating, duration, isList } = props
    const handleSetFavorite = () => {
        props.setFavorite({ id, cover, title, year, contentRating, duration })
    }
    const handleDeleteFavorite = (itemId) => {
        props.deleteFavorite(itemId)
    }
    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={cover} alt={title} />
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${id}`}>
                    <img 
                    className="carousel-item__details--img" 
                    src={Play} 
                    alt="Play Icon" 
                    />
                    </Link>
                    {isList ?
                        <img 
                        onClick={() => handleDeleteFavorite(id)} 
                        className="carousel-item__details--img" 
                        src={removeIcon} 
                        alt="Remove Icon" />
                        : <img
                        onClick={handleSetFavorite}
                        className="carousel-item__details--img" 
                        src={Plus} 
                        alt="Plus Icon" 
                        />
                    }

                </div>
                <p className="carousel-item__details--title">{title}</p>
                <p className="carousel-item__details--subtitle">{`${year} ${contentRating} ${duration}`}</p>
            </div>
        </div>
    )
}
CarouselItem.propTypes = {
    id: PropTypes.number,
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number
}
const mapDisplatchToProps = {
    setFavorite,
    deleteFavorite,
}
export default connect(null, mapDisplatchToProps)(CarouselItem)
