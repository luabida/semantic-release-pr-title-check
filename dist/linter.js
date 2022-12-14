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
function linter(title) {
    let allowedTags = [
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
    let preset = core.getInput('convention-name');
    try {
        let splitTitle = extractContext(title, preset);
        let tag = splitTitle[0];
        if (!allowedTags.includes(tag)) {
            throw (`- Incorrect PR tag: "${tag}" is not accepted by Semantic-Release`);
        }
        ;
        console.log("✅ PR title is correct!");
    }
    catch (err) {
        console.log("❌ Incorrect PR title.");
        throw (err);
    }
    ;
}
exports.linter = linter;
;
function extractContext(title, preset) {
    let regEx = /(^[\w\s?]+)(\(.+\)(!?):\s)([^A-Z\W].*[^.]$)/g;
    let matches = title.matchAll(regEx);
    try {
        let results = Array.from(matches)[0].filter(Boolean).splice(1);
        if (results.length === 4 && preset !== `conventionalcommits`) {
            throw ("- To use '!' in the title, set preset as `convenvionalcommits`");
        }
        ;
        return results;
    }
    catch (err) {
        throw (`${err}\n- "${title}" format is incorrect. Please use Angular Commit Message Conventions`);
    }
    ;
}
;
