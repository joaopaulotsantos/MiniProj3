<template>
  <section class="page-section">
    <b-container>
     <HeaderPage title="Gestão de Experts"/>
      
      <!--MENU TOPO-->
      <b-row class="mb-4">
        <b-col cols="1"></b-col>
        <b-col>
          <router-link
            :to="{name:'addExpert'}"
            tag="button"
            class="btn btn-outline-success mr-2 mt-2"
          ><i class="fas fa-plus-square"></i> ADICIONAR EXPERT</router-link>
          <router-link
            :to="{name:'admin'}"
            tag="button"
            class="btn btn-outline-info mr-2 mt-2"
          ><i class="fas fa-bars"></i> MENU PRINCIPAL</router-link>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>

      <!-- TABELA -->
      <b-row>
        <b-col cols="1"></b-col>
        <b-col>
          <table class="table table-striped">
            <thead class="thead-dark">
              <tr>
                <th scope="col">
                  NOME
                  <i class="fas fa-arrow-up" v-if="sortType===1" @click="sort()"></i>
                  <i class="fas fa-arrow-down" v-else  @click="sort()"></i>
                </th>
                <th scope="col">TIPO</th>
                <th scope="col">DATA DE CRIAÇÃO</th>
                <th scope="col">AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="expert of experts" :key="expert._id">                
                <td class="pt-4">{{expert.name}}</td>
                <!--<td class="pt-4">{{expert.type==="admin"?"Administrador":"Utilizador normal"}}</td>-->
                <td class="pt-4">{{formatDate(expert.registration_date)}}</td>
                <td>
                  <router-link
                    :to="{name:'editExpert', params:{expertId: expert._id}}"
                    tag="button"
                    class="btn btn-outline-success mr-2"
                  ><i class="fas fa-edit"></i> EDITAR</router-link>
                  <button
                    @click="viewExpert(expert._id)"
                    type="button"
                    class="btn btn-outline-success mr-2"
                  ><i class="fas fa-search"></i> VER</button>
                  <button
                    @click="removeExpert(expert._id)"
                    type="button"
                    class="btn btn-outline-danger mr-2 "
                  ><i class="fas fa-trash-alt"></i> REMOVER</button>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col cols="1"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { FETCH_EXPERTS, REMOVE_EXPERTS } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue"
import { mapGetters } from "vuex";

export default {
  name: "ManageExperts",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      experts: [],
      sortType: 1
    };
  },
  computed: {    
    ...mapGetters(["getExpertLevelByPoints"]),
    ...mapGetters("expert", ["getExperts","getMessage"])
  },
  methods: {
    fetchExperts() {
      console.log('Fetching experts...');
      this.$store.dispatch(`expert/${FETCH_EXPERTS}`).then( 
        () => {
          this.experts = this.getExperts;
        }, err => {
          this.$alert(`${err.message}`, 'Erro', 'error');
        });
    },
    sort() {
      this.experts.sort(this.compareNames)
      this.sortType *= -1
      
    },
    compareNames(u1,u2) {
      if(u1.name > u2.name) return 1 * this.sortType
      else if(u1.name < u2.name) return -1 * this.sortType
      else return 0
    },

    viewExpert(id) {
      const expert = this.experts.find(expert => expert._id === id);
      this.$fire({
        title: expert.auth.expertname,
        html: this.generateTemplate(expert),
        imageUrl: require(`@/assets/avatars/${this.getExpertLevelByPoints(expert.gamification.points).avatar}.png`),
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Imagem desconhecida"
      });
    },

    generateTemplate(expert) {
      return `
          <h5>${expert.gamification.points} pontos (${this.getExpertLevelByPoints(expert.gamification.points).name})</h5>
          <p>${expert.description}</p>
          <p>
          <b>Nome:</b> ${expert.name} <br>
          <b>Tipo de utilizador:</b> ${expert.type==="admin"?"Administrador":"Utilizador normal"} <br>
          <b>Data de registo:</b> ${this.formatDate(expert.registration_date)} <br>
          <b>Data de nascimento:</b> ${this.formatDate(expert.birth_date)}<br>
          <b>Cidade:</b> ${expert.location.city}<br>
          <b>País:</b> ${expert.location.country}
          </p>
        `
    },
    formatDate: d => 
    {
      const newDate = new Date(Date.parse(d))
      return newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds()
    },
    removeExpert(id) {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover o expert?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.dispatch(`expert/${REMOVE_EXPERT}`, id).then(() => {
            this.$alert(
              this.getMessage,
              "Expert removido!",
              "success"
            );
            this.fetchExperts();
          });
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
        }
      );
    }
  },
  created() {
    console.log('Fetching experts1...');
    this.fetchExperts();    
  }
};
</script>