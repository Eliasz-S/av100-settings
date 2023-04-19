import { http } from "@/utils/axios";
import { loginData } from "@/utils/constants";

export default {
  namespaced: true,
  state() {
    return {
      userToken: null,
      userData: null,
    };
  },
  getters: {
    userToken(state) {
      return state.userToken;
    },
    userData(state) {
      return state.userData;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.userToken = payload;
    },
    setUserData(state, payload) {
      state.userData = payload;
    },
  },
  actions: {
    login({ commit, dispatch }) {
      http.post("login", loginData).then((response) => {
        commit("setToken", response.data.token);
        dispatch("fetchUser");
      });
    },
    async fetchUser({ commit, state }) {
      try {
        const response = await http.get("user", {
          headers: {
            "X-User-Token": state.userToken,
          },
        });
        if (response.data) {
          commit("setUserData", response.data);
        }
      } catch (e) {
        console.error("Ошибка при получении данных пользователя", e);
      }
    },
  },
};
