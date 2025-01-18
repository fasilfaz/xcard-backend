/**
 * @swagger
 * /api/v1/group/create:
 *   post:
 *     summary: Create a new group
 *     description: Create a new group with a name and admin
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Engineering Team"
 *                 description: "Name of the group"
 *               userId:
 *                 type: string
 *                 example: "507f1f77bcf86cd799439011"
 *                 description: "Optional user ID for admin (if not provided, uses authenticated user)"
 *     responses:
 *       201:
 *         description: Group created successfully
 *       400:
 *         description: Bad request - Missing group name
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/edit/{id}:
 *   put:
 *     summary: Edit an existing group
 *     description: Update a group's name and/or picture
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Group ID
 *         example: "507f1f77bcf86cd799439011"
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Updated Team Name"
 *                 description: "New group name"
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: "Group picture file"
 *     responses:
 *       200:
 *         description: Group edited successfully
 *       400:
 *         description: Group doesn't exist
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/{id}/profile:
 *   get:
 *     summary: Get all profiles in a group
 *     description: Retrieve all user profiles associated with a specific group
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Group ID
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: Profiles fetched successfully
 *       400:
 *         description: Missing group ID
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group:
 *   get:
 *     summary: Get all groups for authenticated admin
 *     description: Retrieve all groups managed by the currently authenticated admin
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Groups fetched successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/admin:
 *   get:
 *     summary: Get all groups for a specific admin
 *     description: Retrieve all groups managed by a specific admin
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         type: string
 *         description: Admin user ID
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: Groups fetched successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/admin/search:
 *   get:
 *     summary: Search groups for a specific admin
 *     description: Search through groups managed by a specific admin using a query string
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         required: true
 *         type: string
 *         description: Admin user ID
 *         example: "507f1f77bcf86cd799439011"
 *       - in: query
 *         name: query
 *         required: true
 *         type: string
 *         description: Search query string
 *         example: "Engineering"
 *     responses:
 *       200:
 *         description: Search results retrieved successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/search:
 *   get:
 *     summary: Search groups for authenticated admin
 *     description: Search through groups managed by the authenticated admin
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         type: string
 *         description: Search query string
 *         example: "Engineering"
 *     responses:
 *       200:
 *         description: Search results retrieved successfully
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/{id}/profile/search:
 *   get:
 *     summary: Search profiles in a group
 *     description: Search for profiles within a specific group using a query string
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         type: string
 *         description: Group ID
 *         example: "507f1f77bcf86cd799439011"
 *       - in: query
 *         name: query
 *         required: true
 *         type: string
 *         description: Search query string
 *         example: "John"
 *     responses:
 *       200:
 *         description: Search results retrieved successfully
 *       400:
 *         description: Missing group ID
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/move-profile:
 *   post:
 *     summary: Move a profile to a different group
 *     description: Transfer a profile from one group to another
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - profileId
 *               - newGroupId
 *             properties:
 *               profileId:
 *                 type: string
 *                 example: "507f1f77bcf86cd799439011"
 *                 description: "ID of the profile to move"
 *               newGroupId:
 *                 type: string
 *                 example: "507f1f77bcf86cd799439012"
 *                 description: "ID of the destination group"
 *     responses:
 *       200:
 *         description: Profile moved successfully
 *       404:
 *         description: Profile not found
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * /api/v1/group/{groupId}:
 *   delete:
 *     summary: Delete a group
 *     description: Permanently delete a group and its associations
 *     tags:
 *       - Groups
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: groupId
 *         required: true
 *         type: string
 *         description: ID of the group to delete
 *         example: "507f1f77bcf86cd799439011"
 *     responses:
 *       200:
 *         description: Group deleted successfully
 *       400:
 *         description: Group not found
 *       401:
 *         description: Unauthorized
 */