<template>
    <div id="app">
        <ContextMenu ref="contextMenu" :menu-items="menuItems"/>

        <div class="context-menu-trigger" @click.right.prevent="$refs.contextMenu.open($event)">
            Right Click Me!
        </div>

        <div class="console" v-html="consoleMessage.length ? consoleMessage.join('<br>') : '...'"></div>

    </div>
</template>

<script>
import ContextMenu from '@/components/ContextMenu.vue';

export default {
  name: 'app',
  data() {
    return {
      menuItems: [
        {
          label: 'First Menu Item',
        },
        {
          label: 'Disabled Menu Item',
          disabled: true,
        },
        {
          label: 'I have children',
          children: [
            {
              label: 'Child Item 1',
            },
            {
              label: 'I also have children',
              children: [
                {
                  label: 'Child Item 2',
                },
              ],
            },
          ],
        },
      ],
      consoleMessage: [],
    };
  },
  components: {
    ContextMenu,
  },
};
</script>

<style lang="scss">
    body, html {
        height: 100%;
    }

    #app {
        margin-top: 60px;
        font-family: arial, sans-serif;
    }

    .console {
        background: #112300;
        padding: 1em;
        font-family: monospace;
        line-height: 1.5em;
        color: lawngreen;
        text-shadow: 0 0 10px lawngreen;
    }

    .context-menu-trigger {
        width: 50%;
        margin: 2em auto;
        padding: 2em;
        background: #c0c0c0;
    }
</style>
