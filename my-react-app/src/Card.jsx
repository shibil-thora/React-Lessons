import propic from './assets/propi.jpeg'
import propTypes from 'prop-types'

function Card(props) {
    
    return(
        <>
            <div className="card">
                <img className="card-image" src={propic} alt="profile picture" /> 
                <h2 className="card-title">{props.title}</h2>
                <p className="card-desc">{props.desc}</p>
            </div>
        </>
    );
}

Card.propTypes = {
    title: propTypes.string
}

Card.defaultProps = {
    title: 'kunjeethu', 
    desc: 'thooraan muttikknu'
}
export default Card