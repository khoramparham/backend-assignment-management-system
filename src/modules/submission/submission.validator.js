const Joi = require("joi");

const submissionValidationSchema = Joi.object({
  name: Joi.string().trim().required().messages({
    "string.empty": "نام دانشجو الزامی است",
    "any.required": "نام دانشجو باید وارد شود",
  }),
  phone: Joi.string()
    .pattern(/^(\+98|0)?9\d{9}$/)
    .messages({
      "string.pattern.base": "شماره موبایل معتبر نیست",
    }),
  studentCode: Joi.string().trim().pattern(/^\d+$/).min(5).max(15).required().messages({
    "string.empty": "کد دانشجویی الزامی است",
    "string.pattern.base": "کد دانشجویی باید فقط عدد باشد",
    "string.min": "حداقل ۵ رقم",
    "string.max": "حداکثر ۱۵ رقم",
    "any.required": "کد دانشجویی باید وارد شود",
  }),
  email: Joi.string().email().messages({
    "string.email": "ایمیل معتبر نیست",
  }),
  assignmentId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base":
        "شناسه نامعتبر است؛ باید یک ObjectId معتبر با طول ۲۴ کاراکتر هگزادسیمال باشد.",
      "any.required": "فیلد assignmentId الزامی است.",
    }),
});
const submissionUpdateByStudentValidationSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base":
        "شناسه نامعتبر است؛ باید یک ObjectId معتبر با طول ۲۴ کاراکتر هگزادسیمال باشد.",
      "any.required": "فیلد submissionId الزامی است.",
    }),
  name: Joi.string().trim().required().messages({
    "string.empty": "نام دانشجو الزامی است",
    "any.required": "نام دانشجو باید وارد شود",
  }),
  phone: Joi.string()
    .pattern(/^(\+98|0)?9\d{9}$/)
    .messages({
      "string.pattern.base": "شماره موبایل معتبر نیست",
    }),
  studentCode: Joi.string().trim().pattern(/^\d+$/).min(5).max(15).required().messages({
    "string.empty": "کد دانشجویی الزامی است",
    "string.pattern.base": "کد دانشجویی باید فقط عدد باشد",
    "string.min": "حداقل ۵ رقم",
    "string.max": "حداکثر ۱۵ رقم",
    "any.required": "کد دانشجویی باید وارد شود",
  }),
  email: Joi.string().email().messages({
    "string.email": "ایمیل معتبر نیست",
  }),
  assignmentId: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base":
        "شناسه نامعتبر است؛ باید یک ObjectId معتبر با طول ۲۴ کاراکتر هگزادسیمال باشد.",
      "any.required": "فیلد assignmentId الزامی است.",
    }),
});
const submissionUpdateByTeacherValidationSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required()
    .messages({
      "string.pattern.base":
        "شناسه نامعتبر است؛ باید یک ObjectId معتبر با طول ۲۴ کاراکتر هگزادسیمال باشد.",
      "any.required": "فیلد submissionId الزامی است.",
    }),
  isReviewed: Joi.boolean().required().messages({
    "any.required": "فیلد isReviewed الزامی است.",
    "boolean.base": "مقدار isReviewed باید از نوع true یا false باشد.",
  }),
  feedback: Joi.string().max(1000).allow("").optional().messages({
    "string.base": "فیدبک باید یک رشته باشد.",
    "string.max": "فیدبک نباید بیشتر از ۱۰۰۰ کاراکتر باشد.",
  }),
});
module.exports = {
  submissionValidationSchema,
  submissionUpdateByStudentValidationSchema,
  submissionUpdateByTeacherValidationSchema,
};
