/**
 * An array of public routes
 * these routes are accessible without authentication
 * @type {string[]}
 */

export const publicRoutes = ['/']

/**
 * An array of routes that require authentication
 * these routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ['/auth/login', '/auth/register', '/auth/error']

/**
 * The prefix of API routes authentication
 * Routes that start with this prefix are prefix used for API authentication
 * @type {string}
 */

export const apiAuthPrefix = '/api/auth'

/**
 * The default login redirect path
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = '/settings'
