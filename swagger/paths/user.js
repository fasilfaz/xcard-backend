/**
 * @swagger
 * /api/v1/profile:
 *   post:
 *     summary: Create a new user profile
 *     description: Creates a new user profile with detailed information including contact details, social links, services, products, and more
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: query
 *         name: group
 *         schema:
 *           type: string
 *         description: Group ID to associate the profile with
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - email
 *               - theme
 *               - update
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               email:
 *                 type: string
 *                 format: email
 *                 description: User's email address
 *               theme:
 *                 type: string
 *                 description: Selected theme for the profile
 *               update:
 *                 type: string
 *                 description: JSON string containing all profile data
 *                 example: |
 *                   {
 *                     "profile": {
 *                       "name": "John Doe",
 *                       "designation": "Software Engineer"
 *                     },
 *                     "contact": {
 *                       "contacts": [
 *                         {
 *                           "type": "mobile",
 *                           "value": "+1234567890"
 *                         }
 *                       ]
 *                     },
 *                     "social": {
 *                       "socials": [
 *                         {
 *                           "type": "linkedin",
 *                           "value": "linkedin.com/in/johndoe"
 *                         }
 *                       ]
 *                     },
 *                     "website": {
 *                       "websites": []
 *                     },
 *                     "category": {
 *                       "categorys": []
 *                     },
 *                     "video": {
 *                       "link": {}
 *                     },
 *                     "service": {
 *                       "services": []
 *                     },
 *                     "document": {
 *                       "documents": []
 *                     },
 *                     "certificate": {
 *                       "certificates": []
 *                     },
 *                     "award": {
 *                       "awards": []
 *                     },
 *                     "bank": {
 *                       "bankDetails": {}
 *                     },
 *                     "product": {
 *                       "products": []
 *                     },
 *                     "enquiry": {
 *                       "email": {}
 *                     }
 *                   }
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Profile picture, banner image, and other files
 *               asFunction:
 *                 type: boolean
 *                 description: Flag to indicate if the request is from a function
 *     responses:
 *       201:
 *         description: Profile created successfully
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
 *                       example: "User Profile Created"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: User ID
 *                     username:
 *                       type: string
 *                       description: User's phone number
 *                     uid:
 *                       type: string
 *                       description: Firebase UID
 *                     role:
 *                       type: string
 *                       example: "user"
 *       400:
 *         description: Bad request - Invalid input or file upload failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "File upload failed" 
 * 
 * components:
 *   schemas:
 *     Profile:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         designation:
 *           type: string
 *         profilePicture:
 *           type: string
 *         profileBanner:
 *           type: string
 *         profileQR:
 *           type: string
 *         profileLink:
 *           type: string
 *     Contact:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           type:
 *             type: string
 *           value:
 *             type: string
 *     Social:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           type:
 *             type: string
 *           value:
 *             type: string
 *           label:
 *             type: string
 *     Product:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *           description:
 *             type: string
 *           price:
 *             type: number
 *           image:
 *             type: string
 *     Service:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *           description:
 *             type: string
 *           image:
 *             type: string
 */
/**
 * @swagger
 * /api/v1/user/handleExisting:
 *   post:
 *     summary: Handle existing user profile creation
 *     description: Creates an additional profile for an existing user with products and services
 *     tags:
 *       - User Profile
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - profile
 *               - theme
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               profile:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: User's full name
 *               theme:
 *                 type: string
 *                 description: Selected theme for the profile
 *               product:
 *                 type: object
 *                 properties:
 *                   products:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         description:
 *                           type: string
 *                         file:
 *                           type: string
 *                           format: binary
 *               service:
 *                 type: object
 *                 properties:
 *                   services:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                         description:
 *                           type: string
 *                         file:
 *                           type: string
 *                           format: binary
 *               asFunction:
 *                 type: boolean
 *                 description: Flag to indicate if called as a function
 *     responses:
 *       201:
 *         description: Profile created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "User Profile Created"
 *                 data:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                     uid:
 *                       type: string
 *                     role:
 *                       type: string
 *       400:
 *         description: Error handling existing user
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 * 
 * /api/v1/user/createAdmin:
 *   post:
 *     summary: Create new admin user profile
 *     description: Creates a new admin user with profile and contact information
 *     tags:
 *       - User Profile
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - form
 *               - files
 *             properties:
 *               form:
 *                 type: string
 *                 description: JSON string containing user details
 *                 example: |
 *                   {
 *                     "phone": "+1234567890",
 *                     "email": "admin@example.com",
 *                     "profile": {
 *                       "name": "Admin User",
 *                       "companyName": "Company Name"
 *                     },
 *                     "contact": {
 *                       "contacts": [
 *                         {
 *                           "type": "email",
 *                           "value": "admin@example.com"
 *                         }
 *                       ]
 *                     }
 *                   }
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Profile picture files
 *     responses:
 *       201:
 *         description: Admin profile created successfully
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
 *                       example: "Admin User Profile Created"
 *                 data:
 *                   type: object
 *                   properties:
 *                     username:
 *                       type: string
 *                     uid:
 *                       type: string
 *                     role:
 *                       type: string
 *                       example: "admin"
 *       400:
 *         description: Error creating admin profile
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 * 
 * components:
 *   schemas:
 *     Contact:
 *       type: object
 *       properties:
 *         type:
 *           type: string
 *           enum: [email, phone, mobile]
 *         value:
 *           type: string
 *     Profile:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         companyName:
 *           type: string
 *         profilePicture:
 *           type: string
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         file:
 *           type: string
 *     Service:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         description:
 *           type: string
 *         file:
 *           type: string
 */
/**
 * @swagger
 * /user/admin:
 *   get:
 *     summary: Get all admin users with counts
 *     description: Retrieves all admin users along with their group and profile counts
 *     tags:
 *       - Admin
 *     responses:
 *       200:
 *         description: Successfully retrieved admin users
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
 *                       example: "All Admin Users with Counts"
 *                 profile:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       user:
 *                         type: object
 *                         properties:
 *                           role:
 *                             type: string
 *                             example: "admin"
 *                       groupCount:
 *                         type: number
 *                         example: 5
 *                       profileCount:
 *                         type: number
 *                         example: 25
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/admin/search:
 *   get:
 *     summary: Search admin users
 *     description: Search for admin users by name with their group and profile counts
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query string
 *     responses:
 *       200:
 *         description: Search results
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
 *                       example: "Search Results"
 *                 profile:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       profile:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             example: "John Doe"
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/admin/profile:
 *   get:
 *     summary: Get all profiles of an admin
 *     description: Retrieves all profiles managed by a specific admin
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: admin
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Successfully retrieved profiles
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
 *                       example: "All Admin Users"
 *                 profiles:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       group:
 *                         type: object
 *       400:
 *         description: Admin ID not provided
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/admin/profile/search:
 *   get:
 *     summary: Search profiles of an admin
 *     description: Search for profiles managed by a specific admin
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: admin
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin ID
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query string
 *     responses:
 *       200:
 *         description: Search results
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
 *                       example: "All Admin Users"
 *                 profiles:
 *                   type: array
 *                   items:
 *                     type: object
 *       400:
 *         description: Admin ID not provided
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/admin/export:
 *   get:
 *     summary: Export admin data
 *     description: Exports all profiles and analytics of an admin as Excel file and sends via email
 *     tags:
 *       - Admin
 *     parameters:
 *       - in: query
 *         name: admin
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Data exported successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: string
 *                       example: "Export Data sent to example@email.com"
 *       400:
 *         description: Admin ID not provided
 *       500:
 *         description: Error occurred while sending the email
 */
/**
 * @swagger
 * /user/admin/analytics:
 *   get:
 *     summary: Get analytics for all admin users
 *     description: Retrieves analytics data for all admin users including group and profile counts
 *     tags:
 *       - Admin Analytics
 *     responses:
 *       200:
 *         description: Successfully retrieved admin analytics
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
 *                       example: "All Admin Users with Counts"
 *                 profile:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       groupCount:
 *                         type: number
 *                         example: 5
 *                       profileCount:
 *                         type: number
 *                         example: 25
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/admin/analytics/single:
 *   get:
 *     summary: Get analytics for a single admin
 *     description: Retrieves analytics data for a specific admin user
 *     tags:
 *       - Admin Analytics
 *     parameters:
 *       - in: query
 *         name: admin
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Successfully retrieved admin analytics
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
 *                       example: "All Admin Users with Counts"
 *                 profile:
 *                   type: object
 *                   properties:
 *                     groupCount:
 *                       type: number
 *                       example: 5
 *                     profileCount:
 *                       type: number
 *                       example: 25
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/analytics/counts:
 *   get:
 *     summary: Get count analytics
 *     description: Retrieves total counts for admins, groups, and profiles
 *     tags:
 *       - Admin Analytics
 *     responses:
 *       200:
 *         description: Successfully retrieved counts
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
 *                       example: "All User Counts"
 *                 counts:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       name:
 *                         type: string
 *                         example: "Total Admins"
 *                       count:
 *                         type: number
 *                         example: 10
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/delete:
 *   delete:
 *     summary: Delete user account
 *     description: Deletes a user account and associated data
 *     tags:
 *       - User Management
 *     parameters:
 *       - in: query
 *         name: user
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID to delete
 *     responses:
 *       200:
 *         description: User successfully deleted
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
 *                       example: "User Account Deleted"
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /user/deleteFirebaseUsers:
 *   delete:
 *     summary: Delete all Firebase users
 *     description: Deletes all users from Firebase Authentication
 *     tags:
 *       - User Management
 *     responses:
 *       200:
 *         description: All Firebase users deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "All Firebase users deleted successfully"
 *       400:
 *         description: Error deleting Firebase users
 */

/**
 * @swagger
 * /user/update:
 *   post:
 *     summary: Update user profile
 *     description: Updates user profile information including images, contact details, and theme
 *     tags:
 *       - User Management
 *     parameters:
 *       - in: query
 *         name: user
 *         schema:
 *           type: string
 *         description: User ID (optional)
 *       - in: query
 *         name: profile
 *         schema:
 *           type: string
 *         required: true
 *         description: Profile ID
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: User's name
 *               designation:
 *                 type: string
 *                 description: User's designation
 *               companyName:
 *                 type: string
 *                 description: Company name
 *               bio:
 *                 type: string
 *                 description: User biography
 *               theme:
 *                 type: string
 *                 description: Card theme
 *               update:
 *                 type: string
 *                 format: json
 *                 description: JSON string of updates
 *               status:
 *                 type: string
 *                 format: json
 *                 description: JSON string of status updates
 *               labelUpdates:
 *                 type: string
 *                 format: json
 *                 description: JSON string of label updates
 *               files:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Profile and banner images
 *     responses:
 *       200:
 *         description: Profile updated successfully
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
 *                       example: "User Profile Updated"
 *                 data:
 *                   type: object
 *                   description: Updated profile data
 *       400:
 *         description: File upload failed or invalid input
 *       500:
 *         description: Internal Server Error
 */
/**
 * @swagger
 * /user/updateAdminProfile:
 *   post:
 *     summary: Update admin user profile
 *     description: Updates admin profile information including profile picture and contact details
 *     tags:
 *       - Admin Management
 *     parameters:
 *       - in: query
 *         name: admin
 *         schema:
 *           type: string
 *         description: Admin ID (optional)
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture
 *               companyName:
 *                 type: string
 *                 description: Company name
 *               bio:
 *                 type: string
 *                 description: Admin biography
 *               phone:
 *                 type: string
 *                 description: Phone number
 *               uid:
 *                 type: string
 *                 description: User ID for Firebase
 *               update:
 *                 type: string
 *                 format: json
 *                 description: JSON string of updates
 *     responses:
 *       200:
 *         description: Admin profile updated successfully
 *       400:
 *         description: File upload failed or invalid input
 */

/**
 * @swagger
 * /user/updateUserContact:
 *   post:
 *     summary: Update user contact information
 *     description: Updates user contact details in user collection
 *     tags:
 *       - User Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               uid:
 *                 type: string
 *                 description: Firebase UID
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       400:
 *         description: Invalid input
 */

/**
 * @swagger
 * /user/enableDisable:
 *   post:
 *     summary: Enable or disable user
 *     description: Enable or disable admin users (Super admin access only)
 *     tags:
 *       - User Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - isDisabled
 *             properties:
 *               phone:
 *                 type: string
 *                 description: User's phone number
 *               isDisabled:
 *                 type: boolean
 *                 description: Disable status
 *     responses:
 *       200:
 *         description: User status updated successfully
 *       400:
 *         description: Phone number not provided
 */

/**
 * @swagger
 * /user/profile/enableDisable:
 *   post:
 *     summary: Enable or disable profile
 *     description: Enable or disable a user profile
 *     tags:
 *       - User Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - isDisabled
 *             properties:
 *               id:
 *                 type: string
 *                 description: Profile ID
 *               isDisabled:
 *                 type: boolean
 *                 description: Disable status
 *     responses:
 *       200:
 *         description: Profile status updated successfully
 *       400:
 *         description: Profile ID not provided
 */

/**
 * @swagger
 * /user/profile/enableDisableEditing:
 *   post:
 *     summary: Enable or disable profile editing
 *     description: Enable or disable editing capabilities for a profile
 *     tags:
 *       - User Management
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - disabledEditing
 *             properties:
 *               id:
 *                 type: string
 *                 description: Profile ID
 *               disabledEditing:
 *                 type: boolean
 *                 description: Editing disable status
 *     responses:
 *       200:
 *         description: Profile editing status updated successfully
 *       400:
 *         description: Profile ID not provided
 */

/**
 * @swagger
 * /user/updateSuperAdmin:
 *   post:
 *     summary: Update super admin profile
 *     description: Updates super admin profile information including profile picture
 *     tags:
 *       - Admin Management
 *     parameters:
 *       - in: query
 *         name: admin
 *         schema:
 *           type: string
 *         description: Admin ID (optional)
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Profile picture
 *               companyName:
 *                 type: string
 *                 description: Company name
 *               bio:
 *                 type: string
 *                 description: Admin biography
 *               update:
 *                 type: string
 *                 format: json
 *                 description: JSON string of updates
 *     responses:
 *       200:
 *         description: Super admin profile updated successfully
 *       400:
 *         description: File upload failed or invalid input
 */
/**
 * @swagger
 * /mixin/admin:
 *   post:
 *     summary: Process admin mixins
 *     description: Handles various admin actions like adding and editing different sections (contact, website, category, etc.)
 *     tags:
 *       - Mixin Engine
 *     parameters:
 *       - name: admin
 *         in: query
 *         required: true
 *         description: Admin user ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 section:
 *                   type: string
 *                   enum: [contact, website, category, service, award, certificate, product, bank, video, enquiry]
 *                   description: Section to be modified
 *                 action:
 *                   type: string
 *                   enum: [add, edit]
 *                   description: Action to be performed
 *                 data:
 *                   type: object
 *                   description: Section-specific data
 *             example:
 *               - section: "contact"
 *                 action: "add"
 *                 data: { "phone": "1234567890" }
 *     responses:
 *       200:
 *         description: Mixins processed successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 * 
 * /mixin/status:
 *   post:
 *     summary: Process status changes
 *     description: Handles status updates for various sections
 *     tags:
 *       - Mixin Engine
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 action:
 *                   type: string
 *                   enum: [status]
 *                   description: Status update action
 *                 data:
 *                   type: object
 *                   description: Status-related data
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       500:
 *         description: Internal server error
 *
 * /mixin/add:
 *   post:
 *     summary: Add items to sections
 *     description: Add new items to various sections like social media, services, etc.
 *     tags:
 *       - Mixin Engine
 *     parameters:
 *       - name: user
 *         in: query
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *       - name: profile
 *         in: query
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 section:
 *                   type: string
 *                   description: Section to add items to
 *                 action:
 *                   type: string
 *                   enum: [add]
 *                   description: Add action
 *                 data:
 *                   type: object
 *                   description: Item data
 *             example:
 *               - section: "social"
 *                 action: "add"
 *                 data: { 
 *                   "value": "https://twitter.com/example",
 *                   "type": "twitter"
 *                 }
 *     responses:
 *       200:
 *         description: Items added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *
 * /mixin/edit:
 *   put:
 *     summary: Edit existing items
 *     description: Modify existing items in various sections
 *     tags:
 *       - Mixin Engine
 *     parameters:
 *       - name: user
 *         in: query
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *       - name: profile
 *         in: query
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 section:
 *                   type: string
 *                   description: Section containing the item to edit
 *                 action:
 *                   type: string
 *                   enum: [edit]
 *                   description: Edit action
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID of the item to edit
 *                   description: Updated item data
 *     responses:
 *       200:
 *         description: Items updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *
 * /mixin/delete:
 *   delete:
 *     summary: Delete items
 *     description: Remove items from various sections
 *     tags:
 *       - Mixin Engine
 *     parameters:
 *       - name: user
 *         in: query
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *       - name: profile
 *         in: query
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 section:
 *                   type: string
 *                   description: Section containing the item to delete
 *                 action:
 *                   type: string
 *                   enum: [delete]
 *                   description: Delete action
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID of the item to delete
 *                     image:
 *                       type: object
 *                       description: Image data if applicable
 *     responses:
 *       200:
 *         description: Items deleted successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * /mixin/admin/edit:
 *   put:
 *     summary: Process admin edits
 *     description: Handles admin-specific edit operations for various sections
 *     tags:
 *       - Mixin Engine Admin
 *     parameters:
 *       - name: admin
 *         in: query
 *         required: true
 *         description: Admin user ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 section:
 *                   type: string
 *                   description: Section to be edited
 *                 action:
 *                   type: string
 *                   enum: [edit]
 *                   description: Edit action
 *                 data:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       description: ID of the item to edit
 *                   description: Updated item data
 *     responses:
 *       200:
 *         description: Items updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 * 
 * /mixin/status/update:
 *   put:
 *     summary: Update section status
 *     description: Updates the status of specified sections in a user profile
 *     tags:
 *       - Mixin Engine
 *     parameters:
 *       - name: user
 *         in: query
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *       - name: profile
 *         in: query
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 section:
 *                   type: string
 *                   description: Section whose status needs to be updated
 *                 data:
 *                   type: boolean
 *                   description: New status value
 *             example:
 *               - section: "contact"
 *                 data: true
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 *
 * /api/v1/user/createBulk:
 *   post:
 *     summary: Create multiple user profiles from spreadsheet
 *     description: Creates user profiles in bulk by processing data from an Excel file
 *     tags:
 *       - User Profile
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: group
 *         in: query
 *         required: false
 *         description: Group ID to associate profiles with
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Excel file containing user profile data
 *               url:
 *                 type: string
 *                 description: URL to download Excel file (alternative to file upload)
 *     responses:
 *       201:
 *         description: Profiles created successfully
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
 *                       example: "Uploaded 50 new profiles created. 2 profiles failed."
 *       400:
 *         description: Invalid input or file format
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 error:
 *                   type: string
 *                   example: "Error uploading users: Invalid phone numbers found in 3 rows"
 *       500:
 *         description: Internal server error
 * 
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
/**
 * @swagger
 * /api/v1/user/createBulkCloud:
 *   post:
 *     summary: Create multiple user profiles from Google Sheets
 *     description: Creates user profiles in bulk by processing data from a Google Sheets URL
 *     tags:
 *       - User Profile
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: group
 *         in: query
 *         required: false
 *         description: Group ID to associate profiles with
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               url:
 *                 type: string
 *                 description: Google Sheets URL containing user profile data
 *                 example: "https://docs.google.com/spreadsheets/d/..."
 *     responses:
 *       200:
 *         description: Profiles created successfully
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
 *                       example: "Uploaded 10 new users. 2 existing users were skipped."
 *       400:
 *         description: Invalid input or file format
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid URL domain: example.com"
 *
 * /api/v1/user/appversion:
 *   get:
 *     summary: Get application version information
 *     description: Retrieves version information for specific app and platform
 *     tags:
 *       - Application
 *     parameters:
 *       - name: app
 *         in: query
 *         required: true
 *         description: Application identifier
 *         schema:
 *           type: string
 *       - name: platform
 *         in: query
 *         required: true
 *         description: Platform identifier
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Version information retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: object
 *                   description: Version-specific information
 *       400:
 *         description: Missing required parameters
 *
 * /api/v1/notifications:
 *   get:
 *     summary: Get profile notifications
 *     description: Retrieves and resets notification status for a profile
 *     tags:
 *       - Notifications
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Form data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 form:
 *                   type: object
 *                   description: Form related data
 *       500:
 *         description: Server error
 *
 * /api/v1/enquiry/export:
 *   get:
 *     summary: Export enquiry data
 *     description: Exports profile enquiry data to Excel and sends via email
 *     tags:
 *       - Enquiry
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: Profile ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Excel file sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: object
 *                   properties:
 *                     success:
 *                       type: string
 *                       example: "Export Data sent to user@example.com"
 *       500:
 *         description: Export failed
 *
 * /api/v1/contact/email:
 *   post:
 *     summary: Send contact form email
 *     description: Sends an email from the contact form
 *     tags:
 *       - Contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - subject
 *               - firstName
 *               - lastName
 *               - emailAddress
 *               - message
 *             properties:
 *               subject:
 *                 type: string
 *                 description: Email subject
 *               firstName:
 *                 type: string
 *                 description: Sender's first name
 *               lastName:
 *                 type: string
 *                 description: Sender's last name
 *               emailAddress:
 *                 type: string
 *                 format: email
 *                 description: Sender's email address
 *               message:
 *                 type: string
 *                 description: Email message content
 *     responses:
 *       200:
 *         description: Email sent successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: string
 *                   example: "Message sent and saved successfully"
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Failed to send email
 */




