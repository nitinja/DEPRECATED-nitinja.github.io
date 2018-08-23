import React from "react";
import profilePic from "./profile_pic.jpg";

export default () => {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-md">
      <p>
        I am multi‑disciplinary designer and frontend developer. I have led
        small frontend and design teams in recent past. I have been working in
        the industry for around 10 years, for startups as well as industry
        leaders in multiple domains. I have done UX design and development for
        companies including HP, Persistent systems.
      </p>
      <p>
        While I was still in college, I started building products as freelance
        programmer and graphic designer, and then slowly migrated to
        professional design/development. I have also worked on Information
        architecture, user journeys and interaction design.
      </p>
      <p>
        Here is my{" "}
        <a href="https://www.behance.net/nitinjadhav-ux">design portfolio.</a> I
        primarily work with Sketch (and other design tools), Javascript, React,
        CSS and everything in between.
      </p>
      <p>
        <strong>
          Its my job to make sure application works fast, looks great and
          delivers amazing user experience.
        </strong>{" "}
        <br />
        I greatly appreciate and follow design & UX principles. I believe that
        polished UI is just one part of the great experience - product should
        work great as well. I also strive for great DX (Developer experience).
        Functional programming principles, design patterns and linting is part
        of my development process.
      </p>
      <p>
        <h2 className="secondary-header--light">MY PHILOSOPHY</h2>
        I am a believer of simplistic design - I believe that good interface is
        invisible. I strive to be minimalist and{" "}
        <a href="http://gregmckeown.com/book/">essentialist</a>. I
      </p>
      <p>
        I live in Pune, India's knowledge city. In my free time, I like to
        tinker with digital devices, write{" "}
        <a href="https://medium.com/@nitinj">articles</a>, read sci-fi
        literature and comics (I own nice collection of comics!), play computer
        games and have fun with my wife and cute 2-year old{" "}
        <a href="https://photos.app.goo.gl/ovk4tbjv9CYs4zsJ3">daughter</a>.
      </p>
      <img
        src={profilePic}
        alt="my-photo"
        width={200}
        height={200}
        style={{ "border-radius": "50%", border: "1px solid #ccc" }}
        className="mt-8 mx-auto"
      />
    </div>
  );
};
