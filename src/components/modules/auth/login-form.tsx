"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Loader2 } from "lucide-react";

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginForm() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: LoginSchema) => {
        setIsLoading(true);
        // Simulate API call
        console.log("Login attempt:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
        router.push("/dashboard");
    };

    return (
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div className="mt-1">
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div className="relative mt-1">
                    <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm"
                        {...register("password")}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? (
                            <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                            <Eye className="h-4 w-4 text-gray-400" />
                        )}
                    </button>
                </div>
                {errors.password && (
                    <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                    </label>
                </div>

                <div className="text-sm">
                    <a href="#" className="font-medium text-teal-600 hover:text-teal-500">
                        Forgot your password?
                    </a>
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="flex w-full justify-center rounded-md border border-transparent bg-teal-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Signing in...
                        </>
                    ) : (
                        "Sign in"
                    )}
                </button>
            </div>
        </form>
    );
}
