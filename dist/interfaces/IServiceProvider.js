"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIServiceProvider = exports.IServiceProviderIdentifier = void 0;
/** Unique IServiceProvider identifier. */
exports.IServiceProviderIdentifier = Symbol("IServiceProvider");
/**
 * Test if object implements interface IServiceProvider.
 * @param instance object to test
 * @returns if interface is implemented then true else false
 */
function IsIServiceProvider(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IServiceProvider) === exports.IServiceProviderIdentifier;
}
exports.IsIServiceProvider = IsIServiceProvider;
//# sourceMappingURL=IServiceProvider.js.map