import * as vscode from "vscode";

export function activate(context) {
	vscode.window.showInformationMessage("Pseudocode OCR extension loaded!");
	// Listen for document changes
	vscode.workspace.onDidChangeTextDocument((e) => {
		if (e.document.languageId === "ocr-pseudocode" || e.document.languageId === "ocr-pseudocode-strict") {
			checkModeComment(e.document);
		}
	});

	// Check when document is opened
	vscode.workspace.onDidOpenTextDocument((doc) => {
		if (doc.languageId === "ocr-pseudocode" || doc.languageId === "ocr-pseudocode-strict") {
			checkModeComment(doc);
		}
	});

	//Check currently active document
	if (vscode.window.activeTextEditor) {
		const doc = vscode.window.activeTextEditor.document;
		if (doc.languageId === "ocr-pseudocode" || doc.languageId === "ocr-pseudocode-strict") {
			checkModeComment(doc, context);
		}
	}
}

function checkModeComment(document) {
	const firstLine = document.lineAt(0).text;
	const secondLine = document.lineCount > 1 ? document.lineAt(1).text : "";

	const strictModePattern = /^\s*\/\/\s*strict\s*$/i;

	if (strictModePattern.test(firstLine) || strictModePattern.test(secondLine)) {
		applyStrictMode(document);
	} else {
		applyExtendedMode(document);
	}
}

function applyStrictMode(document) {
	if (document.languageId !== "ocr-pseudocode-strict") {
		vscode.languages.setTextDocumentLanguage(document, "ocr-pseudocode-strict");
	}
}

function applyExtendedMode(document) {
	if (document.languageId !== "ocr-pseudocode") {
		vscode.languages.setTextDocumentLanguage(document, "ocr-pseudocode");
	}
}
