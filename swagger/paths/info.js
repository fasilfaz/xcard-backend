/**
 * @swagger
 * /api/v1/information/terms:
 *   get:
 *     summary: View Terms and Conditions
 *     tags: [Information]
 *     responses:
 *       200:
 *         description: Returns rendered terms and conditions page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *
 * /api/v1/information/privacy:
 *   get:
 *     summary: View Privacy Policy
 *     tags: [Information]
 *     responses:
 *       200:
 *         description: Returns rendered privacy policy page
 *         content:
 *           text/html:
 *             schema:
 *               type: string
 *
 * /api/v1/information/trending-profiles:
 *   get:
 *     summary: Get profiles sorted by visit count with pagination
 *     tags: [Information]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 20
 *         description: Number of profiles per page
 *     responses:
 *       200:
 *         description: Successfully retrieved trending profiles
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
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
 *                           companyName:
 *                             type: string
 *                             example: "Tech Corp"
 *                           designation:
 *                             type: string
 *                             example: "Software Engineer"
 *                           profilePicture:
 *                             type: object
 *                             properties:
 *                               url:
 *                                 type: string
 *                                 example: "https://example.com/profile.jpg"
 *                       visitCount:
 *                         type: number
 *                         example: 1000
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: number
 *                       example: 1
 *                     limit:
 *                       type: number
 *                       example: 20
 *                     totalPages:
 *                       type: number
 *                       example: 5
 *                     totalResults:
 *                       type: number
 *                       example: 100
 */