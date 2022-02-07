export function Card(props) {
    const {title, subTitle, image, description, button, fonction, id, classes} = props;
    return (
        <>
            <div className={"card " + (classes || "")} onClick ={fonction || ''} id={id}  >
                {image && <img src={image} className="card-img-top" alt="..."/>}
                    <div className="card-body">
                        {title && <h5 className="card-title " >{title}</h5>}
                        {subTitle && <h6 className="card-subtitle mb-2 text-muted">{subTitle}</h6>}
                        {description && <p className="card-text">{description}</p>}
                        {button && <a href="#" className="btn btn-primary">{button}</a>}
                    </div>
            </div>
        </>
    );
}