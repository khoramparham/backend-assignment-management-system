/**
 * @swagger
 * tags:
 *  name: Assignment
 *  description: Auth Module and Routes
 */

/**
 * @swagger
 * components:
 *  schemas:
 *   Assignment:
 *     type: object
 *     required:
 *       - title
 *       - createdBy
 *     properties:
 *       title:
 *         type: string
 *         minLength: 3
 *         description: عنوان تکلیف
 *       description:
 *         type: string
 *         description: توضیحی اختیاری برای تکلیف
 *       dueDate:
 *         type: string
 *         format: date
 *         description: مهلت تحویل تکلیف
 *       isActive:
 *         type: boolean
 *         default: true
 *         description: وضعیت فعال بودن تکلیف
 *   AssignmentUpdate:
 *     type: object
 *     properties:
 *       title:
 *         type: string
 *         minLength: 3
 *         description: عنوان تکلیف
 *       description:
 *         type: string
 *         description: توضیحی اختیاری برای تکلیف
 *       dueDate:
 *         type: string
 *         format: date
 *         description: مهلت تحویل تکلیف
 *       isActive:
 *         type: boolean
 *         default: true
 *         description: وضعیت فعال بودن تکلیف
 */

/**
 * @swagger
 *
 * /assignment/add:
 *  post:
 *      summary:
 *      tags:
 *          -   Assignment
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Assignment'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Assignment'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 *
 * /assignment/{id}:
 *  delete:
 *      summary: check otp for login user
 *      tags:
 *          -   Assignment
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: delete success
 */
/**
 * @swagger
 *
 * /assignment/{id}:
 *  get:
 *      summary: get assignment by id
 *      tags:
 *          -   Assignment
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 *
 * /assignment/all:
 *  get:
 *      summary: get all teacher assignments
 *      tags:
 *          -   Assignment
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 *
 * /assignment/{id}:
 *  patch:
 *      summary: update assignment by id
 *      tags:
 *          -   Assignment
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/Assignment'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Assignment'
 *      responses:
 *          200:
 *              description: success
 */
