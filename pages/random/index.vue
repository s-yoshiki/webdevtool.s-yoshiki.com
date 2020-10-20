<template>
  <v-container
    ><v-container>
      <v-text-field
        v-model="text"
        label=""
        hide-details
        outlined
        dense
        placeholder=""
      >
      </v-text-field
    ></v-container>
    <v-container>
      <v-row>
        <v-col v-for="(item, i) in checkbox" :key="i">
          <v-checkbox
            v-model="item.model"
            :label="item.label"
            @click="initSource"
          ></v-checkbox>
        </v-col>
      </v-row>
      <v-row>
        <v-col>文字列の長さ :</v-col>
        <v-col>
          <v-text-field v-model="length" outlined dense></v-text-field>
        </v-col>
        <v-col></v-col>
        <v-col class="text-right" outlined>
          <v-btn @click="generate">生成</v-btn>
        </v-col>
      </v-row>
      <v-textarea v-model="source" outlined></v-textarea>
    </v-container>
  </v-container>
</template>

<script>
const randInt = (min, max) => Math.floor(Math.random() * (max + 1 - min)) + min;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

export default {
  data: () => {
    return {
      text: "",
      source: "",
      length: 16,
      checkbox: [
        {
          label: "英小文字",
          model: true,
          value: alphabet,
        },
        {
          label: "英大文字",
          model: false,
          value: alphabet.toUpperCase(),
        },
        {
          label: "数字",
          model: true,
          value: "0123456789",
        },
        {
          label: "記号",
          model: false,
          value: `!"#$%&'()=~|{}*+_?><,./_]:;[@\\^-\``,
        },
      ],
    };
  },
  methods: {
    initSource() {
      this.source = "";
      for (let key in this.checkbox) {
        const item = this.checkbox[key];
        if (item.model) {
          this.source += item.value;
        }
      }
    },
    generate() {
      this.text = "";
      const src = this.source;
      for (let i = 0; i < this.length; i++) {
        let r = randInt(0, src.length - 1);
        this.text += src[r];
      }
    },
  },
  created() {
    this.initSource();
  },
};
</script>