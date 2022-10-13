const toggleFavorite = ( id: number ) => {

    let favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );
    
    if ( favorites.includes( id ) ) { //si ya esta, entonces lo estoy queriendo sacar, copia la lista con todos los pokes menos el de id
        favorites = favorites.filter( pokeId => pokeId !== id );
    } else {
        favorites.push( id );//no esta, osea lo quiero agregar
    }

    localStorage.setItem('favorites', JSON.stringify( favorites ) );
}

const existInFavorites = ( id: number ): boolean => {

    if ( typeof window === 'undefined' ) return false;
    
    const favorites: number[] = JSON.parse( localStorage.getItem('favorites') || '[]' );

    return favorites.includes( id );
}


const pokemons = (): number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}



export default {
    existInFavorites,
    toggleFavorite,
    pokemons,
}