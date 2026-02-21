import { gql } from 'graphql-tag';

const movieTypeDefs = gql`
    type Movie {
        id: ID!
        name: String!
        director_name: String!
        release_date: String!
        rating: Float!
        production_house: String!
            
    }

    type Query {
        movies: [Movie]
        movie(id: ID!): Movie
        moviesByDirector(director_name: String!): [Movie]
    }

    type Mutation {

        addMovie(
            name: String!, 
            director_name: String!,
            release_date: String!, 
            rating: Float!, 
            production_house: String!): Movie

        updateMovie(id: ID!, 
            name: String, 
            director_name: String, 
            release_date: String, 
            rating: Float, 
            production_house: String): Movie

        deleteMovie(id: ID!): Movie

        createMovie(
            name: String!,
            director_name: String!,
            release_date: String!, 
            rating: Float!, 
            production_house: String!): Movie
        }
            

        `;

export default movieTypeDefs;