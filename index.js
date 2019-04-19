'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Topbar = function (_React$Component) {
  _inherits(Topbar, _React$Component);

  function Topbar() {
    _classCallCheck(this, Topbar);

    return _possibleConstructorReturn(this, (Topbar.__proto__ || Object.getPrototypeOf(Topbar)).apply(this, arguments));
  }

  _createClass(Topbar, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "topbar" },
        React.createElement("img", { className: "menu-icon", src: "../img/menu.svg" }),
        "DermaCare"
      );
    }
  }]);

  return Topbar;
}(React.Component);

var Main = function (_React$Component2) {
  _inherits(Main, _React$Component2);

  function Main() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Main);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Main.__proto__ || Object.getPrototypeOf(Main)).call.apply(_ref, [this].concat(args))), _this2), _this2.readURL = function (input) {
      console.log(input);
      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          $('#blah').attr('src', e.target.result).width(150).height("auto");
        };

        reader.readAsDataURL(input.files[0]);
      }
    }, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "label",
          { htmlFor: "files", className: "btn" },
          "Select Image"
        ),
        React.createElement("input", { id: "files", style: { visibility: "hidden" }, type: "file", onChange: this.readURL(this) })
      );
    }
  }]);

  return Main;
}(React.Component);

var Index = function (_React$Component3) {
  _inherits(Index, _React$Component3);

  function Index(props) {
    _classCallCheck(this, Index);

    var _this3 = _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).call(this, props));

    _this3.state = { liked: false };
    return _this3;
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      if (this.state.liked) {
        return 'You liked this.';
      }

      return React.createElement(
        "div",
        null,
        React.createElement(Topbar, null),
        React.createElement(Main, null)
      );
    }
  }]);

  return Index;
}(React.Component);

var domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(Index, null), domContainer);