/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user with Firebase token
 *     description: Authenticates a user using Firebase ID token and returns user data with profiles
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - clientToken
 *               - fcm_token
 *             properties:
 *               clientToken:
 *                 type: string
 *                 description: Firebase ID token
 *               fcm_token:
 *                 type: string
 *                 description: Firebase Cloud Messaging token
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: string
 *                       example: "Logged Successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                     profiles:
 *                       type: array
 *                     userProfile:
 *                       type: object
 *                     profile:
 *                       type: object
 *                     token:
 *                       type: string
 *                 role:
 *                   type: string
 *                   example: "user"
 *       401:
 *         description: Invalid token
 *
 * /api/v1/auth/login/email:
 *   post:
 *     summary: Login user with Firebase UID
 *     description: Authenticates a user using Firebase UID and returns user data with profiles
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - uid
 *               - fcm_token
 *             properties:
 *               uid:
 *                 type: string
 *                 description: Firebase User ID
 *               fcm_token:
 *                 type: string
 *                 description: Firebase Cloud Messaging token
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: string
 *                       example: "Logged Successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                     profiles:
 *                       type: array
 *                     userProfile:
 *                       type: object
 *                     profile:
 *                       type: object
 *                     token:
 *                       type: string
 *                 role:
 *                   type: string
 *                   example: "user"
 *       401:
 *         description: Invalid token
 *
 * /api/v1/auth/checkuser:
 *   post:
 *     summary: Check if user is registered
 *     description: Checks if a user exists by phone number and returns authentication token
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               isContactUpdate:
 *                 type: boolean
 *                 description: Flag to create new user if not exists
 *     responses:
 *       200:
 *         description: User found and token generated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: string
 *                       example: "User Registered"
 *                 authToken:
 *                   type: string
 *                 otp:
 *                   type: number
 *                   example: 1234
 *       400:
 *         description: User not registered or invalid input
 *       420:
 *         description: User is disabled
 *
 * /api/v1/auth/session:
 *   get:
 *     summary: Get user session
 *     description: Returns current user's session data including profiles
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User session retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: string
 *                       example: "User Fetched"
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                     profiles:
 *                       type: array
 *                     profile:
 *                       type: object
 *                     userProfile:
 *                       type: object
 *                 role:
 *                   type: string
 *                   example: "user"
 *       420:
 *         description: User is disabled
 *
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logout user
 *     description: Removes FCM token and logs out the user
 *     tags:
 *       - Authentication
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - fcm_token
 *             properties:
 *               id:
 *                 type: string
 *                 description: User ID
 *               fcm_token:
 *                 type: string
 *                 description: Firebase Cloud Messaging token to remove
 *     responses:
 *       200:
 *         description: Successfully logged out
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Successfully logged out"
 *       500:
 *         description: Internal server error
 */