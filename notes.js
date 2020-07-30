// 6/17/2020 - overview of react and similar languages
// 6/18/2020 - var, let, const, functions and arrow functions

//  6/22/2020 - how the arrow function can be used as a argument.

// var myName = 'Max'
// console.log(myName)

// // arrow function

//  const printMyName = (name) => {
//   console.log(name)
// }
// printMyName('max')

class Person {
  constructor() {
    this.name = "max";
  }
}
//  6/23/20 reviewed the spread operator and the term destructuring

// 6/27//20 review the map function

// const numarray = [1, 2, 3];

// const doublenumarray = numarray.map((num) () => {
//   return numarray * 2;
// };

// console.log(numarray)
// console.log (doublenumarray)
// 6/30/2020 went over the best practices on the work flow of a react app
//  spa optimize code npm, bundler, compiler, and a development server

// 7/1/20 - reviewed how to add more than one time ofjsx to main root file of reactapp

// reviewed the set up of a react app and where everything is

// 7/9/2020
// - this is a review of the app and how a react app renders in a html anf the important necessary parts of the app.

// 7/13/20 - reviewed how to make a new component and export it to the app

// 7/15/2020 - learned about the math method

// 7/16/20 - how to pass props and use it to pass info or info about the const

// 7/17/20- how to pass the children of a parent using props

// 7/18/20 - Props & State
// props  and state  are CORE concepts of React.Actually, only changes in props  and / or state  trigger React to re - render your components and potentially update the DOM in the browser(a detailed look at how React checks whether to really touch the real DOM is provided in section 6).

//   Props

// props  allow you to pass data from a parent(wrapping) component to a child(embedded) component.

//   Example:

// AllPosts Component:

// const posts = () => {
//   return (
//     <div>
//       <Post title="My first Post" />
//     </div>
//   );
// }
// Here, title  is the custom property(prop) set up on the custom Post  component.We basically replicate the default HTML attribute behavior we already know(e.g. < input type = "text" > informs the browser about how to handle that input).

// Post Component:

// const post = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//     </div>
//   );
// }
// The Post  component receives the props  argument.You can of course name this argument whatever you want - it's your function definition, React doesn't care! But React will pass one argument to your component function => An object, which contains all properties you set up on < Post ... /> .

// { props.title } then dynamically outputs the title  property of the props  object - which is available since we set the title  property inside AllPosts  component(see above).

//   State

// Whilst props allow you to pass data down the component tree(and hence trigger an UI update), state is used to change the component, well, state from within.Changes to state also trigger an UI update.

//   Example:

// NewPost Component:

// class NewPost extends Component { // state can only be accessed in class-based components!
//   state = {
//     counter: 1
//   };

//   render() { // Needs to be implemented in class-based components! Needs to return some JSX!
//     return (
//       <div>{this.state.counter}</div>
//     );
//   }
// }
// Here, the NewPost  component contains state.Only class-based components can define and use state.You can of course pass the state  down to functional components, but these then can't directly edit it.

// state  simply is a property of the component class, you have to call it state  though - the name is not optional.You can then access it via this.state in your class JSX code(which you return in the required render()  method).

// Whenever state  changes(taught over the next lectures), the component will re - render and reflect the new state.The difference to props  is, that this happens within one and the same component - you don't receive new data (props ) from outside!

// more notes on
// Clipboard Events
// Event names:

// onCopy onCut onPaste
// Properties:

// DOMDataTransfer clipboardData
// Composition Events

// Event names:

// onCompositionEnd onCompositionStart onCompositionUpdate
// Properties:

// string data
// Keyboard Events

// Event names:

// onKeyDown onKeyPress onKeyUp
// Properties:

// boolean altKey
// number charCode
// boolean ctrlKey
// boolean getModifierState(key)
// string key
// number keyCode
// string locale
// number location
// boolean metaKey
// boolean repeat
// boolean shiftKey
// number which
// Focus Events

// Event names:

// onFocus onBlur
// These focus events work on all elements in the React DOM, not just form elements.

//   Properties:

// DOMEventTarget relatedTarget
// Form Events

// Event names:

// onChange onInput onInvalid onSubmit
// For more information about the onChange event, see Forms.

// Mouse Events

// Event names:

// onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
// onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
// onMouseMove onMouseOut onMouseOver onMouseUp
// The onMouseEnter and onMouseLeave events propagate from the element being left to the one being entered instead of ordinary bubbling and do not have a capture phase.

//   Properties:

// boolean altKey
// number button
// number buttons
// number clientX
// number clientY
// boolean ctrlKey
// boolean getModifierState(key)
// boolean metaKey
// number pageX
// number pageY
// DOMEventTarget relatedTarget
// number screenX
// number screenY
// boolean shiftKey
// Selection Events

// Event names:

// onSelect
// Touch Events

// Event names:

// onTouchCancel onTouchEnd onTouchMove onTouchStart
// Properties:

// boolean altKey
// DOMTouchList changedTouches
// boolean ctrlKey
// boolean getModifierState(key)
// boolean metaKey
// boolean shiftKey
// DOMTouchList targetTouches
// DOMTouchList touches
// UI Events

// Event names:

// onScroll
// Properties:

// number detail
// DOMAbstractView view
// Wheel Events

// Event names:

// onWheel
// Properties:

// number deltaMode
// number deltaX
// number deltaY
// number deltaZ
// Media Events

// Event names:

// onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
// onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
// onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
// onTimeUpdate onVolumeChange onWaiting
// Image Events

// Event names:

// onLoad onError
// Animation Events

// Event names:

// onAnimationStart onAnimationEnd onAnimationIteration
// Properties:

// string animationName
// string pseudoElement
// float elapsedTime
// Transition Events

// Event names:

// onTransitionEnd
// Properties:

// string propertyName
// string pseudoElement
// float elapsedTime
// Other Events

// Event names:

// onToggle

// how to manage state for components and where to have dumb components
