<template>
  <div @click="click" class="container">
    <div class="icon-container" v-if="icon">
      <img class="icon" v-if="icon" src=""/>
      <div class="icon-button"><slot></slot></div>
    </div>
    <div v-else class="button" :class="`button-${type}`">1</div>
  </div>
</template>

<script>
  export default {
    name: "Button",
    props: {
      //按钮的类型
      type: {
        type: String,
        default: 'default',
        validator: value => {
          return ['primary', 'default', 'danger', 'dashed'].indexOf(value) !== -1
        }
      },
      icon: {
        type: String,
        default: '',
      }
    },
    data() {
      return {
        iconSrc: ''
      }
    },
    methods: {
      click() {
        this.$emit('click')
      },
      getIcon() {
        let icon = document.getElementsByClassName('icon')[0]
        if (this.icon) {
          this.iconSrc = require(`./static/${this.icon}.png`)
          icon.src = this.iconSrc
        }
      }
    },
    mounted() {
      this.getIcon()
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    width: 75px;
    height: 30px;
    cursor: pointer;
  }

  .icon-container {
    display: flex;
    background-color: #1890ff;
    align-items: center;
    width: auto;
    height: 40px;
    border-radius: 4px;
  }

  .icon {
    width: 20px;
    height: 20px;
    padding-left: 10px;
  }

  .button {
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 30px;
    border-radius: 4px;
  }

  .icon-button {
    background-color: #1890ff;
    color: #ffffff;
    border-radius: 4px;
    min-width: 80px;
    height: 40px;
    padding-right: 10px;
    padding-left: 5px;
    text-align: center;
    line-height:40px;
  }

  .icon-container:hover {
    opacity: 0.9;
  }

  .button-primary {
    background-color: #1890ff;
    border: 1px solid #1890ff;
    color: #ffffff;
  }

  .button-primary:hover {
    opacity: 0.9;
  }

  .button-danger {
    color: #ff4d4f;
    background-color: #e6e6e6;
    border-color: #ff4d4f;
  }

  .button-danger:hover {
    background-color: #ff4d4f;
    color: #ffffff;
  }

  .button-default {
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border: 1px solid #d9d9d9;
  }

  .button-default:hover {
    color: #40a9ff;
    border: 1px solid #40a9ff;
  }
</style>
