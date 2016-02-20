contract Device {

	address owner;
	bool powered;
  uint energyLevel;

	event PowerOn(address sender, bytes32 message);
  event PowerOff(address sender, bytes32 message);
  event FlowChange(address sender, uint previousLevel, uint newLevel);

  function Device() {
  	owner = msg.sender;
  	powered = false;
    energyLevel = 100;
  }

  function powerSwitch() {
  	if (msg.sender != owner) {
  		return;
  	} else {
  		if (!powered) {
  			PowerOn(msg.sender, "Turning on");
  			powered = !powered;
  		} else {
        PowerOff(msg.sender, "Turning off");
        powered = !powered;
  		}
  	}
  }

  function powerStatus() constant returns (bool status) {
    return powered;
  }

  function changeEnergy(uint newLevel) constant returns (bool success) {
    if (msg.sender != owner) {
      return;
    } else {
      FlowChange(msg.sender, energyLevel, newLevel);
      energyLevel = newLevel;
    }
  }

  function getEnergy() constant returns (uint level) {
    return energyLevel;
  }
}
