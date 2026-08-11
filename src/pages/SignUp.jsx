import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";
import heroImage from "../assets/heroImage.png";

const signUpSchema = z
  .object({
    email: z.string().email("Noto'g'ri email format"),

    password: z
      .string()
      .min(
        6,
        "Parol kamida 6 belgidan iborat bo'lishi kerak"
      ),

    confirmPassword: z.string(),
  })
  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Parollar bir-biriga mos emas",
      path: ["confirmPassword"],
    }
  );

function SignUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    // Foydalanuvchi ma'lumotlarini saqlaymiz
    const user = {
      email: data.email,
      password: data.password,
    };

    localStorage.setItem(
      "registeredUser",
      JSON.stringify(user)
    );

    // Ro'yxatdan o'tgandan keyin Sign In
    navigate("/signin");
  };

  return (
    <div
      className="relative bg-cover bg-center min-h-[600px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6">
          Create Account
        </h2>

        <div className="flex flex-col gap-4">

          {/* EMAIL */}
          <div>
            <div className="relative">
              <input
                type="text"
                placeholder="Email address"
                className="border rounded-lg w-full px-4 py-3 pr-10 outline-none"
                {...register("email")}
              />

              <Mail
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* PASSWORD */}
          <div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="border rounded-lg w-full px-4 py-3 pr-10 outline-none"
                {...register("password")}
              />

              <Lock
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm password"
                className="border rounded-lg w-full px-4 py-3 pr-10 outline-none"
                {...register("confirmPassword")}
              />

              <Lock
                size={18}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* SIGN UP */}
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg py-3 font-medium mt-2"
          >
            Sign Up
          </button>
        </div>

        {/* SOCIAL */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-gray-200" />

          <span className="text-sm text-gray-400">
            Or sign up with
          </span>

          <div className="flex-1 h-px bg-gray-200" />
        </div>

        <div className="flex gap-3">

          <button
            type="button"
            className="flex-1 border rounded-lg py-2 flex justify-center items-center hover:bg-gray-50"
          >
            <FcGoogle size={22} />
          </button>

          <button
            type="button"
            className="flex-1 border rounded-lg py-2 flex justify-center items-center hover:bg-gray-50"
          >
            <FaFacebook
              size={22}
              className="text-blue-600"
            />
          </button>

          <button
            type="button"
            className="flex-1 border rounded-lg py-2 flex justify-center items-center hover:bg-gray-50"
          >
            <FaApple
              size={22}
              className="text-black"
            />
          </button>

        </div>

        {/* LOGIN */}
        <p className="text-center text-sm text-gray-500 mt-6">
          I already have an account?{" "}

          <Link
            to="/signin"
            className="text-emerald-500 font-medium"
          >
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}

export default SignUp;