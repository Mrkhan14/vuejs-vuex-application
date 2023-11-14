import ArticlesService from "../service/articles";

const state = {
    data: null,
    isLoading: false,
    error: null,
    articleDetai: null
}

const mutations ={
    getArticlesStart(state){
        state.isLoading = true
        state.data = null
        state.error = null
        state.articleDetai = null

    },
    getArticlesSuccess(state, payload){
        state.isLoading = false
        state.data = payload
    },
    getArticlesFailure(state){
        state.isLoading= false
    },

    getArticleDetailStart(state){
        state.isLoading = true
        state.articleDetai = null
        state.data = null
        state.error = null
    },
    getArticleDetailSuccess(state, payload){
        state.isLoading = false
        state.articleDetai = payload
    },
}

const actions = {
    articles(context){
        return new Promise((resolve, reject) =>{
            context.commit('getArticlesStart')
            ArticlesService.articles()
            .then(response =>{
                context.commit('getArticlesSuccess', response.data.articles)
                resolve(response.data.articles)
                // console.log("Articles boshladim resolve",response.data.articles);
            })
            .catch(() => context.commit('getArticlesFailure'))
        })
    },
    articleDetai(context, slug){
        return new Promise((resolve, reject) =>{
            context.commit('getArticleDetailStart')
            ArticlesService.articleDetail(slug)
            .then(response =>{
                context.commit('getArticleDetailSuccess', response.data.article)
                resolve(response.data.article)
                // console.log('salom', response.data.article );
            })
            .catch(() => context.commit('getArticlesFailure'))
        })
    }
}

export default {
    state,
    mutations,
    actions,
}
