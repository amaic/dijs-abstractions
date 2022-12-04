"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceType = exports.IsIServiceProvider = exports.IServiceProviderIdentifier = exports.IsIServiceCollection = exports.IServiceCollectionIdentifier = void 0;
const IServiceCollection_1 = require("./interfaces/IServiceCollection");
Object.defineProperty(exports, "IServiceCollectionIdentifier", { enumerable: true, get: function () { return IServiceCollection_1.IServiceCollectionIdentifier; } });
Object.defineProperty(exports, "IsIServiceCollection", { enumerable: true, get: function () { return IServiceCollection_1.IsIServiceCollection; } });
const IServiceProvider_1 = require("./interfaces/IServiceProvider");
Object.defineProperty(exports, "IServiceProviderIdentifier", { enumerable: true, get: function () { return IServiceProvider_1.IServiceProviderIdentifier; } });
Object.defineProperty(exports, "IsIServiceProvider", { enumerable: true, get: function () { return IServiceProvider_1.IsIServiceProvider; } });
const ServiceType_1 = require("./types/ServiceType");
Object.defineProperty(exports, "ServiceType", { enumerable: true, get: function () { return ServiceType_1.ServiceType; } });
//# sourceMappingURL=index.js.map