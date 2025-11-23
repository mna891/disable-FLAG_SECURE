console.log("[*] Frida script to disable FLAG_SECURE ...");
//N7[@m_na891] telegram: https://t.me/N7_Enzo
Java.perform(function () {
//N7[@m_na891] telegram: https://t.me/N7_Enzo
    try {//N7[@m_na891] telegram: https://t.me/N7_Enzo
        const Window = Java.use('android.view.Window');//N7[@m_na891] telegram: https://t.me/N7_Enzo
        Window.setFlags.implementation = function (flags, mask) {
            const FLAG_SECURE = 8192; 
            if ((mask & FLAG_SECURE) !== 0) {
                flags &= ~FLAG_SECURE;
            }//N7[@m_na891] telegram: https://t.me/N7_Enzo
//N7[@m_na891] telegram: https://t.me/N7_Enzo
            return this.setFlags(flags, mask);
        };//N7[@m_na891] telegram: https://t.me/N7_Enzo
        console.log("[+] Hooked : SUCCESS");
    } catch (error) {
        console.error("[-] Failed:", error.message);
    }//N7[@m_na891] telegram: https://t.me/N7_Enzo
//N7[@m_na891] telegram: https://t.me/N7_Enzo
//N7[@m_na891] telegram: https://t.me/N7_Enzo
    try {
        const SurfaceView = Java.use('android.view.SurfaceView');
        SurfaceView.setSecure.implementation = function (isSecure) {
            //N7[@m_na891] telegram: https://t.me/N7_Enzo
            return this.setSecure(false);
        };//N7[@m_na891] telegram: https://t.me/N7_Enzo
        console.log("[+] Hooked : SUCCESS");
    } catch (error) {//N7[@m_na891] telegram: https://t.me/N7_Enzo
        console.error("[-] Failed :", error.message);
    }//N7[@m_na891] telegram: https://t.me/N7_Enzo
//N7[@m_na891] telegram: https://t.me/N7_Enzo
    try {//N7[@m_na891] telegram: https://t.me/N7_Enzo
        const LayoutParams = Java.use('android.view.WindowManager$LayoutParams');//N7[@m_na891] telegram: https://t.me/N7_Enzo
        LayoutParams.$init.overload('int', 'int').implementation = function(type, flags) {//N7[@m_na891] telegram: https://t.me/N7_Enzo
            const FLAG_SECURE = 8192;
            if ((flags & FLAG_SECURE) !== 0) {
                flags &= ~FLAG_SECURE;//N7[@m_na891] telegram: https://t.me/N7_Enzo
            }//N7[@m_na891] telegram: https://t.me/N7_Enzo
            return this.$init(type, flags);
        };//N7[@m_na891] telegram: https://t.me/N7_Enzo
        console.log("[+] Hooked : SUCCESS");
    } catch (error) {
        console.error("[-] Failed :", error.message);
    }//N7[@m_na891] telegram: https://t.me/N7_Enzo
//N7[@m_na891] telegram: https://t.me/N7_Enzo
    console.log("[*] All hooks are in place. Script is running silently.");
});//N7[@m_na891] telegram: https://t.me/N7_Enzo
//N7[@m_na891] telegram: https://t.me/N7_Enzo