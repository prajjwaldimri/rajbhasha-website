<template lang="pug">
  div
    v-simple-table(:dense='dense' :fixed-header='fixedHeader' )
      template(v-slot:default='')
        thead
          tr
            th.text-left Date
            th.text-left Subject
            
        tbody
          tr(v-for='item in information' :key='item.name')
            td {{ item.date }}
            td {{ item.subject }}
            
</template>

<script>
export default {
  data: () => ({
    dense: false,
    fixedHeader: false,
    height: 300,
    information: [
      {
        date: "28 / 12 / 2019",
        subject: "I saw what you emanate I held my hand to take"
      },
      {
        date: "29 / 12 / 2019",
        subject: "A piece of it with me Passed through me like Gamma rays"
      },
      {
        date: "30 / 12 / 2019",
        subject: "It burned my soul to see A thing with such beauty"
      },
      {
        date: "31 / 12 / 2019",
        subject: "Stratosphere"
      },
      {
        date: "31 / 12 / 2019",
        subject: "Floating in your stare"
      },
      {
        date: "32 / 12 / 2019",
        subject: "Take me far from here"
      },
      {
        date: "33 / 12 / 2019",
        subject: "Are you even there? I miss the way you felt to breathe"
      }
    ]
  })
};
</script>
