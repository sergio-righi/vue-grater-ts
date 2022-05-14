<template>
  <gv-quiz :page-size="2" forward confirmation @onsubmit="onSubmit">
    <template #header>
      <h3>Quiz Name</h3>
    </template>
    <template #content>
      <gv-quiz-item :options="options" required>
        <template #header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
        <template #footer>* Lorem ipsum dolor sit amet</template>
      </gv-quiz-item>
      <gv-quiz-item :options="options" multiple>
        <template #header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
      </gv-quiz-item>
      <gv-quiz-item scale>
        <template #header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
      </gv-quiz-item>
      <gv-quiz-item open multiline>
        <template #header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
      </gv-quiz-item>
      <gv-quiz-item :options="options" rank>
        <template #header>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
      </gv-quiz-item>
    </template>
  </gv-quiz>
</template>

<script>
export default {
  data() {
    return {
      options: [
        "Strongly disagree",
        "Disagree",
        "Indifferent",
        "Agree",
        "Strongly agree"
      ]
    };
  },
  methods: {
    onSubmit: function(val) {
      console.log(val);
    }
  }
};
</script>
