import './css/ItemListContainer.css'

const ItemListContainer =({greeting}) => {

    return(
        <>
        <section id='lista'>
            <h2 ><a href='javascript:desplegar()'>{greeting}</a></h2>
            <ul>
                <li><a href=''>Procesadores</a></li>
                <li><a href=''>AMD</a></li>
                <li><a href=''>Intel</a></li>
                <li><a href=''>Mothers</a></li>
                <li><a href=''>Placas de video</a></li>
                <li><a href=''>AMD</a></li>
                <li><a href=''>NVIDIA</a></li>
            </ul>
        </section>

        </>

    )


}


export default ItemListContainer;