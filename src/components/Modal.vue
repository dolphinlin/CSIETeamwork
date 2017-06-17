<template lang="html">
  <transition name="modal">
    <div class="modal-mask" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              {{body}}
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">

            </slot>
          </div>

        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: 'Default body'
    },
    footer: {
      type: String,
      default: 'Default footer'
    }
  }
}
</script>

<style lang="scss" >
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 784px;
  height: 441px;
  margin: 0px auto;
  padding: 0px 0px;
  background-color: #000;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 0;
  margin-top: 0;

}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>
