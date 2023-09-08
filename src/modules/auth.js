import { setItem } from "../helpers/persistaneStorage"
import AuthService from "../service/auth";
import { gettersTypes } from "./type"

const state = {
    isLoading: false,
    user: null,
    errors: null,
    isLoggedIn: null,
}

const getters = {
    [gettersTypes.curretUser]: state => {
        return state.user
    },
    [gettersTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [gettersTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    }
}


const mutations = {
    registerStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    registerSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    registerFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = false
    },

    // login
    loginStart(state) {
        state.isLoading = true
        state.user = null
        state.errors = null
        state.isLoggedIn = null
    },
    loginSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    loginFailure(state, payload) {
        state.isLoading = false
        state.errors = payload.errors
        state.isLoggedIn = false
    },

    // User
    curretUserStart(state) {
        state.isLoading = true
    },
    curretUserSuccess(state, payload) {
        state.isLoading = false
        state.user = payload
        state.isLoggedIn = true
    },
    curretUserFailure(state) {
        state.isLoading = false
        state.user = null
        state.isLoggedIn = false
    }

}

const actions = {
    register(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('registerStart');
            AuthService.register(user)
                .then(response => {
                    // console.log("Response", response.data.user);
                    context.commit('registerSuccess', response.data.user);
                    setItem('token', response.data.user.token);
                    resolve(response.data.user);
                })
                .catch(error => {
                    // console.log('Error', error.response.data);
                    context.commit('registerFailure', error.response.data);
                    reject(error.response.data);
                })
        })
    },

    // login
    login(context, user) {
        return new Promise((resolve, reject) => {
            context.commit('loginStart');
            AuthService.login(user)
                .then(response => {
                    // console.log("Response", response.data.user);
                    context.commit('loginSuccess', response.data.user);
                    setItem('token', response.data.user.token);
                    resolve(response.data.user);
                })
                .catch(error => {
                    // console.log('Error', error.response.data);
                    context.commit('loginFailure', error.response.data);
                    reject(error.response.data);
                })
        })
    },

    // curretUser

    getUser(context) {
        return new Promise((resolve) => {
            context.commit('curretUserStart');
            AuthService.getUser()
                .then(response => {
                    context.commit('curretUserSuccess', response.data.user);
                    resolve(response.data.user);
                })
                .catch(() => context.commit('curretUserFailure'))
        })
    }

}

export default {
    state,
    mutations,
    actions,
    getters,
}