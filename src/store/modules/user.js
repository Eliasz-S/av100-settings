import { http } from "@/utils/axios";
import { loginData } from "@/utils/constants"; // установленные статически данные пользователя для авторизации

export default {
  namespaced: true,
  state() {
    return {
      userToken: null,
      userData: null,
      userID: null,
    };
  },
  getters: {
    userToken(state) {
      return state.userToken;
    },
    userData(state) {
      return state.userData;
    },
    userID(state) {
      return state.userID;
    },
  },
  mutations: {
    setToken(state, payload) {
      state.userToken = payload;
    },
    setUserData(state, payload) {
      state.userData = payload;
    },
    setUserID(state, payload) {
      state.userID = payload;
    },
  },
  actions: {
    login({ commit, dispatch, state }) {
      http.post("login", loginData).then((response) => {
        commit("setToken", response.data.token);
        commit("setUserID", response.data.user.id);
        if (state.userToken && state.userID) {
          dispatch("fetchUser");
        }
      });
    },
    async fetchUser({ commit, state }) {
      try {
        const response = await http.get(`user/${state.userID}`, {
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
    updateUser({ state }, dataToUpdate) {
      http.put(
        `user/${state.userID}`,
        Object.assign(state.userData, dataToUpdate),
        {
          headers: {
            "X-User-Token": state.userToken,
          },
        }
      );
    },
  },
};
