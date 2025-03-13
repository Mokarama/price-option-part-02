import link from 'daisyui/components/link';
import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
      
            <li className="mr-12" key={route.id}><a href={route.path}>{route.name}</a></li>
        
    );
};
link.propTypes = {
    route: PropTypes.object, 
}
export default Link;