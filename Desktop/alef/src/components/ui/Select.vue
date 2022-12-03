<template>
  <div v-bind:id="id" :class="wrapperClasses">
    <a class="clickable" :class="{'v-disabled': listItems.length===0, [textClass] : true}"
      @click="toggleDropdown"
      tabindex="0">
      <span v-if="model && attr">{{ model[attr] || defaultValue }}</span>
      <span v-else-if="model">{{ model || defaultValue }}</span>
      <span v-else>{{ localValue || defaultValue }}</span>
      <img src="@/assets/img/arrow.svg" class='arrow' alt="">
    </a>
    <div class="v-list-dropdown" ref="dropdown" v-if="isVisible">
      <div v-if="list.length > 10" @click.stop.prevent>
        <input type="search" v-model="search.text" class="full-width">
      </div>
      <ul v-if="attr">
        <li v-for="(item, index) in listItems" :key="item[attr]" :class="{'is-selected' : index === selectedItemIndex, [item.class] : item.class}">
          <a @click="selectItem(item)">{{ item[attr] }}</a>
        </li>
      </ul>
      <ul v-else>
        <li v-for="(item, index) in listItems" :key="item" :class="{'is-selected' : index === selectedItemIndex}">
          <a @click="selectItem(item)">{{ item }}</a>
        </li>
      </ul>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    name: "VSelect",
  
    props: {
      id: {
        type: String,
        required: false
      },
  
      model: {
        type: [Object, String],
        required: false
      },
  
      list: {
        type: Array,
        required: true
      },
  
      attr: {
        type: String,
        required: false,
        default: null
      },
  
      defaultValue: {
        type: String,
        required: false,
        default: 'Выбрать размер'
      },
  
      onSelect: {
        type: Function,
        required: false,
        default() {
          return () => {};
        }
      },
  
      isFullWidth: {
        type: Boolean,
        required: false,
        default: false
      },
  
      textClass: {
        type: String,
        required: false,
        default: ""
      },
  
      isInline: {
        type: Boolean,
        required: false,
        default: false
      },
  
      isDisabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
  
    data() {
      return {
        search: {
          text: null
        },
        selectedItemIndex: -1,
        localValue: "",
        isVisible: false,
        isWindowEventCreated: false
      };
    },
  
    computed: {
      listItems() {
        if (!this.search.text) {
          return this.list;
        }
  
        return this.list.filter(item => {
          return this.attr
            ? item[this.attr].toLowerCase().includes(this.search.text)
            : item.toLowerCase().includes(this.search.text);
        });
      },
  
      wrapperClasses() {
        const classes = ["v-select-wrapper"];
        if (this.isFullWidth) {
          classes.push("v-select-block");
        }
        if (this.isInline) {
          classes.push("v-select-inline");
        }
        return classes;
      }
    },
  
    methods: {
      selectItem(item) {
        if (this.model) {
          this.$emit("update:model", item);
        }
        this.search.text = null;
        this.selectedItemIndex = -1;
        this.onSelect(item);
        this.localValue = this.attr ? item[this.attr] : item;
        this.closeDropdown();
      },
      openDropdown(e) {
        if (this.isDisabled) {
          return;
        }
        if (e) {
          e.stopPropagation();        
        }
        this.isVisible = true;
        this.addWindowEvents();
      },
  
      closeDropdown(event) {
        if (event && this.$el.contains(event.target) && !this.closeOnSelect) {
          return;
        }
  
        this.isVisible = false;
        this.selectedItemIndex = -1;
        this.removeWindowEvents();
      },
  
      toggleDropdown () {
        console.log(this.isVisible)
        if (this.isVisible) {
          return this.closeDropdown()
        }
        this.openDropdown()
      },
  
      addWindowEvents() {
        if (!this.isWindowEventCreated) {
          document.body.addEventListener("click", this.closeDropdown, true);
          document.body.addEventListener('keyup', this.handleKeyup, true)
         this.isWindowEventCreated = true;
        }
      },
  
      removeWindowEvents() {
        if (this.isWindowEventCreated) {
          document.body.removeEventListener("click", this.closeDropdown, true);
          document.body.removeEventListener('keyup', this.handleKeyup, true)
          this.isWindowEventCreated = false;
        }
      },
  
  
      goUp () {
        this.selectedItemIndex = this.selectedItemIndex > 0 ? this.selectedItemIndex - 1 : this.selectedItemIndex
      },
  
      goDown () {
        this.selectedItemIndex = this.selectedItemIndex < this.listItems.length - 1 ? this.selectedItemIndex + 1 : this.selectedItemIndex
      }
    },
  
    unmounted() {
      this.removeWindowEvents()
    }
  };
  </script>
  
  <style scoped lang="scss">
    .v-list-dropdown {
      display: block;
      position: absolute;
      z-index: 1000;
      min-width: 100%;
      cursor: pointer;
      width: auto;
      ul {
        position: relative;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        list-style-type: none;
        padding: 0;
        border-radius: 3px;
        max-height: 400px;
        overflow: auto;
        margin: 0;
        > li {
          &:hover {
            background-color: darken(white, 10%);
          }
          &.is-selected {
            background-color: darken(white, 10%);
          }
          > a {
            padding: 5px 30px;
            display: block;
            padding: 5px 20px;
            cursor: pointer;
            outline: none;
            white-space: nowrap;
            border-top: 1px solid #e9e9e9;
          }
        }
      }
      background: white;
    }
  
    .v-select-wrapper {
      position: relative;
      background-color: white;
      border-radius: 3px;
      border: 1px solid #e9e9e9;
      display: inline-block;
      width: 315px;
      &.v-select-block {
        display: block;
      }
      .clickable {
        position: relative;
        display: flex;
        width: 100%;
        padding: 5px 10px;
        min-width: 100px;
        border-radius: 3px;
        cursor: pointer;
        justify-content: space-between;
      }

      .arrow {
        transform: rotate(90deg); 
      }
    }
  </style>
  