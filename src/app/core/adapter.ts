//https://blog.florimondmanca.com/consuming-apis-in-angular-the-model-adapter-pattern


export interface Adapter<T> {
    adapt(item: any): T;
}
