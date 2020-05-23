// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('time-to-relax.helloWorld', () => {
		vscode.window.showInformationMessage('Time To relax started in your machine');
		blinkEyes();
		timeToTakeWater();
		rotateYourHands();
	});
	context.subscriptions.push(disposable);
}

function blinkEyes(){
	setInterval(function(){ 
		vscode.window.showInformationMessage('Time To blink your eyes');
	 }, 20*60000);
}

function rotateYourHands(){
	setInterval(function(){ 
		vscode.window.showInformationMessage('Time to rotate your hands');
	 }, 30*60000); 
}

function timeToTakeWater(){
	setInterval(function(){ 
		vscode.window.showInformationMessage('Time to take water');
	 }, 59*60000);
}



// this method is called when your extension is deactivated
export function deactivate() {}
