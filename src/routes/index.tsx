import { component$, useOnDocument } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { sync$ } from "@builder.io/qwik";

export default component$(() => {
  useOnDocument(
    "DOMContentLoaded",
    sync$(() => {
      console.log("I say hi!");
    })
  );

  return (
    <>
      <p>Check the console in dev and preview.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
