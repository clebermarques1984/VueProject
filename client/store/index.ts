// store/index.ts
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { profile } from './profiles/index';
import { counter } from './counter/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0', // a simple property
    },
    modules: {
        profile,
        counter
    }
};

export default new Vuex.Store<RootState>(store);