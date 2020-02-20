import { WebPlugin } from '@capacitor/core';
import { HatsaAuthPlugin } from './definitions';

export class HatsaAuthWeb extends WebPlugin implements HatsaAuthPlugin {
  constructor() {
    super({
      name: 'HatsaAuth',
      platforms: ['web']
    });
  }

  async loginEmailPassword(options: { email: string, password: string }): Promise<{success: boolean}> {
    return Promise.resolve({email: options.email, password: options.password, success: false});
  }
}

const HatsaAuth = new HatsaAuthWeb();

export { HatsaAuth };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(HatsaAuth);
