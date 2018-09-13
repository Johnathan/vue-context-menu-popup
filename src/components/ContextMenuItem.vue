<template>
    <li @click="handleClick(item, $event)" :class="itemClass(item)">
        {{item.label}}
        <ul class="context-menu" v-if="item.children">
            <context-menu-item
                    v-for="(childItem, index) in item.children"
                    :item="childItem"
                    :key="index">
            </context-menu-item>
        </ul>
    </li>
</template>

<script>
export default {
  name: 'context-menu-item',
  props: {
    item: {
      type: Object,
    },
  },

  methods: {
    handleClick(item, event) {
      if (typeof item.handler !== 'undefined') {
        if (!this.isItemDisabled(item)) {
          item.handler();
        } else {
          event.stopPropagation();
        }
      }
    },

    itemClass(item) {
      return {
        'item-disabled': this.isItemDisabled(item),
      };
    },

    isItemDisabled(item) {
      if (typeof item.disabled !== 'undefined') {
        return item.disabled;
      }

      return false;
    },
  },
};
</script>
