<template>
  <div>
    <b-container>
      <!-- Блок с данными пользователя -->
      <b-row class="row my-5 mx-0">
        <b-col cols="4">
          <b-row><b>Учётная запись</b></b-row>
        </b-col>
        <b-col>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="company">Компания</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="company" :value="userData.companyname" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="login">Логин</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="login" :value="userData.login" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="phone-number">Номер телефона</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="phone-number" :value="userData.phone" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="name">Имя</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="name" :value="userData.fname" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="surname">Фамилия</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="surname" :value="userData.lname" />
              <b-form-text>* Не обязательно</b-form-text>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <!-- Конец блока с данными пользователя -->
      <b-row class="row my-5 mx-0">
        <!-- Блок с настройкой оповещений -->
        <b-col cols="4">
          <b-row><b>Оповещения о новых подборках</b></b-row>
        </b-col>
        <b-col>
          <p style="font-size: 14px; text-align: left">
            Выберите, куда будут приходить уведомления при появлении
            автомобилей, которые подходят под критерии вашей подборки.
          </p>
          <b><b-row class="row mt-3 mx-0">Уведомления</b-row></b>
          <b-form-group v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="selected"
              :aria-describedby="ariaDescribedby"
              name="some-radios"
              value="A"
              class="py-3 border-bottom"
            >
              &nbsp; Выкл
            </b-form-radio>
            <b-row class="py-3">
              <b-col>
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="some-radios"
                  value="B"
                >
                  &nbsp; Email
                </b-form-radio>
              </b-col>
              <b-col cols="5">
                <b-form-input @input="emailInput" :value="userData?.email" />
              </b-col>
            </b-row>
          </b-form-group>
          <SaveButtonComponent />
        </b-col>
      </b-row>
      <!-- Конец блока с настройкой оповещений -->
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SaveButtonComponent from "./SaveButtonComponent.vue";

export default {
  name: "ProfileSettingsComponent",
  components: {
    SaveButtonComponent,
  },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  data() {
    return {
      selected: "",
    };
  },
  methods: {
    emailInput() {},
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid grey;
}
</style>
