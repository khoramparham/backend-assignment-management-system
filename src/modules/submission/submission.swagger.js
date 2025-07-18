/**
 * @swagger
 * tags:
 *  name: Submission
 *  description: Submission Module and Routes
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Submission:
 *       type: object
 *       required:
 *       - name
 *       - phone
 *       - studentCode
 *       - assignmentId
 *       properties:
 *             name:
 *               type: string
 *               description: نام دانشجو
 *             phone:
 *               type: string
 *               description: شماره تماس دانشجو
 *             studentCode:
 *               type: string
 *               pattern: '^\d{5,15}$'
 *               description: کد دانشجویی عددی بین ۵ تا ۱۵ رقم
 *             email:
 *               type: string
 *               format: email
 *               description: ایمیل دانشجو
 *             assignmentId:
 *               type: string
 *               description: ایدی تکلیف
 *             file:
 *                  type: string
 *                  format: binary
 *     SubmissionUpdate:
 *       type: object
 *       required:
 *          - id
 *       properties:
 *             id:
 *               type: string
 *               description: ایدی
 *             name:
 *               type: string
 *               description: نام دانشجو
 *             phone:
 *               type: string
 *               description: شماره تماس دانشجو
 *             studentCode:
 *               type: string
 *               pattern: '^\d{5,15}$'
 *               description: کد دانشجویی عددی بین ۵ تا ۱۵ رقم
 *             email:
 *               type: string
 *               format: email
 *               description: ایمیل دانشجو
 *             assignmentId:
 *               type: string
 *               description: ایدی تکلیف
 *             file:
 *                  type: string
 *                  format: binary
 *     ReviewSubmission:
 *       type: object
 *       required:
 *         - id
 *         - assignmentId
 *         - isReviewed
 *       properties:
 *         id:
 *           type: string
 *           pattern: '^[0-9a-fA-F]{24}$'
 *           description: شناسه منحصربه‌فرد submission
 *         isReviewed:
 *           type: boolean
 *           description: وضعیت بررسی submission
 *         feedback:
 *           type: string
 *           maxLength: 1000
 *           description: متن بازخورد یا توضیح بررسی
 *

 */
/**
 * @swagger
 *
 * /submission/add:
 *  post:
 *      summary: add submission by student
 *      tags:
 *          -   Submission
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: '#/components/schemas/Submission'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Submission'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 *
 * /submission/{id}:
 *  get:
 *      summary: get submission by id
 *      tags:
 *          -   Submission
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
 * /submission/all/{assignmentId}:
 *  get:
 *      summary: get submission by id
 *      tags:
 *          -   Submission
 *      parameters:
 *          -   in: path
 *              name: assignmentId
 *              type: string
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 *
 * /Submission/:
 *  patch:
 *      summary: update Submission by id
 *      tags:
 *          -   Submission
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      $ref: '#/components/schemas/SubmissionUpdate'
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 *
 * /Submission/review:
 *  patch:
 *      summary: update Submission by id by teacher
 *      tags:
 *          -   Submission
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/ReviewSubmission'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/ReviewSubmission'
 *      responses:
 *          200:
 *              description: success
 */
