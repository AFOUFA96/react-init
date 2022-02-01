export function Card(props) {
    const {title, subTitle, image, description, button} = props;
    return (
        <div>
            <div className="card" >
                {image && <img src={image} className="card-img-top" alt="..."/>}
                    <div className="card-body">
                        {title && <h5 className="card-title">{title}</h5>}
                        {subTitle && <h6 class="card-subtitle mb-2 text-muted">{subTitle}</h6>}
                        {description && <p className="card-text">{description}</p>}
                        {button && <a href="#" class="btn btn-primary">{button}</a>}
                    </div>
            </div>
        </div>
    );
}