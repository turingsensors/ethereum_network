var accounts;
var account;
var balance;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function refreshBalance() {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

function getBalance(address) {
  var meta = MetaCoin.deployed();

  meta.getBalance.call(address, {from: address}).then(function(value) {
    var elt = "<li>" + address + " | " +  value.valueOf() +  "</li>";
    $('#allAccounts').append(elt);
  }).catch(function(e) {
    console.log(e);
      var elt = "<li>" + address + " | " +  0 +  "</li>";
  });
}

function sendCoin() {
  var meta = MetaCoin.deployed();

  var amount = parseInt(document.getElementById("amount").value);
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

function turnOn() {
  var device = Device.deployed();
  device.changeStatus({from: account}).then(function() {
    console.log("Success");
  }).catch(function(e) {
    console.log(e);
  });
}

function refreshAll() {
  for (var i = 0; i < accounts.length; i++) {
      getBalance(accounts[i]);
  }
}

window.onload = function() {
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account = accounts[0];

    refreshBalance();
    refreshAll();
  });
}
