import { Link } from "react-router-dom";
const  Card = (props) =>{
    const {route, title, subTitle, image, description, button, fonction, id, classes} = props;
    
    const inner = (
        <>
            <div className={"card " + (classes || "")} onClick ={fonction || ''} id={id}  >
                {image && <img src={image} id="img" className="card-img-top" alt="..."/>}
                    <div className="card-body">
                        {title && <h5 className="card-title " >{title}</h5>}
                        {subTitle && <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>}
                        {description && <p className="card-text">{description}</p>}
                        {button && <a href="#" className="btn btn-primary">{button}</a>}
                    </div>
            </div>
        </>
    );
    
    return (
        <div>
            {route ? <Link className="myColor text-decoration-none" to = {route}>{inner}</Link> : inner}
        </div>
    );
};
export default Card;