import MovieModel from '../models/Movie.js';

// Resolvers define the technique for fetching the types defined in the schema.
// const resolvers = {
//     Query: {
//         movies: async () =>{

//         await MovieModel.find()

//         },

//         movie: async (_, { id }) => {
//             return  await MovieModel.findById(id),
//     }
// },

//     Mutation: {
//         addMovie: async (_, { name, director_name, releaseDate, rating, production_house }) => {
//             const newMovie = new MovieModel({ name, director_name, releaseDate, rating, production_house });
//             return await newMovie.save();
//         },
//         updateMovie: async (_, { id, name, director_name, releaseDate, rating, production_house }) => {
//             return await MovieModel.findByIdAndUpdate(
//                 id,
//                 { name, director_name, releaseDate, rating, production_house },
//                 { new: true }
//             );
//         },
//         deleteMovie: async (_, { id }) => {
//             return await MovieModel.findByIdAndDelete(id);
//         },
//         createMovie: async (_, { name, director_name, releaseDate, rating, production_house }) => {
//             const newMovie = new MovieModel({ name, director_name, releaseDate, rating, production_house });
//             return await newMovie.save();
//         },
//     },
// };


const movieResolvers = {
    Query: {
        movies: async () => {
            return await MovieModel.find();
        },
        movie: async (parent, args) => { 
            return await MovieModel.findById(args.id);
        },
        moviesByDirector: async (_, { director_name }) =>  {
            return await MovieModel.find({ director_name });
        }
    },
    Mutation: {
        createMovie: async (parent, args) => {
            const newMovie = new MovieModel(args);
            return await newMovie.save();
        },
        updateMovie: async (parent, args) => {
            const { id, ...updateData } = args;
            return await MovieModel.findByIdAndUpdate(id, updateData, { new: true });
        },
        deleteMovie: async (parent, args) => {
            return await MovieModel.findByIdAndDelete(args.id);
        }
    }
}

export default movieResolvers;

// export default resolvers;