(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    interface Movie{
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }
    // Crear una película
    function createMovie({title, description, rating, cast}:Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }


    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        
        if( isDead) return 1500;
        if (isSeparated) return 2500;
        
        return isRetired ? 3000 : 400;
        
        // let result;
        // if ( isDead ) {
        //     result = 1500;
        // } else {
        //     if ( isSeparated ) {
        //         result = 2500;
        //     } else {
        //         if ( isRetired ) {
        //             result = 3000;
        //         } else {
        //             result = 4000; 
        //         }
        //     }
        // }
        
        // return result;
    }

    


})();
