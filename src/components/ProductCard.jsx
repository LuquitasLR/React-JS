

export function ProductCard (id,name,urlImg) {
    return (

        <div>
            <ul>
                <h5>{name}</h5>
                <img src={urlImg} alt="img" />
                <h6>{id}</h6>
            </ul>
        </div>


    )
}
