import IServiceCollection, { IServiceCollectionIdentifier } from "../src/interfaces/IServiceCollection";
import IServiceProvider, { IServiceProviderIdentifier } from "../src/interfaces/IServiceProvider";
import { ServiceConstructor } from "../src/types/ServiceConstructor";
import { ServiceRegistrationMode } from "../src/types/ServiceRegistrationMode";
import { ServiceType } from "../src/types/ServiceType";

describe("IServiceCollection", () =>
{
    test("Registration variants", () =>
    {
        const sc: IServiceCollection = new ServiceCollection();

        sc.RegisterInstance<IFoo, Foo>(ServiceRegistrationMode.Overwrite, IFooIdentifier, new Foo());

        sc.RegisterFactory<IFoo>(ServiceRegistrationMode.Multiple, ServiceType.Transient, IFooIdentifier, () => new Foo());

        sc.RegisterClass<IFoo, typeof Foo>(ServiceRegistrationMode.Multiple, ServiceType.Transient, IFooIdentifier, Foo);
        sc.RegisterClass<IFoo, typeof Foo>(ServiceRegistrationMode.Multiple, ServiceType.Transient, IFooIdentifier, Foo,
            (classType) => new classType()
            );
    });
});

class ServiceCollection implements IServiceCollection
{
    IServiceCollection: symbol = IServiceCollectionIdentifier;

    RegisterInstance<INTERFACE, INSTANCE extends INTERFACE>(registrationMode: ServiceRegistrationMode, interfaceIdentifier: symbol, instance: INSTANCE): void
    {
        // noop
    }
    RegisterFactory<INTERFACE>(registrationMode: ServiceRegistrationMode, serviceType: ServiceType, interfaceIdentifier: symbol, factory: (serviceProvider: IServiceProvider, name?: string | undefined) => INTERFACE): void
    {
        // noop
    }
    RegisterClass<INTERFACE, CLASSTYPE extends ServiceConstructor<INTERFACE>>(registrationMode: ServiceRegistrationMode, serviceType: ServiceType, interfaceIdentifier: symbol, classType: CLASSTYPE, constructor?: ((classType: CLASSTYPE, serviceProvider: IServiceProvider, name?: string | undefined) => INTERFACE) | undefined): void
    {
        // noop
    }
    GetServiceProvider(): IServiceProvider
    {
        return new ServiceProvider();
    }


}

class ServiceProvider implements IServiceProvider
{
    IServiceProvider: symbol = IServiceProviderIdentifier;

    get IsMainContext(): boolean
    {
        throw new Error("Method not implemented.");
    }
    GetService(serviceIdentifier: symbol, name?: string | undefined);
    GetService<INTERFACE>(serviceIdentifier: symbol, name?: string | undefined): INTERFACE;
    GetService(serviceIdentifier: unknown, name?: unknown): any
    {
        throw new Error("Method not implemented.");
    }
    GetRequiredService(serviceIdentifier: symbol, name?: string | undefined);
    GetRequiredService<INTERFACE>(serviceIdentifier: symbol, name?: string | undefined): INTERFACE;
    GetRequiredService(serviceIdentifier: unknown, name?: unknown): any
    {
        throw new Error("Method not implemented.");
    }
    CreateScope(): IServiceProvider
    {
        throw new Error("Method not implemented.");
    }
}

interface IFoo
{

}

class Foo implements IFoo
{

}

const IFooIdentifier = Symbol();