"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsIServiceCollection = exports.IServiceCollectionIdentifier = void 0;
/** Unique IServiceCollection identifier. */
exports.IServiceCollectionIdentifier = Symbol("IServiceCollection");
/**
 * Test if object implements interface IServiceCollection.
 * @param instance object to test
 * @returns if interface is implemented then true else false
 */
function IsIServiceCollection(instance) {
    return (instance === null || instance === void 0 ? void 0 : instance.IServiceCollection) === exports.IServiceCollectionIdentifier;
}
exports.IsIServiceCollection = IsIServiceCollection;
//# sourceMappingURL=IServiceCollection.js.map