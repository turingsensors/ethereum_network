"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var Device = (function (_Pudding) {
    _inherits(Device, _Pudding);

    function Device() {
      _classCallCheck(this, Device);

      _get(Object.getPrototypeOf(Device.prototype), "constructor", this).apply(this, arguments);
    }

    return Device;
  })(Pudding);

  ;

  // Set up specific data for this class.
  Device.abi = [{ "constant": false, "inputs": [], "name": "changeStatus", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "getStatus", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "sender", "type": "address" }, { "indexed": false, "name": "message", "type": "bytes32" }], "name": "Powerup", "type": "event" }];
  Device.binary = "60606040526000805460a060020a60ff0219600160a060020a03199091163317169055610178806100306000396000f3606060405260e060020a6000350463085634ec81146100265780634e69d56014610044575b005b61002460005433600160a060020a0390811691161461005b57610176565b60005460a060020a900460ff166060908152602090f35b60005460a060020a900460ff1615156100f45733600160a060020a031660609081527f5475726e696e67206f6e000000000000000000000000000000000000000000006080527ff26c821a605c23ea22c00559dc65a6390560946de69edececf631144c84e449690604090a1600060149054906101000a900460ff1615600060146101000a81548160ff02191690830217905550610176565b33600160a060020a031660609081527f5475726e696e67206f66660000000000000000000000000000000000000000006080527ff26c821a605c23ea22c00559dc65a6390560946de69edececf631144c84e449690604090a1600060149054906101000a900460ff1615600060146101000a81548160ff021916908302179055505b56";

  if ("" != "") {
    Device.address = "";

    // Backward compatibility; Deprecated.
    Device.deployed_address = "";
  }

  Device.generated_with = "1.0.3";
  Device.contract_name = "Device";

  return Device;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.Device = factory;
}