<template>
  <div>
    <b-alert v-model="show" class="custom-alert" variant="success" fade>
      Сохранено.
    </b-alert>
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
              <b-form-input id="company" :value="userData?.companyname" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="login">Логин</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="login" :value="userData?.login" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="phone-number">Номер телефона</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="phone-number" :value="userData?.phone" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="name">Имя</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="name" :value="userData?.fname" />
            </b-col>
          </b-row>
          <b-row class="row mb-3">
            <b-col cols="3">
              <label for="surname">Фамилия</label>
            </b-col>
            <b-col sm="7">
              <b-form-input id="surname" :value="userData?.lname" />
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
              name="off"
              value="off"
              class="py-3 border-bottom"
              @change="changeNotificationMethod"
            >
              &nbsp; Выкл
            </b-form-radio>
            <b-row class="py-3">
              <b-col>
                <b-form-radio
                  v-model="selected"
                  :aria-describedby="ariaDescribedby"
                  name="email"
                  value="Email"
                  @change="changeNotificationMethod"
                >
                  &nbsp; Email
                </b-form-radio>
              </b-col>
              <b-col cols="7">
                <b-form-input @input="emailInput" v-model="data.email" />
              </b-col>
            </b-row>
          </b-form-group>
          <!-- В данном случае скорее заготовка кнопки, пока не отправляющая данных на сервер, так как на странице settings она также не отправляет никаких данных -->
          <save-button-component :onClick="applyAllChanges">
            Сохранить
          </save-button-component>
        </b-col>
      </b-row>
      <!-- Конец блока с настройкой оповещений -->
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SaveButtonComponent from "./SaveButtonComponent.vue";

export default {
  name: "ProfileSettingsComponent",
  components: {
    SaveButtonComponent,
  },
  updated() {
    this.fetchData();
  },
  computed: {
    ...mapGetters("user", ["userData"]),
  },
  data() {
    return {
      show: false, // v-model алерта об успешном сохранении данных
      selected: null, // v-model радио кнопок выбора метода оповещения пользователя
      data: {
        email: "",
      },
    };
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    emailInput() {
      this.updateUser(this.data);
    }, // метод для изменения email пользователя
    fetchData() {
      this.selected = this.userData.notifytypestring;
      this.data.email = this.userData.email;
    }, // метод для отображения актуальных данных после перезагрузки страницы
    changeNotificationMethod() {
      switch (this.selected) {
        case "off":
          this.updateUser({
            sendMethod: "-1",
            notifytype: "-1",
            notifytypestring: "off",
          });
          break;
        case "Email":
          this.updateUser({
            sendMethod: "2",
            notifytype: "2",
            notifytypestring: "Email",
          });
          break;
      }
    }, // метод для изменения способа оповещения пользователя
    applyAllChanges() {
      this.show = "5"; // алерт исчезает через 5 секунд
    },
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 1px solid grey;
}

.custom-alert {
  position: fixed;
  top: 0;
  left: 45%;
}
</style>
