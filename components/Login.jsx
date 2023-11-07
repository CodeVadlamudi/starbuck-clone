import React from "react";

function Login() {
  const formLogin = [
    {id: 1, name: "Username", type: "text", title: "Enter email"},
    {id: 2, name: "Password", type: "password", title: "Enter Password"},
  ];
  return (
    <section className="py-24 px-5 sm:px-10">
      <div className="bg-white max-w-screen-sm mx-auto w-full shadow-xl rounded-2xl p-10 border">
        <form action="!#" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Login</h2>
            <a href="/" className="font-bold text-[#00754a]">
              Skip
            </a>
          </div>
          {formLogin.map((fill) => (
            <div key={fill.id} className="flex flex-col">
              <label htmlFor="name" className="text-lg font-medium">
                {fill.name}
              </label>
              <input
                type={fill.type}
                placeholder={fill.title}
                className="w-full border-2 border-green-700 h-12 pl-4 text-black rounded-md"
              />
            </div>
          ))}
          <button className="w-full bg-[#00754a] text-white h-12 rounded-md text-lg hover:bg-[#0d563c] duration-200">
            Login
          </button>

          <div className="text-center">
            <p>
              Facing trouble logging in?{" "}
              <a href="/" className="border-b-2 border-[#00754a] inine-block">
                Get Help
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
