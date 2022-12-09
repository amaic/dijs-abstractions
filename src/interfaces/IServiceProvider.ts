/**
 * Provide services. 
 * Register services with IServiceCollection and get main scope service provider from it.
 */
export default interface IServiceProvider
{
    IServiceProvider: symbol;

    /** If service provider is main scope then true else false. */
    get IsMainContext(): boolean;

    /**
     * Get desired service by unique service interface identifier. 
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns instance of service or null if service interface identifier is unknown; if multiple registrations gets the latest registration
     */
    GetService(serviceIdentifier: symbol, name?: string): any;

    /**
     * Generic variant.
     * Get desired service by unique service interface identifier. 
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns instance of service or null if service interface identifier is unknown; if multiple registrations gets the latest registration
     */
    GetService<INTERFACE>(serviceIdentifier: symbol, name?: string): INTERFACE;

    /**
     * Get desired service by unique service interface identifier. 
     * Throws exception if service does not exist.
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns instance of service; if multiple registrations gets the latest registration
     */
    GetRequiredService(serviceIdentifier: symbol, name?: string): any;

    /**
     * Generic variant.
     * Get desired service by unique service interface identifier. 
     * Throws exception if service does not exist.
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns instance of service; if multiple registrations gets the latest registration
     */
    GetRequiredService<INTERFACE>(serviceIdentifier: symbol, name?: string): INTERFACE;

    /**
     * Get desired services by unique service interface identifier. 
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns all instances of service or an empty array
     */
    GetServices(serviceIdentifier: symbol, name?: string): any[];

    /**
     * Generic variant.
     * Get desired services by unique service interface identifier. 
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns all instances of service or an empty array
     */
    GetServices<INTERFACE>(serviceIdentifier: symbol, name?: string): INTERFACE[];

    /**
     * Get desired services by unique service interface identifier. 
     * Throws exception if service does not exist.
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns all instances of service
     */
    GetRequiredServices(serviceIdentifier: symbol, name?: string): any[];

    /**
     * Generic variant.
     * Get desired services by unique service interface identifier. 
     * Throws exception if service does not exist.
     * @param serviceIdentifier unique service interface identifier
     * @param name optional name if named
     * @returns all instances of service
     */
    GetRequiredServices<INTERFACE>(serviceIdentifier: symbol, name?: string): INTERFACE[];

    /** Create new service provider scope. */
    CreateScope(): IServiceProvider;
}

/** Unique IServiceProvider identifier. */
export const IServiceProviderIdentifier = Symbol("IServiceProvider");

/**
 * Test if object implements interface IServiceProvider.
 * @param instance object to test
 * @returns if interface is implemented then true else false
 */
export function IsIServiceProvider(instance: any): instance is IServiceProvider
{
    return instance?.IServiceProvider === IServiceProviderIdentifier;
}