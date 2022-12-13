"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.linter = void 0;
const core = __importStar(require("@actions/core"));
const preset = core.getInput('convention-name');
const allowedTags = [
    "build",
    "ci",
    "chore",
    "docs",
    "feat",
    "fix",
    "perf",
    "refactor",
    "test",
];
function linter(title) {
    let [tag, subj, msg] = extractContext(title);
    if (!allowedTags.includes(tag)) {
        throw ("❌ Incorrect PR tag.");
    }
    ;
    console.log(tag);
    console.log("✅ PR title is correct!");
}
exports.linter = linter;
;
function extractContext(title) {
    if (preset === 'conventionalcommits') {
        var regEx = /(^[\w\s?]+)(\(.+\)!:\s)([^A-Z\W].*[^.]$)/g;
    }
    else {
        var regEx = /(^[\w\s?]+)(\(.+\):\s)([^A-Z\W].*[^.]$)/g;
    }
    ;
    console.log(preset);
    console.log(regEx);
    var matches = title.match(regEx) || [];
    console.log(matches);
    try {
        let tag = matches.map(e => e.replace(regEx, '$1'))[0];
        let subj = matches.map(e => e.replace(regEx, '$2'))[0];
        let msg = matches.map(e => e.replace(regEx, '$3'))[0];
        if (!tag || !subj || !msg) {
            throw ("❌ Incorrect Title.");
        }
        ;
        return [tag, subj, msg];
    }
    catch (err) {
        throw (err);
    }
    ;
}
;
