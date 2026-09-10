// Auth 

const USERS_STORAGE_KEY =
    "coffee_shop_users";

const CURRENT_USER_STORAGE_KEY =
    "coffee_shop_current_user";


// Storage Helpers

function getStorage(key, fallback = null) {
    try {
        const value =
            localStorage.getItem(key);

        return value
            ? JSON.parse(value)
            : fallback;
    } catch {
        return fallback;
    }
}

function setStorage(key, value) {
    localStorage.setItem(
        key,
        JSON.stringify(value)
    );
}

function removeStorage(key) {
    localStorage.removeItem(key);
}


// User Helpers

export function getUsers() {
    const users =
        getStorage(
            USERS_STORAGE_KEY,
            []
        );

    return Array.isArray(users)
        ? users
        : [];
}

function saveUsers(users) {
    setStorage(
        USERS_STORAGE_KEY,
        users
    );
}

function findUserById(id) {
    return (
        getUsers().find(
            user =>
                user.id === id
        ) ?? null
    );
}

function findUserByEmail(email) {
    const normalizedEmail =
        normalizeEmail(email);

    return (
        getUsers().find(
            user =>
                normalizeEmail(
                    user.email
                ) === normalizedEmail
        ) ?? null
    );
}

function getCurrentUserId() {
    const session =
        getStorage(
            CURRENT_USER_STORAGE_KEY
        );

    return session?.userId ?? null;
}

function findCurrentUser() {
    const userId =
        getCurrentUserId();

    return userId
        ? findUserById(userId)
        : null;
}


// Utility Helpers

function generateUserId() {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {
        return crypto.randomUUID();
    }

    return `${Date.now()}-${Math.random()
        .toString(36)
        .slice(2)}`;
}

function normalizeEmail(email) {
    return email
        .trim()
        .toLowerCase();
}

function normalizePreferences(
    preferences = {}
) {
    return {
        theme:
            preferences.theme === "light"
                ? "light"
                : "dark",

        language:
            preferences.language === "ar"
                ? "ar"
                : "en"
    };
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

        preferences:
            normalizePreferences(
                safeUser.preferences
            )
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

    if (findUserByEmail(normalizedEmail)) {
        throw new Error(
            "EMAIL_EXISTS"
        );
    }

    const newUser = {
        id: generateUserId(),

        name: trimmedName,

        email: normalizedEmail,

        password,

        avatar: null,

        preferences:
            normalizePreferences()
    };

    const users =
        getUsers();

    users.push(newUser);

    saveUsers(users);

    return getSafeUser(newUser);
}


// Login User

export function loginUser(
    email,
    password
) {
    const user =
        findUserByEmail(email);

    if (
        !user ||
        user.password !== password
    ) {
        throw new Error(
            "INVALID_CREDENTIALS"
        );
    }

    setStorage(
        CURRENT_USER_STORAGE_KEY,
        {
            userId: user.id
        }
    );

    return getSafeUser(user);
}

// Get Current User

export function getCurrentUser() {
    return getSafeUser(
        findCurrentUser()
    );
}

// Update Current User

export function updateCurrentUser(
    updates = {}
) {
    const currentUser =
        findCurrentUser();

    if (!currentUser) {
        throw new Error(
            "NOT_AUTHENTICATED"
        );
    }

    const users =
        getUsers();

    const userIndex =
        users.findIndex(
            user =>
                user.id === currentUser.id
        );

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

        preferences:
            normalizePreferences({
                ...currentUser.preferences,
                ...updates.preferences
            })
    };

    if (!updatedUser.name) {
        throw new Error(
            "NAME_REQUIRED"
        );
    }

    users[userIndex] =
        updatedUser;

    saveUsers(users);

    return getSafeUser(updatedUser);
}

// Check Authentication

export function isAuthenticated() {
    return Boolean(
        findCurrentUser()
    );
}

// Logout User

export function logout() {
    removeStorage(
        CURRENT_USER_STORAGE_KEY
    );
}