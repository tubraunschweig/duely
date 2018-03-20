/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

/* define module to allow import of JSON files*/
declare module "*.json" {
    const value: any;
    export default value;
}
