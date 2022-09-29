<template>
  <section>
    <base-card>
      <h2>Fruits List</h2>
      <ul>
        <li>Apple</li>
        <li>Mango</li>
        <li>Banana</li>
        <li>Lichi</li>
      </ul>

      <template v-slot:personal>
        <h2>This are the sweet fruits</h2>
      </template>
    </base-card>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
