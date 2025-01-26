"use client";
import { auth } from "@/firebase/firebaseConfig";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const res = await signInWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-blue-100 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-gray-700 text-2xl mb-10">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-purple-300 rounded outline-none text-gray-800 placeholder-gray-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-purple-300 rounded outline-none text-gray-800 placeholder-gray-500"
        />
        <button
          onClick={handleSignIn}
          className="w-full p-3 mt-4 bg-gray-700 rounded text-white hover:bg-indigo-500"
        >
          Sign In
        </button>

        <div className="w-full text-center mt-5">
          <span className="text-gray-700 text-center text-sm">
            Don't have an account?{" "}
            <span className=" text-blue-300 underline cursor-pointer">
              <Link href="/signup">Signup</Link>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
