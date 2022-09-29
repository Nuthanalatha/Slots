<template>
  <div>
    <base-card>
      <h3>Name: {{ userData.name }}</h3>
      <p>{{ userData.description }}</p>
      <p>Role is:{{ userData.role }}</p>

      <template v-slot:personal>
        <h3>This section is personal:no one should read it</h3>
      </template>
    </base-card>
  </div>
</template>

<script>
export default {
  props: ["userData"],
};
</script>

<style scoped>
/* div {
  border: 1px solid gray;
  box-shadow: 0 3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  max-width: 30%;
  background-color: cadetblue;
  color: whitesmoke;
} */
</style>
