const {JSDOM} = require('jsdom')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({adapter: new Adapter()})

const dom = new JSDOM(`<!DOCTYPE html>`)
Object.entries(dom.window).forEach(([k, v]) => {
  global[k] = v
})
