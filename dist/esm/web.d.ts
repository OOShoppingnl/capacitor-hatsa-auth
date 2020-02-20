import { WebPlugin } from '@capacitor/core';
import { HatsaAuthPlugin } from './definitions';
export declare class HatsaAuthWeb extends WebPlugin implements HatsaAuthPlugin {
    constructor();
    loginEmailPassword(options: {
        email: string;
        password: string;
    }): Promise<{
        success: boolean;
    }>;
}
declare const HatsaAuth: HatsaAuthWeb;
export { HatsaAuth };
