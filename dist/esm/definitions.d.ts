declare module "@capacitor/core" {
    interface PluginRegistry {
        HatsaAuth: HatsaAuthPlugin;
    }
}
export interface HatsaAuthPlugin {
    loginEmailPassword(options: {
        email: string;
        password: string;
    }): Promise<{}>;
}
