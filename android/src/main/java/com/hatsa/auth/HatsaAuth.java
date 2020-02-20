package com.hatsa.auth;

import android.support.annotation.NonNull;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.FirebaseApp;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

@NativePlugin()
public class HatsaAuth extends Plugin {

    private FirebaseAuth mAuth;

    public void load() {
        super.load();
        if(FirebaseApp.getApps(this.getContext()).size() == 0) {
            FirebaseApp.initializeApp(this.getContext());
        }
        this.mAuth = FirebaseAuth.getInstance();
    }

    @PluginMethod()
    public void loginEmailPassword(PluginCall call) {
        final PluginCall capCall = call;
        if (call.getData().has("email") && call.getData().has("password")) {
            String email = call.getString("email");
            String password = call.getString("password");
            mAuth.signInWithEmailAndPassword(email, password)
                .addOnCompleteListener(getActivity(), new OnCompleteListener<AuthResult>() {
                        @Override
                        public void onComplete(@NonNull Task<AuthResult> task) {
                            if (task.isSuccessful()) {
                                capCall.resolve();
                            } else {
                                capCall.reject(task.getException().getMessage());
                            }
                        }
                }).addOnFailureListener(getActivity(), new OnFailureListener() {
                @Override
                public void onFailure(@NonNull Exception e) {
                    capCall.reject(e.getMessage());
                }
            });
        } else {
            call.reject("Please set keys: email, password");
        }
    }
}
