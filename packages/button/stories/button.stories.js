import pButton from '../';

export default {
  title: 'Example/Button',
  component: pButton,
  argTypes: {
    type:{
      control: { type: 'select' },
      options: ['default', 'primary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'normal', 'large'],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: {pButton},
  template: '<p-button @onClick="onClick" v-bind="$props"></p-button>',
});

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'normal',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  size: 'normal',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };

// More on args: https://storybook.js.org/docs/vue/writing-stories/args

