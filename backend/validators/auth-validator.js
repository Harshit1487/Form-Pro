const {z} = require("zod")

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least of 3 chars"})
    .max(255, {message: "Name must not be more than 255 chars"}),

    email: z
    .string({required_error: "Email is required"})
    .trim()
    .email({message: "Invalid email address."})
    .min(5, {message: "Email must be at least of 5 chars"})
    .max(255, {message: "Email must not be more than 255 chars"}),   
    
    phone: z
    .string({required_error: "Phone is required"})
    .trim()
    .min(10, {message: "Phone must be at least of 10 chars"})
    .max(14, {message: "Phone must not be more than 14 chars"}),

    password: z
    .string({required_error: "Password is required"})
    .min(8, {message: "Password must be at least of 8 chars"})
    .max(255, {message: "Password must not be more than 255 chars"}),
});

module.exports = signupSchema