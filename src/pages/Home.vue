<template>
  <main>
    <div id="menu">
      <img src="@/assets/icone-busca.svg" alt="busca" id="busca" />
      <img src="@/assets/icone-folder2.svg" alt="folder" id="folder" />
      <img src="@/assets/icone-ajuste.svg" alt="ajuste" id="ajuste" />
    </div>
    <div id="menu-cep">
      <v-alert
      prominent
      type="error"
      v-for="erro of array_erro"
      :key="erro.id"
    >
      <v-row align="center">
        <v-col class="grow">
          {{erro.value}} - CEP inválido
        </v-col>
        <v-col class="shrink">
          <v-btn @click="deleterErro(erro.id)" >FECHAR</v-btn>
        </v-col>
      </v-row>
    </v-alert>
      <v-row class="mx-3" id="inserir-cep">
        <v-col cols="12" sm="6" md="4">
          <v-text-field
            v-model="cep"
            maxlength="8"
            id="cep"
            dense
            placeholder="Insira o CEP"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-btn id="btn-inserirCep" @click="inserirCep()">
            <img src="@/assets/icone-plus.svg" alt="plus" />
            <b id="texto-btn">Adicionar endereço</b>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="mx-3" v-for="ceps of array_cep" :key="ceps">
        <v-col cols="12" sm="6" md="6">
          <img src="@/assets/icone-lugar.svg" alt="lugar" id="lugar" />
          <b id="cep">CEP </b>
          <b id="numero-cep">{{ ceps }}</b>
        </v-col>
      </v-row>
      <v-row class="mx-3" id="inserir-cep">
        <v-col cols="12" sm="6" md="4"><div id="espaco-vazio"></div> </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-btn id="btn-inserirCep" @click="procurarCep()">
            <b id="texto-btn">Gerar endereços</b>
          </v-btn>
        </v-col>
      </v-row>
      <div id="barra"></div>
      <v-col cols="12" sm="6" md="7">
        <v-card v-for="endereco of array_endereco" :key="endereco.id">
          <v-row class="mx-3">
            <v-col cols="12" sm="6" md="4" class="inline">
              <img
                src="@/assets/icone-lugar.svg"
                alt="lugar"
                id="lugar"
                class="endereco"
              />
              <div class="endereco">
                <b id="endereco">{{ endereco.obj.logradouro }} </b>
                <b id="bairro">{{ endereco.obj.localidade }} - {{ endereco.obj.uf }}</b>
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4"><div id="espaco-vazio"></div></v-col>
            <v-col cols="12" sm="6" md="4" class="inline" id="lixo-cep">
              <b id="endereco-cep">{{endereco.obj.cep}}</b>
              <div id="barra-endereco"></div>
              <button>
                <img src="@/assets/icone-lixo.svg" alt="lixo" id="lixo" @click="deletarEndereco(endereco.id)"/>
              </button>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </div>
  </main>
</template>

<script>
import api from "@/services/api";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  data() {
    return {
      cep: "",
      array_cep: [],
      array_endereco: [],
      array_erro:[]
    };
  },
  methods: {
    inserirCep() {
      if (this.cep) {
        this.array_cep.push(this.cep);
        this.cep = "";
      }
    },
    procurarCep() {
      this.array_endereco = [];
      this.array_erro = [];
      let x = 0;
      let y = 0;
      this.array_cep.forEach((value) => {
         api.get(`/${value}/json/`).then((response) => {
          let obj = response.data;
          try {
            if (obj.cep) {
              this.array_endereco.push({id:x , obj})
              x++;
            } else {
              this.array_erro.push({ erro: true, value, id:y}) ;
              y++;
            }
          } catch (error) {
            this.array_erro.push({ erro: error, value, id:y}) ;
            y++;
          }
        }).catch(erro =>{
          this.array_erro.push({ erro: erro, value, id:y}) ;
            y++;
        });
      });
    },
    deletarEndereco(id) {
      let array = []
      this.array_endereco.forEach(value =>{
        if(value.id != id){
          array.push(value)
        }
      })
      this.array_endereco = array;
    },
    deleterErro(id){
      let array = []
      this.array_erro.forEach(value =>{
        if(value.id != id){
          array.push(value)
        }
      })
      this.array_erro = array;
    }
  },
};
</script>

<style scoped>
main {
  height: 100%;
  width: 100%;
  display: flex;
}
v-text-field {
  border-radius: 8px;
}
#menu {
  display: static;
  left: 0%;
  width: 5%;
  height: 100%;
  background-color: #f7f7f7;
}
#busca {
  margin-top: 5vh;
  margin-left: 25%;
}

#folder {
  margin-top: 5vh;
  margin-left: 25%;
}
#ajuste {
  margin-top: 60vh;
  background-color: #20272c;
  margin-left: 25%;
}
#menu-cep {
  height: 100%;
  width: 70%;
}
#inserir-cep {
  margin-top: 20px;
}
#btn-inserirCep {
  width: 100%;
  background-color: #b600ee;
  border-radius: 8px;
  font-size: 16px;
  line-height: 22px;
}
#plus {
  margin-right: 15px;
}
#texto-btn {
  margin-left: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
#cep {
  margin-left: 15px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #20272c;
}
#numero-cep {
  margin-left: 5px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  opacity: 0.8;
  color: #20272c;
}
#barra {
  margin-block: 30px;
  margin-left: 40px;
  width: 609px;
  height: 0px;
  left: 143px;
  border: 1px solid #b7b7b7;
}
#espaco-vazio {
  width: 100%;
}
.inline {
  display: inline-flex;
}
#lugar {
  height: 22px;
}
.endereco {
  margin-top: 20%;
}
#endereco {
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;
  color: #424e59;
}
#bairro {
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #20272c;
}
#lixo-cep {
  justify-content: space-between;
}
#endereco-cep {
  margin-top: 20%;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #b600ee;
}
#barra-endereco {
  width: 0px;
  height: 96px;
  border: 2px solid #e0e6ea;
}
</style>