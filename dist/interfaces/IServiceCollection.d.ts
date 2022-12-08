import { ServiceConstructor } from "../types/ServiceConstructor";
import { ServiceRegistrationMode } from "../types/ServiceRegistrationMode";
import { ServiceType } from "../types/ServiceType";
import IServiceProvider from "./IServiceProvider";
/**
 * Register services and get main scope service provider.
 */
export default interface IServiceCollection {
    IServiceCollection: symbol;
    /**
     * Register an already exisiting service instance.
     * @param registrationMode single registration, multiple registrations or overwrite existing
     * @param interfaceIdentifier unique identifier of interface
     * @param instance already exisiting instance
     */
    RegisterInstance<INTERFACE, INSTANCE extends INTERFACE>(registrationMode: ServiceRegistrationMode, interfaceIdentifier: symbol, instance: INSTANCE): void;
    /**
     * Register a service factory.
     * @param registrationMode single registration, multiple registrations or overwrite existing
     * @param serviceType singleton, scoped, transient or a named variant
     * @param interfaceIdentifier unique identifier of interface
     * @param factory service factory function; delivers service provider and if named requested name
     */
    RegisterFactory<INTERFACE>(registrationMode: ServiceRegistrationMode, serviceType: ServiceType, interfaceIdentifier: symbol, factory: (serviceProvider: IServiceProvider, name?: string) => INTERFACE): void;
    /**
     * Register service class.
     * @param registrationMode single registration, multiple registrations or overwrite existing
     * @param serviceType singleton, scoped, transient or a named variant
     * @param interfaceIdentifier unique identifier of interface
     * @param classType type of service class
     * @param constructor optional constructor function; delivers type of service class, service provider and if named requested name
     */
    RegisterClass<INTERFACE, CLASSTYPE extends ServiceConstructor<INTERFACE>>(registrationMode: ServiceRegistrationMode, serviceType: ServiceType, interfaceIdentifier: symbol, classType: CLASSTYPE, constructor?: (classType: CLASSTYPE, serviceProvider: IServiceProvider, name?: string) => INTERFACE): void;
    /** Create main scope service provider. */
    CreateServiceProvider(): IServiceProvider;
}
/** Unique IServiceCollection identifier. */
export declare const IServiceCollectionIdentifier: unique symbol;
/**
 * Test if object implements interface IServiceCollection.
 * @param instance object to test
 * @returns if interface is implemented then true else false
 */
export declare function IsIServiceCollection(instance: any): instance is IServiceCollection;
//# sourceMappingURL=IServiceCollection.d.ts.map