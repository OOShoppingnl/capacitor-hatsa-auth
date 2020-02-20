var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
export class HatsaAuthWeb extends WebPlugin {
    constructor() {
        super({
            name: 'HatsaAuth',
            platforms: ['web']
        });
    }
    loginEmailPassword(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return Promise.resolve({ email: options.email, password: options.password, success: false });
        });
    }
}
const HatsaAuth = new HatsaAuthWeb();
export { HatsaAuth };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HatsaAuth);
//# sourceMappingURL=web.js.map