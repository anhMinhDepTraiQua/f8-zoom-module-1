import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import path from "path";

export default defineConfig({
    base:"f8-zoom-module-1",
    root: "src",
    publicDir: "../public",
    build: {
        outDir: "../dist",
        emptyOutDir: true,
        rollupOptions: {
            input: {
                sign_in: path.resolve(__dirname, "src/sign-in.html"),
                sign_up: path.resolve(__dirname, "src/sign-up.html"),
                index: path.resolve(__dirname, "src/index.html"),
                collection: path.resolve(__dirname, "src/collection.html"),
                payment: path.resolve(__dirname, "src/payment.html"),
                account: path.resolve(__dirname, "src/account.html"),
            },
        },
    },
    plugins: [ViteEjsPlugin()],
})