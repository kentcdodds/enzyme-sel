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

wrapper
  .find('[data-test="button"]')
  // right now we have a wrapper with two things:
  //   1. MyButton composite component instance
  //   2. button DOM component
  // If we tried to run `.simulate` on that, we'd get the following error:
  // Error: Method “simulate” is only meant to be run on a single node. 2 found instead.
  //
  // So we have to simulate the click on only one of them. We could just do .first()
  // but I prefer to simulate events (and in general only work with) DOM components
  // in my tests, so instead we can use .hostNodes() to filter out only the DOM components
  .hostNodes()
  // now the wrapper only has the button DOM component and we can simulate the click
  .simulate('click')
