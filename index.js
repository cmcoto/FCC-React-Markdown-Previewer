var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} //Marked Renderer
// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
var renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return '<a target="_blank" href="' + href + '">' + text + '</a>';
};
//Markdown previewer interprets carriage returns and renders them as <br> (line break) elements (HINT: read the Marked.js docs for this one!).
marked.setOptions({
  breaks: true });



//App
var App = function (_React$Component) {_inherits(App, _React$Component);
  function App(props) {_classCallCheck(this, App);var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this.state = {
      markdown: placeholder };


    _this.handleChange = _this.handleChange.bind(_this);return _this;
  }_createClass(App, [{ key: 'handleChange', value: function handleChange(
    e) {
      this.setState({
        markdown: e.target.value });

    } }, { key: 'render', value: function render()

    {
      var markdown = this.state.markdown;
      return (
        React.createElement('div', null,
          React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: { __html: marked(markdown, { renderer: renderer }) } }),

          React.createElement('div', { className: 'editor' },
            React.createElement('form', { onSubmit: this.handleSubmit },

              React.createElement('textarea', { id: 'editor', value: this.state.markdown, onChange: this.handleChange, cols: 130, rows: 10 }))),



          React.createElement(Editor, { markdown: this.state.markdown,
            onChange: this.handleChange, cols: 130, rows: 10 })));


    } }]);return App;}(React.Component);
;



//Editor textarea and Previewer
var Editor = function Editor(props) {
  return (
    React.createElement('textarea', { id: 'editor',
      value: props.markdown,
      onChange: props.onChange,
      type: 'text' }));

};

var Preview = function Preview(props) {
  return (
    React.createElement('div', { id: 'preview', dangerouslySetInnerHTML: { __html: marked(props.markdown, { renderer: renderer }) } }));

};
//Estara demas el previewer?

//Placeholder
var placeholder = '<H1> Welcome to my FreeCodeCamp:</H1> \n\n# React Markdown Previewer!\n\n## This is a Sub-heading...You may change it in the Editor...\n### And here\'s some other cool stuff:\nHere is: `<div>CODE</div>`, between 2 backticks.\n\n\n  \n **This is a BOLD text**\nOr _italic text_.\n **_HERE IS BOLD and italic text!_**\n~~crossing out text~~.\n\nThere\'s also [links](https://www.freecodecamp.com), and\n> To Be, or NOT To Be!\n\n```\n// this is multi-line code:\n\nfunction myExample(start, end) {\n  if (start == \'```\' && end == \'```\') {\n    return multiLineCode;\n  }\n}\n```\n\n- You can make up lists.\n  - Bulleted lists.\n     - Or even lists with different indentation levels.\n        - Lists under more lists.\n\n\n1. You may do numbererd lists.\n \n1. Number Two ...\n- You may or may not use dashes or asterisks, and the number appears!.  \n\nFinally, we can have embedded images:\n\n![Sloth Eating](https://www.natursidan.se/wp-content/uploads/2014/11/sengangare-MC_Drei-Finger-Faultier.jpg)\n\n\n';














































ReactDOM.render(React.createElement(App, null), document.getElementById('app'));