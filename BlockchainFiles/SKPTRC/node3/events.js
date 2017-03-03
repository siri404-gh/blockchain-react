
// Start Event Listener for SkipTraceAddEvent
SkipTraceContract.at(SkipTraceContractAddress).SkipTraceAddEvent().watch(function(error, result){
	console.log(" ");
	console.log("SkipTraceAddEvent Event Listener - Add Skip Trace Record Details...");
	console.log("Event Message from Blockchain Contract ->  " + deSerialize(JSON.stringify(result.args)));
	console.log(" ");	

	var objResult = JSON.parse(getCreateLogFromDB());
	objResult[objResult.length] = JSON.parse(deSerialize(JSON.stringify(result.args)));		
	var logString = JSON.stringify(objResult);	
	updateCreateLogOnDB(logString);
});


// Start Event Listener for SkipTraceQueryEvent
SkipTraceContract.at(SkipTraceContractAddress).SkipTraceQueryEvent().watch(function(error, result){
	console.log(" ");
	console.log("SkipTraceQueryEvent Event Listener - Query Skip Trace Record Details...");
	console.log("Event Message from Blockchain Contract ->  " + deSerialize(JSON.stringify(result.args)));
	console.log(" ");

	var objResult = JSON.parse(getQueryLogFromDB());
	objResult[objResult.length] = JSON.parse(deSerialize(JSON.stringify(result.args)));		
	var logString = JSON.stringify(objResult);	
	updateQueryLogOnDB(logString);	
});


// Start Event Listener for SkipTraceUpdateEvent
SkipTraceContract.at(SkipTraceContractAddress).SkipTraceUpdateEvent().watch(function(error, result){
	console.log(" ");
	console.log("SkipTraceUpdateEvent Event Listener - Update Skip Trace Record Details...");
	console.log("Event Message from Blockchain Contract ->  " + deSerialize(JSON.stringify(result.args)));
	console.log(" ");
	
	var objResult = JSON.parse(getUpdateLogFromDB());
	objResult[objResult.length] = JSON.parse(deSerialize(JSON.stringify(result.args)));		
	var logString = JSON.stringify(objResult);	
	updateUpdateLogOnDB(logString);	
});


// Start Event Listener for SkipTraceRecordCountEvent
SkipTraceContract.at(SkipTraceContractAddress).SkipTraceRecordCountEvent().watch(function(error, result){
	console.log(" ");
	console.log("SkipTraceRecordCountEvent Event Listener - Skip Trace Record Count Details...");
	console.log("Event Message from Blockchain Contract ->  " + JSON.stringify(result.args));
	console.log(" ");
});





