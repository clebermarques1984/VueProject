// store/counter/index.ts
import { Module, ActionTree, MutationTree } from 'vuex';
import { CounterState } from './types';
import { RootState } from '../types';

// initial state
export const state: CounterState = {
    count: 7
};

// computed properties for stores, will only re-evaluate when some of its dependencies have changed
export const getters = {
    getCount(state: CounterState): number {
        return state.count;
    }
};

// can perform asynchronous operations inside an action
export const actions: ActionTree<CounterState, RootState> = {
    increment({ commit }, payload): any {
        commit('increment', payload);
    },
    decrement({ commit }, payload): any {
        commit('decrement', payload);
    }
};

// where we perform actual state modifications
export const mutations: MutationTree<CounterState> = {
    increment(state, payload: number) {
        state.count += payload;
    },
    decrement(state, payload: number) {
        state.count -= payload;
    }
};

const namespaced: boolean = true;

export const counter: Module<CounterState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};