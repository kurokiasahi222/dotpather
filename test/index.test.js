"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe("hello", () => {
    it("should return true", () => {
        expect(true).toBe(true);
    });
});
describe("dotpather", () => {
    it("should be a function", () => {
        expect(index_1.default).not.toBeUndefined();
        expect(typeof index_1.default).toBe("function");
    });
    it("should return value at property", () => {
        const lookup = (0, index_1.default)("check");
        expect(lookup({ check: "woo" })).toBe("woo");
        expect(lookup({ check: { derp: true } })).toStrictEqual({ derp: true });
    });
    it("should find nested values", () => {
        const lookup = (0, index_1.default)("check.that.attribute");
        expect(lookup({ check: { that: { attribute: 666 } } })).toBe(666);
    });
    it("should return undefined if path not found", () => {
        const lookup = (0, index_1.default)("invalid.path");
        expect(lookup({ valid: { path: true } })).toBeUndefined();
    });
    it("should return falsey values", () => {
        const lookup = (0, index_1.default)("falsey.value");
        expect(lookup({ falsey: { value: false } })).toBeFalsy();
        expect(lookup({ falsey: { value: null } })).toBeNull();
    });
    it("should work on arrays too", () => {
        const lookup = (0, index_1.default)("arr.1");
        expect(lookup({ arr: [44, 22] })).toBe(22);
    });
});
