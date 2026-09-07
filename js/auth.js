// Auth Service

const USERS_STORAGE_KEY =
    "coffee_shop_users";

const CURRENT_USER_STORAGE_KEY =
    "coffee_shop_current_user";


// Get All Users

export function getUsers() {
    const storedUsers =
        localStorage.getItem(
            USERS_STORAGE_KEY
        );

    if (!storedUsers) {
        return [];
    }

    try {
        const users =
            JSON.parse(storedUsers);

        return Array.isArray(users)
            ? users
            : [];
    } catch {
        return [];
    }
}


// Save All Users

function saveUsers(users) {
    localStorage.setItem(
        USERS_STORAGE_KEY,
        JSON.stringify(users)
    );
}


// Generate User ID

function generateUserId() {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID ===
        "function"
    ) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`;
}


// Normalize Email

function normalizeEmail(email) {
    return email
        .trim()
        .toLowerCase();
}


// Get Current User ID

function getCurrentUserId() {
    const storedSession =
        localStorage.getItem(
            CURRENT_USER_STORAGE_KEY
        );

    if (!storedSession) {
        return null;
    }

    try {
        const session =
            JSON.parse(storedSession);

        return session?.userId || null;
    } catch {
        return null;
    }
}


// Get Safe User

function getSafeUser(user) {
    if (!user) {
        return null;
    }

    const {
        password,
        ...safeUser
    } = user;

    return {
        ...safeUser,

        avatar:
            safeUser.avatar ?? null,

        preferences: {
            theme:
                safeUser.preferences?.theme ===
                    "light"
                    ? "light"
                    : "dark",

            language:
                safeUser.preferences?.language ===
                    "ar"
                    ? "ar"
                    : "en"
        }
    };
}


// Register User

export function registerUser({
    name,
    email,
    password
}) {
    const trimmedName =
        name.trim();

    const normalizedEmail =
        normalizeEmail(email);

    if (!trimmedName) {
        throw new Error(
            "NAME_REQUIRED"
        );
    }

    if (!normalizedEmail) {
        throw new Error(
            "EMAIL_REQUIRED"
        );
    }

    if (!password) {
        throw new Error(
            "PASSWORD_REQUIRED"
        );
    }

    const users = getUsers();

    const emailAlreadyExists =
        users.some(
            user =>
                normalizeEmail(
                    user.email
                ) === normalizedEmail
        );

    if (emailAlreadyExists) {
        throw new Error(
            "EMAIL_EXISTS"
        );
    }

    const newUser = {
        id: generateUserId(),

        name: trimmedName,

        email: normalizedEmail,

        // Temporary frontend-only storage.
        // Do not use plain-text passwords in production.
        password,

        avatar: null,

        preferences: {
            theme: "dark",
            language: "en"
        }
    };

    users.push(newUser);

    saveUsers(users);

    return getSafeUser(newUser);
}


// Login User

export function loginUser(
    email,
    password
) {
    const normalizedEmail =
        normalizeEmail(email);

    const users = getUsers();

    const user =
        users.find(
            user =>
                normalizeEmail(
                    user.email
                ) === normalizedEmail &&
                user.password === password
        );

    if (!user) {
        throw new Error(
            "INVALID_CREDENTIALS"
        );
    }

    localStorage.setItem(
        CURRENT_USER_STORAGE_KEY,
        JSON.stringify({
            userId: user.id
        })
    );

    return getSafeUser(user);
}


// Get Current User

export function getCurrentUser() {
    const currentUserId =
        getCurrentUserId();

    if (!currentUserId) {
        return null;
    }

    const users = getUsers();

    const currentUser =
        users.find(
            user =>
                user.id === currentUserId
        );

    return getSafeUser(
        currentUser
    );
}


// Update Current User

export function updateCurrentUser(
    updates = {}
) {
    const currentUserId =
        getCurrentUserId();

    if (!currentUserId) {
        throw new Error(
            "NOT_AUTHENTICATED"
        );
    }

    const users = getUsers();

    const userIndex =
        users.findIndex(
            user =>
                user.id === currentUserId
        );

    if (userIndex === -1) {
        throw new Error(
            "USER_NOT_FOUND"
        );
    }

    const currentUser =
        users[userIndex];

    const updatedTheme =
        updates.preferences?.theme;

    const updatedLanguage =
        updates.preferences?.language;

    const updatedUser = {
        ...currentUser,

        name:
            typeof updates.name ===
                "string"
                ? updates.name.trim()
                : currentUser.name,

        avatar:
            Object.prototype.hasOwnProperty.call(
                updates,
                "avatar"
            )
                ? updates.avatar
                : currentUser.avatar,

        preferences: {
            theme:
                updatedTheme === "light" ||
                    updatedTheme === "dark"
                    ? updatedTheme
                    : currentUser.preferences
                        ?.theme ?? "dark",

            language:
                updatedLanguage === "ar" ||
                    updatedLanguage === "en"
                    ? updatedLanguage
                    : currentUser.preferences
                        ?.language ?? "en"
        }
    };

    if (!updatedUser.name) {
        throw new Error(
            "NAME_REQUIRED"
        );
    }

    users[userIndex] =
        updatedUser;

    saveUsers(users);

    return getSafeUser(
        updatedUser
    );
}

// Check Authentication

export function isAuthenticated() {
    return getCurrentUser() !== null;
}


// Logout User

export function logout() {
    localStorage.removeItem(
        CURRENT_USER_STORAGE_KEY
    );
}