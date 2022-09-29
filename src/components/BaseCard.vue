<template>
  <div>
    <!-- write something -->
    <slot></slot>

    <body class="body1">
      <slot name="personal"></slot>
    </body>
  </div>
</template>

<script>
export default {};
</script>

<style>
div {
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  max-width: 30rem;
  background-color: hotpink;
  color: whitesmoke;
}
.body1 {
  background-color: brown;
  color: whitesmoke;
  border-radius: 10px;
  margin-top: 18px;
}
</style>
