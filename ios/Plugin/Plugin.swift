import Foundation
import Capacitor
import FirebaseCore
import FirebaseAuth

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(HatsaAuth)
public class HatsaAuth: CAPPlugin {
    
    public override func load() {
        if (FirebaseApp.app() == nil) {
            FirebaseApp.configure()
        }
    }
    
    @objc func loginEmailPassword(_ call: CAPPluginCall) {
        let iEmail = call.getString("email")
        let iPassword = call.getString("password")
        if let email = iEmail, let password = iPassword {
            Auth.auth().signIn(withEmail: email, password: password) { (result, error) in
                if error != nil {
                    call.reject(error.debugDescription)
                } else {
                    call.resolve()
                }
            }
        } else {
            call.reject("Please set keys: email, password")
        }
    }
}
