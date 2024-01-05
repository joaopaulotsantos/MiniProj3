<template>
  <section class="page-section">
     <b-container>
      <HeaderPage title="Editar Utilizador"/>
   
      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group">
              <input
                v-model="expert.name"
                type="text"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="escreve nome"
                required
              />
            </div>
            <div class="form-group">
              <select id="sltType" class="form-control form-control-lg" v-model="expert.type">
                <option value>-- SELECIONA TIPO --</option>
                <option value="admin">ADMINISTRADOR</option>
                <option value="expert">UTILIZADOR NORMAL</option>
              </select>
            </div>
            <div class="form-group">
            <input
              v-model="expert.birth_date"
              type="date"
              onmouseenter="(this.type='date')"
              onmouseleave="(this.type='text')"
              class="form-control form-control-lg"
              id="txtBirthDate"
              placeholder="escreve data de nascimento"
              required
            />
            </div>
            <div class="form-group">
              <textarea
                id="txtDescription"
                class="form-control form-control-lg"
                placeholder="escreve descrição"
                cols="30"
                rows="10"
                v-model="expert.description"
                required
              ></textarea>
            </div>
            <div class="form-group">
              <input
                v-model="expert.location.city"
                type="text"
                class="form-control form-control-lg"
                id="txtCity"
                placeholder="escreve cidade"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="expert.location.country"
                type="text"
                class="form-control form-control-lg"
                id="txtCountry"
                placeholder="escreve país"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="expert.gamification.points"
                type="text"
                min="0"
                onmouseenter="(this.type='number')"
                onmouseleave="(this.type='text')"
                class="form-control form-control-lg"
                id="txtPoints"
                placeholder="escreve pontos"
                
              />
            </div>
              <div class="form-group">
              <input
                v-model="expert.gamification.quiz"
                type="text"
                min="0"
                onmouseenter="(this.type='number')"
                onmouseleave="(this.type='text')"
                class="form-control form-control-lg"
                id="txtCountry"
                placeholder="escreve último nível de quiz completo"
                
              />
            </div>
            
            <div class="form-group">
              <input
                v-model="expert.auth.expertname"
                type="text"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="escreve expertname"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="expert.auth.password"
                type="password"
                class="form-control form-control-lg"
                id="txtPassword"
                placeholder="escreve password"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="expert.auth.password"
                type="password"
                class="form-control form-control-lg"
                id="txtConfirmPassword"
                placeholder="confirma password"
              />
            </div>
            <button type="submit" class="btn btn-outline-success btn-lg mr-2">
              <i class="fas fa-edit"></i> ATUALIZAR</button>
            <router-link
              :to="{name: 'listExperts'}"
              tag="button"
              class="btn btn-outline-danger btn-lg"
            ><i class="fas fa-window-close"></i> CANCELAR</router-link>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
     </b-container>
  </section>
</template>

<script>
import { EDIT_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue"
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "EditExpert",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      expert: {}
    };
  },
  computed: {
    ...mapGetters("expert", ["getExpertsById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`expert/${EDIT_EXPERT}`, this.$data.expert).then(
        () => {
          this.$alert(
            this.getMessage,
            "Utilizador atualizado!",
            "success"
          );
          router.push({name: 'listExperts'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.expert = this.getExpertsById(this.$route.params.expertId);
  }
};
</script>
