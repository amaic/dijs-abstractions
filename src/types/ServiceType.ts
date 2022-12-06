export enum ServiceType
{
    /** Register already existing instance. */
    Instance = 'instance',

    /** Only one instance for all. */
    Singleton = 'singleton',

    /** Each name gets it's own instance, but only one instance per name. */
    Named = 'named',

    /** Each scope gets it's own instance, but only one instance per scope. */
    Scoped = 'scoped',

    /** Each scope/name combination gets it's own instance, but only one instance per scope/name combination. */
    ScopedNamed = 'scopednamed',

    /** Everytime a new instance. */
    Transient = 'transient',

    /** Everytime a new instance for each name. */
    TransientNamed = 'transientnamed'
}
