import React from "react";

export default function Actors() {
  return (
    <div className="grid grid-cols-4 gap-3 my-5">
      <div className="bg-white shadow dark:shadow dark:bg-secondary h-20 overflow-hidden rounded">
        <div className="flex cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YWN0b3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
            alt=""
            className="w-20 aspect-square object-cover"
          />
          <div className="px-2">
            <h1 className="text-xl text-primary dark:text-white font-semibold">
              John Doe
            </h1>
            <p className="text-primary dark:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, fuga?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
