// Auth Guard

import { getCurrentUser }
    from "./auth.js";

export function requireAuth() {
    const currentUser =
        getCurrentUser();

    if (!currentUser) {
        window.location.replace(
            "sign-in.html"
        );

        return null;
    }

    return currentUser;
}