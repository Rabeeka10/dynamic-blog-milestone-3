import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Hi there! I am Rabeeka Yousuf<br></br>
        Welcome to My Blog
         
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I specialize in React Development and pride myself on being a quick learner, always eager to dive into new technologies and approaches.
        In this blog, I&apos;ll be sharing my thoughts, experiences, and insights on everything from coding tips to building a startup. Whether you&apos;re here to explore my journey or looking for advice on React, I hope you&apos;ll find something that resonates with you.
        </p>
      </div>
    </Container>
  );
};

export default Hero;
