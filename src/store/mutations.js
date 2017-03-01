import getters from './getters'

const state = {
	header: true,
	loading: false,
	test:true
};

const mutations = {
	showHeader(state) {
		state.header = true
	},
	hideHeader(state) {
		state.header = false;
	},
	showLoading(state) {
		state.loading = true;
	},
	hideLoading(state) {
		state.loading = false;
	},testHeader(state){
		state.test=false;
	}
};

export default {
	state,
	mutations,
	getters
}