contract Device {

	address public owner;
	bool public powered;

	event Powerup(address sender, bytes32 message);

  function Device() {
  	owner = msg.sender;
  	powered = false;
  }

  function changeStatus() {
  	if (msg.sender != owner) {
  		return;
  	} else {
  		if (!powered) {
  			Powerup(msg.sender, "Turning on");
  			powered = !powered;
  		} else {
  			Powerup(msg.sender, "Turning off");
  			powered = !powered;
  		}
  	}
  }

  function getStatus() constant returns (bool status) {
    return powered;
  }
}
