// sets up JSDOM and configures enzyme with React 16
require('./irrelevant-setup')

const React = require('React')
const {mount} = require('enzyme')

// a composite component that forwards all props to a DOM component
function MyButton(props) {
  return React.createElement('button', props)
}

// create an element out of the composite component
// and pass data-test which will be forwarded on to the underlying button
const element = React.createElement(
  MyButton,
  {'data-test': 'button'},
  'Click Me'
)
const wrapper = mount(element)

// this next line throws an error
// Error: Method “simulate” is only meant to be run on a single node. 2 found instead.
wrapper.find('[data-test="button"]').simulate('click')
// I want to use an API to find only return DOM component wrappers
// and no composite component instance wrappers
// is there another API I can use?
// I know I can make my selector more specific (`button[data-test="button"]`)
// but I don't want to have to do that either.
// I also know that if I use `render` than I wont get composite component wrappers
// but I need to simulate a click and I can't do that with `render`.
