const state = {
    searchedMovies: [
        {
            id: 1,
            title: 'Movie'
        },
        {
            id: 2,
            title: 'Movie2 '
        }
    ],
    faveMovies: [
        {
            id: 1,
            title: 'Movie'
        }
    ],
    newMovies: null

};

const getters = {
    allMovies: (state) => state.searchedMovies,
    newMovies: (state) => state.newMovies
};

const actions = {
    async fetchMovies({ commit }) {
        await fetch('https://api.themoviedb.org/3/movie/popular?api_key=7a2a1fc0d574e246e11bd2878076ca24&language=en-US&page=1')
        .then(response => response.json())
        .then(data => commit('setMovies', data.total_results))
        .catch(err => console.error(err));
    }
};

const mutations = {
    setMovies: (state, movies) => (state.newMovies = movies)
};

export default {
    state,
    getters,
    actions,
    mutations
}