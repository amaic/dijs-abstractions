"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRegistrationMode = void 0;
var ServiceRegistrationMode;
(function (ServiceRegistrationMode) {
    /** Only one registration per identifier or identifier with name allowed. */
    ServiceRegistrationMode["Single"] = "single";
    /** Overwrite previous registrations of identifier or identifier with name. */
    ServiceRegistrationMode["Overwrite"] = "overwrite";
    /** Multiple registrations per identifier or identifier with namre allowed. */
    ServiceRegistrationMode["Multiple"] = "multiple";
})(ServiceRegistrationMode = exports.ServiceRegistrationMode || (exports.ServiceRegistrationMode = {}));
//# sourceMappingURL=ServiceRegistrationMode.js.map