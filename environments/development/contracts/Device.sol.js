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
  Device.abi = [{ "constant": true, "inputs": [], "name": "energyLevel", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "powered", "outputs": [{ "name": "", "type": "bool" }], "type": "function" }, { "constant": true, "inputs": [{ "name": "newLevel", "type": "uint256" }], "name": "changeEnergy", "outputs": [{ "name": "success", "type": "bool" }], "type": "function" }, { "constant": false, "inputs": [], "name": "powerSwitch", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "sender", "type": "address" }, { "indexed": false, "name": "message", "type": "bytes32" }], "name": "PowerOn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "sender", "type": "address" }, { "indexed": false, "name": "message", "type": "bytes32" }], "name": "PowerOff", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "sender", "type": "address" }, { "indexed": false, "name": "previousLevel", "type": "uint256" }, { "indexed": false, "name": "newLevel", "type": "uint256" }], "name": "FlowChange", "type": "event" }];
  Device.binary = "60606040526000805460a060020a60ff0219600160a060020a03199091163317169055606460015561020c806100356000396000f3606060405260e060020a6000350463742f6640811461003c578063b70c5e7514610045578063bab7ad6e14610059578063e90f708a1461007b575b005b61009960015481565b61009960005460ff60a060020a9091041681565b6100996004356000805433600160a060020a039081169116146101c057610207565b61003a60005433600160a060020a039081169116146100a3576101be565b6060908152602090f35b60005460a060020a900460ff16151561013c5733600160a060020a031660609081527f5475726e696e67206f6e000000000000000000000000000000000000000000006080527f7a53d843f8457fc06c66a176bc8d654c69faa59d907361387e0a76a4fa69605090604090a1600060149054906101000a900460ff1615600060146101000a81548160ff021916908302179055506101be565b33600160a060020a031660609081527f5475726e696e67206f66660000000000000000000000000000000000000000006080527ffcff366f79765fd927d5e4e8db4e04f75fe44b3e7a6e7b5f54433cd33588010990604090a1600060149054906101000a900460ff1615600060146101000a81548160ff021916908302179055505b565b60015433600160a060020a0316606090815260809190915260a08390527f50f7b7ba83684d19e5678f348bd87f427bbfa6d8475c2030e72380410396f04d9080a160018290555b91905056";

  if ("0x4225815003ec89fe2869eccedde4503511e84b98" != "") {
    Device.address = "0x4225815003ec89fe2869eccedde4503511e84b98";

    // Backward compatibility; Deprecated.
    Device.deployed_address = "0x4225815003ec89fe2869eccedde4503511e84b98";
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