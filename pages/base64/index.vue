<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <v-textarea
          outlined
          label=""
        ></v-textarea>
        <v-btn outlined small block class="text-capitalize">base64 encode &gt;&gt;</v-btn>
      </v-col>
      <!-- <v-col sm="2" class="text-center">
        <v-btn outlined>aaa</v-btn>
        <br>
        <v-btn outlined>aaa</v-btn>
      </v-col> -->
      <v-col sm="6">
        <v-textarea
          outlined
          label=""
        ></v-textarea>
        <v-btn outlined small block class="text-capitalize">&lt;&lt; base64 decode</v-btn>
      </v-col>
    </v-row>
    <v-row></v-row>
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