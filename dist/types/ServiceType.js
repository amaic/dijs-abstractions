"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = void 0;
var ServiceType;
(function (ServiceType) {
    /** Register already existing instance. */
    ServiceType["Instance"] = "instance";
    /** Only one instance for all. */
    ServiceType["Singleton"] = "singleton";
    /** Each name gets it's own instance, but only one instance per name. */
    ServiceType["Named"] = "named";
    /** Each scope gets it's own instance, but only one instance per scope. */
    ServiceType["Scoped"] = "scoped";
    /** Each scope/name combination gets it's own instance, but only one instance per scope/name combination. */
    ServiceType["ScopedNamed"] = "scopednamed";
    /** Everytime a new instance. */
    ServiceType["Transient"] = "transient";
    /** Everytime a new instance for each name. */
    ServiceType["TransientNamed"] = "transientnamed";
})(ServiceType = exports.ServiceType || (exports.ServiceType = {}));
//# sourceMappingURL=ServiceType.js.map