const Joi = require("joi");

const submissionSchema = Joi.object({
  student: Joi.string().hex().length(24).required().messages({
    "string.base": "شناسه دانشجو باید رشته باشد",
    "string.length": "شناسه دانشجو باید ۲۴ کاراکتر باشد",
    "string.hex": "شناسه باید به صورت hex معتبر باشد",
    "any.required": "شناسه دانشجو الزامی است",
  }),

  studentCode: Joi.string().trim().pattern(/^\d+$/).min(5).max(15).required().messages({
    "string.empty": "کد دانشجویی نمی‌تواند خالی باشد",
    "string.pattern.base": "کد دانشجویی باید فقط عدد باشد",
    "string.min": "حداقل ۵ رقم",
    "string.max": "حداکثر ۱۵ رقم",
    "any.required": "کد دانشجویی الزامی است",
  }),

  file: Joi.object({
    filename: Joi.string().required(),
    mimetype: Joi.string().valid("application/pdf", "image/png", "image/jpeg").required(),
    url: Joi.string().uri().required(),
  }).required(),

  submittedAt: Joi.date().optional(),
  isReviewed: Joi.boolean().optional(),
  feedback: Joi.string().allow("").optional(),
});

const createAssignmentSchema = Joi.object({
  title: Joi.string().trim().min(3).required().messages({
    "string.empty": "عنوان تکلیف نمی‌تواند خالی باشد",
    "any.required": "عنوان الزامی است",
  }),
  description: Joi.string().trim().optional(),
  dueDate: Joi.date().optional(),
  isActive: Joi.boolean().default(true),
});
const updateAssignmentSchema = Joi.object({
  title: Joi.string().trim().min(3).messages({
    "string.empty": "عنوان تکلیف نمی‌تواند خالی باشد",
    "any.required": "عنوان الزامی است",
  }),
  description: Joi.string().trim().optional(),
  dueDate: Joi.date().optional(),
  isActive: Joi.boolean().default(true),
});
module.exports = { createAssignmentSchema, updateAssignmentSchema };
