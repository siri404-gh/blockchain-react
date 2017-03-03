// Create the contract source code
var SkipTraceSource = "contract Sequence { uint sequenceNo; function Sequence() { sequenceNo = 0; } function nextVal() returns (uint number) { return ++sequenceNo; } } contract CustomerDetails { struct CustomerData { uint customerID; address bankID; string profile; string phone; string addresses; string employer; string products; string remarks; uint timestamp; } mapping (uint => CustomerData) public custDataOf; } contract CustomerSkipTrace is Sequence, CustomerDetails { event SkipTraceAddEvent(uint customerID, address bankID, string profile, string phone, string addresses, string employer, string products, string remarks, uint timestamp); event SkipTraceQueryEvent(uint customerID, address bankID, string profile, string phone, string addresses, string employer, string products, string remarks, uint timestamp); event SkipTraceUpdateEvent(uint customerID, address bankID, string profile, string phone, string addresses, string employer, string products, string remarks, uint timestamp); event SkipTraceRecordCountEvent(uint recordCount); function addSkipTraceRecord(string profile, string phone, string addresses, string employer, string products, string remarks) { uint customerID = nextVal(); address bankID = msg.sender; uint timestamp = now; custDataOf[customerID].customerID = customerID; custDataOf[customerID].bankID = bankID; custDataOf[customerID].profile = profile; custDataOf[customerID].phone = phone; custDataOf[customerID].addresses = addresses; custDataOf[customerID].employer = employer; custDataOf[customerID].products = products; custDataOf[customerID].remarks = remarks; custDataOf[customerID].timestamp = timestamp; SkipTraceAddEvent(customerID, bankID, profile, phone, addresses, employer, products, remarks, timestamp); } function querySkipTraceRecord(uint customerID) { if (customerID>0 && customerID<=sequenceNo) SkipTraceQueryEvent(custDataOf[customerID].customerID, custDataOf[customerID].bankID, custDataOf[customerID].profile, custDataOf[customerID].phone, custDataOf[customerID].addresses, custDataOf[customerID].employer, custDataOf[customerID].products, custDataOf[customerID].remarks, custDataOf[customerID].timestamp); } function updateSkipTraceRecord(uint customerID, string profile, string phone, string addresses, string employer, string products, string remarks) { if (customerID>0 && customerID<=sequenceNo) { address bankID = msg.sender; uint timestamp = now; custDataOf[customerID].customerID = customerID; custDataOf[customerID].bankID = bankID; custDataOf[customerID].profile = profile; custDataOf[customerID].phone = phone; custDataOf[customerID].addresses = addresses; custDataOf[customerID].employer = employer; custDataOf[customerID].products = products; custDataOf[customerID].remarks = remarks; custDataOf[customerID].timestamp = timestamp; SkipTraceUpdateEvent(customerID, bankID, profile, phone, addresses, employer, products, remarks, timestamp); } } function reset() { for (uint i = 1; i<=sequenceNo; i++){ delete custDataOf[i]; } sequenceNo = 0; } function getRecordCount() { SkipTraceRecordCountEvent(sequenceNo); } }"

// Compile the source with solc - Solidity Compiler
var SkipTraceCompiled = web3.eth.compile.solidity(SkipTraceSource)


// Extracts info from contract, print json serialisation on console
SkipTraceCompiled.CustomerSkipTrace.info

// Create contract object
var SkipTraceContract = web3.eth.contract(SkipTraceCompiled.CustomerSkipTrace.info.abiDefinition);


function getBankAddress(name) {
	return web3.db.getString("NameAddressMap", name)
}

function putBankAddress(name, address) {    
var text = 
'{ "name":"' + name + '", "address":"' + address + '" }';	
	web3.db.putString("NameAddressMap", name, text)
}


function putBankName(address, name) {    
var text = 
'{ "name":"' + name + '", "address":"' + address + '" }';	
	web3.db.putString("AddressNameMap", address, text)
}

function getBankName(address) {
	return web3.db.getString("AddressNameMap", address)
}

function addSkipTraceRecordOnChain(firstName, middleName, lastName, aliasName, DOB, SSN, passportNumber, homePhone1, homePhone2, homePhone3, workPhone1, workPhone2, workPhone3, mobilePhone1, mobilePhone2, mobilePhone3, currentAddress1, currentAddress2, currentAddress3, employerName1, employerName2, employerName3, productName1, productName2, productName3, remarks)
{

	var profile = "firstName:" + cleanUp(firstName) + "|" + "middleName:" + cleanUp(middleName) + "|" + "lastName:" + cleanUp(lastName) + "|" + "aliasName:" + cleanUp(aliasName) + "|" + "DOB:" + cleanUp(DOB) + "|" + "SSN:" + cleanUp(SSN) + "|" + "passportNumber:" + cleanUp(passportNumber);

	var phone = "homePhone1:" + cleanUp(homePhone1) + "|" + "homePhone2:" + cleanUp(homePhone2) + "|" + "homePhone3:" + cleanUp(homePhone3) + "|" + "workPhone1:" + cleanUp(workPhone1) + "|" + "workPhone2:" + cleanUp(workPhone2) + "|" + "workPhone3:" + cleanUp(workPhone3) + "|" + "mobilePhone1:" + cleanUp(mobilePhone1) + "|" + "mobilePhone2:" + cleanUp(mobilePhone2) + "|" + "mobilePhone3:" + cleanUp(mobilePhone3);

	var address = "currentAddress1:" + cleanUp(currentAddress1) + "|" + "currentAddress2:" + cleanUp(currentAddress2) + "|" + "currentAddress3:" + cleanUp(currentAddress3);

	var employer = "employerName1:" + cleanUp(employerName1) + "|" + "employerName2:" + cleanUp(employerName2) + "|" + "employerName3:" + cleanUp(employerName3);

	var product = "productName1:" + cleanUp(productName1) + "|" + "productName2:" + cleanUp(productName2) + "|" + "productName3:" + cleanUp(productName3);

	var remark = cleanUp(remarks);	

	var transHash = SkipTraceContract.at(SkipTraceContractAddress).addSkipTraceRecord.sendTransaction(profile, phone, address, employer, product, remark, {from: coinBaseAddress, data:SkipTraceCompiled.CustomerSkipTrace.code, gas: 10000000});
	
	console.log("Trans hash generated from Blockchain ->  " + transHash);
	console.log(" ");	
	
	return transHash;

}

function updateSkipTraceRecordOnChain(customerID, firstName, middleName, lastName, aliasName, DOB, SSN, passportNumber, homePhone1, homePhone2, homePhone3, workPhone1, workPhone2, workPhone3, mobilePhone1, mobilePhone2, mobilePhone3, currentAddress1, currentAddress2, currentAddress3, employerName1, employerName2, employerName3, productName1, productName2, productName3, remarks)
{

	var profile = "firstName:" + cleanUp(firstName) + "|" + "middleName:" + cleanUp(middleName) + "|" + "lastName:" + cleanUp(lastName) + "|" + "aliasName:" + cleanUp(aliasName) + "|" + "DOB:" + cleanUp(DOB) + "|" + "SSN:" + cleanUp(SSN) + "|" + "passportNumber:" + cleanUp(passportNumber);

	var phone = "homePhone1:" + cleanUp(homePhone1) + "|" + "homePhone2:" + cleanUp(homePhone2) + "|" + "homePhone3:" + cleanUp(homePhone3) + "|" + "workPhone1:" + cleanUp(workPhone1) + "|" + "workPhone2:" + cleanUp(workPhone2) + "|" + "workPhone3:" + cleanUp(workPhone3) + "|" + "mobilePhone1:" + cleanUp(mobilePhone1) + "|" + "mobilePhone2:" + cleanUp(mobilePhone2) + "|" + "mobilePhone3:" + cleanUp(mobilePhone3);

	var address = "currentAddress1:" + cleanUp(currentAddress1) + "|" + "currentAddress2:" + cleanUp(currentAddress2) + "|" + "currentAddress3:" + cleanUp(currentAddress3);

	var employer = "employerName1:" + cleanUp(employerName1) + "|" + "employerName2:" + cleanUp(employerName2) + "|" + "employerName3:" + cleanUp(employerName3);

	var product = "productName1:" + cleanUp(productName1) + "|" + "productName2:" + cleanUp(productName2) + "|" + "productName3:" + cleanUp(productName3);

	var remark = cleanUp(remarks);	

	var transHash = SkipTraceContract.at(SkipTraceContractAddress).updateSkipTraceRecord.sendTransaction(customerID, profile, phone, address, employer, product, remark, {from: coinBaseAddress, data:SkipTraceCompiled.CustomerSkipTrace.code, gas: 10000000});

	console.log("Trans hash generated from Blockchain ->  " + transHash);
	console.log(" ");	
	
	return transHash;

}

function querySkipTraceRecordOnChain(customerID)
{

	var transHash = SkipTraceContract.at(SkipTraceContractAddress).querySkipTraceRecord.sendTransaction(customerID, {from: coinBaseAddress, data:SkipTraceCompiled.CustomerSkipTrace.code, gas: 10000000});
	
	console.log("Trans hash generated from Blockchain ->  " + transHash);
	console.log(" ");	
	
	return transHash;

}

function getRecordCountOnChain()
{

	var transHash = SkipTraceContract.at(SkipTraceContractAddress).getRecordCount.sendTransaction({from: coinBaseAddress, data:SkipTraceCompiled.CustomerSkipTrace.code, gas: 10000000});
	
	console.log("Trans hash generated from Blockchain ->  " + transHash);
	console.log(" ");	
	
	return transHash;

}

function resetOnChain()
{

	var transHash = SkipTraceContract.at(SkipTraceContractAddress).reset.sendTransaction({from: coinBaseAddress, data:SkipTraceCompiled.CustomerSkipTrace.code, gas: 10000000});
	
	console.log("Trans hash generated from Blockchain ->  " + transHash);
	console.log(" ");	
	
	return transHash;

}

function resetOnDB()
{

	web3.db.putString("CreateLog", "logString", "[]");
	web3.db.putString("UpdateLog", "logString", "[]");
	web3.db.putString("QueryLog", "logString", "[]");

}

function getCreateLogFromDB()
{

	return web3.db.getString("CreateLog", "logString");

}

function updateCreateLogOnDB(logString)
{

	web3.db.putString("CreateLog", "logString", logString);

}

function printCreateLogFromDB()
{

	var obj = JSON.parse(getCreateLogFromDB());
	for (i = 0; i < obj.length; i++) {	
		console.log("");	
		console.log("------ Record No: " + (i+1) +"-----");
		console.log(JSON.stringify(obj[i]));
		console.log("");
	}

}

function isCustRecordPending(transHash)
{
	var obj = web3.eth.pendingTransactions;
	if (obj != null){
		for (i = 0; i < obj.length; i++) {	
			if (obj[i].hash == transHash) return true;
		}
	}
	return false;
}
	
function getCusotmerDetailsFromDB(customerID)
{
	var position = null;
	obj = JSON.parse(getUpdateLogFromDB());
	for (i = 0; i < obj.length; i++) {	
		if (obj[i].customerID == customerID) position = i;
	}
	if (position != null) return JSON.stringify(obj[position]);
	
	position = null;
	obj = JSON.parse(getCreateLogFromDB());
	for (i = 0; i < obj.length; i++) {	
		if (obj[i].customerID == customerID) position = i;
	}
	if (position != null) return JSON.stringify(obj[position]);
	
	return null;
}

function getRecordCountFromDB()
{

	var obj = JSON.parse(getCreateLogFromDB());	
	return obj.length;
	
}

function getUpdateLogFromDB()
{

	return web3.db.getString("UpdateLog", "logString");

}

function updateUpdateLogOnDB(logString)
{

	web3.db.putString("UpdateLog", "logString", logString);

}

function printUpdateLogFromDB()
{

	var obj = JSON.parse(getUpdateLogFromDB());
	for (i = 0; i < obj.length; i++) {	
		console.log("");	
		console.log("------ Record No: " + (i+1) +"-----");
		console.log(JSON.stringify(obj[i]));
		console.log("");
	}

}

function getQueryLogFromDB()
{

	return web3.db.getString("QueryLog", "logString");

}

function updateQueryLogOnDB(logString)
{

	web3.db.putString("QueryLog", "logString", logString);

}

function printQueryLogFromDB()
{

	var obj = JSON.parse(getQueryLogFromDB());
	for (i = 0; i < obj.length; i++) {	
		console.log("");	
		console.log("------ Record No: " + (i+1) +"-----");
		console.log(JSON.stringify(obj[i]));
		console.log("");
	}

}

function cleanUp(str){
	
 return(((str.replace("\"", "~")).replace("\'", "~")).replace("|", "~")).replace(":", "~");
 
}

function deSerialize(jsonString){	
	var objResult = JSON.parse(jsonString);	
	var addresses = splitString(objResult.addresses);
	var bankID = objResult.bankID;
	var customerID = objResult.customerID;
	var employer = splitString(objResult.employer);
	var phone = splitString(objResult.phone);
	var products = splitString(objResult.products);
	var profile = splitString(objResult.profile);
	var remarks = objResult.remarks;
	var timestamp = objResult.timestamp;
	
	var JSONValues = 
	'{ "currentAddress1":"'+ addresses[0]+'",'+'"currentAddress2":"'+addresses[1]+'",'+'"currentAddress3":"'+addresses[2]+'",'+ 
		'"bankID":"'+ bankID +'",'+
		'"customerID":"'+ customerID +'",'+
		'"employer1":"'+ employer[0]+'",'+'"employer2":"'+employer[1]+'",'+'"employer3":"'+employer[2]+'",'+ 
		'"homePhone1":"'+ phone[0]+'",'+'"homePhone2":"'+phone[1]+'",'+'"homePhone3":"'+phone[2]+'",'+ 
		'"workPhone1":"'+ phone[3]+'",'+'"workPhone2":"'+phone[4]+'",'+'"workPhone3":"'+phone[5]+'",'+ 			
		'"mobilePhone1":"'+ phone[6]+'",'+'"mobilePhone2":"'+phone[7]+'",'+'"mobilePhone3":"'+phone[8]+'",'+ 
		'"product1":"'+ products[0]+'",'+'"product2":"'+products[1]+'",'+'"product3":"'+products[2]+'",'+ 	
		'"firstName":"'+ profile[0]+'",'+'"middleName":"'+profile[1]+'",'+'"lastName":"'+profile[2]+'",'+ 
		'"aliasName":"'+ profile[3]+'",'+'"DOB":"'+profile[4]+'",'+'"SSN":"'+profile[5]+'",'+ 	
		'"passportNumber":"'+ profile[6]+'",'+'"remarks":"'+remarks+'",'+'"timestamp":"'+timestamp+'"}';
		return JSONValues;
}

function splitString(stringToSplit){	
	var arrayOfStrings = stringToSplit.split("|");	
	var arrayOfValues = [];	
	for (i = 0; i < arrayOfStrings.length; i++) { 
		var arrayOfkeyValues;
		arrayOfkeyValues = arrayOfStrings[i].split(":");
		arrayOfValues[i] = arrayOfkeyValues[1]
	}
	return arrayOfValues;
}