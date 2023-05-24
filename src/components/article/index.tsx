import { component$ } from "@builder.io/qwik";
// import { ArticlesContent } from "~/content";
import { Image } from "@unpic/qwik";

import type { articleContent } from "~/routes/articles/[slug]";

export default component$<articleContent>(({content}) => {

  console.log("props", content.title)

  return (
    <article class={"mx-[10rem]"}>
      <h2 class={"text-center pb-24 pt-16"}>{content.title}</h2>
      {/* next and previous articel image buttons component here */}
      {/* tags line component here */}
      <section class={"flex justify-between pb-6"}>
        <div class={"flex gap-2"}>
          <div>{content.date}</div>
          <span> | </span>
          <div>by {content.author}</div>
        </div>
        {/* save the article button component */}
        <div>Save the article button</div>
      </section>
      <section class={"grid"}>
        {content.section.map((section, key) => {
          if (section.type == "text") {
            return (
              <p key={key} class={"text-justify pt-12"}>
                {section.text}
              </p>
            );
          }
          if (section.type == "image") {
            if (section.src == null) return;
            return (
              <Image
                key={key}
                src={section.src}
                width={section.width}
                aspectRatio={section.aspectRatio}
                alt={section.alt}
                class={"py-24 justify-self-center"}
              />
            );
          }
        })}
      </section>
      {/* related articles carousel component */}
      <section class={"flex justify-end pb-12"}>
        <button
          class={"hover:bg-[--accent-green] p-2 "}
          onClick$={() => scrollTo(0, 0)}
        >
          Go to the top ⇧
        </button>
      </section>
            {/* comments section component */}
    </article>
  );
});