import pLink from '../src/link.vue';

export default {
  title: 'pLink',
  component: pLink,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { pLink },
  template: `
    <div>
      <p-link></p-link>
    </div>
  `,
});

export const Link = Template.bind({});
