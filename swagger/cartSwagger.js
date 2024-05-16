/**
 * @swagger
 * tags:
 *   name: Carts
 *   description: Cart management
 */

/**
 * @swagger
 * /api/carts:
 *   post:
 *     summary: Create a new cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *             required:
 *               - userId
 *               - productId
 *               - quantity
 *     responses:
 *       201:
 *         description: Cart created successfully
 *       500:
 *         description: Error creating cart
 */

/**
 * @swagger
 * /api/carts/add:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *             required:
 *               - userId
 *               - productId
 *               - quantity
 *     responses:
 *       201:
 *         description: Product added to cart successfully
 *       500:
 *         description: Error adding product to cart
 */

/**
 * @swagger
 * /api/carts/remove:
 *   post:
 *     summary: Remove a product from the cart
 *     tags: [Carts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               productId:
 *                 type: integer
 *             required:
 *               - userId
 *               - productId
 *     responses:
 *       200:
 *         description: Product removed from cart successfully
 *       500:
 *         description: Error removing product from cart
 */

/**
 * @swagger
 * /api/carts/{userId}:
 *   get:
 *     summary: Get the contents of a user's cart
 *     tags: [Carts]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the user whose cart contents to retrieve
 *     responses:
 *       200:
 *         description: List of products in the cart
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 *       500:
 *         description: Error retrieving cart contents
 */
