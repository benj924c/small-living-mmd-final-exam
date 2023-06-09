import { component$ } from "@builder.io/qwik";
import { useServerTimeLoader } from "~/routes/layout";
import { constantContent } from "~/content";
import  Logo  from "../../assets/icons/logo.svg";
import Button from "../button";
import { Form } from "@builder.io/qwik-city";

export default component$(() => {
  const serverTime = useServerTimeLoader();

  return (
    <footer class="flex flex-col w-full pt-20 pb-4 bg-[--accent-green] text-white">
      <div class="md:grid md:grid-cols-[1fr_1fr_1fr] md:grid-rows-2 pb-10">
        <section class="md:place-self-center md:row-span-1 md:col-span-3">
        <a class="flex justify-center pb-10" href="/">
          <img class="w-[6.25rem] h-[6.25rem]" src={Logo} alt="Logo" />
        </a>
        </section>
        <section class="md:justify-self-center self-end text-center pb-8 md:row-span-2">
          <p>{constantContent.footer.left.cvr}</p>
          <div>
            <a
              class="text-white underline"
              href={constantContent.footer.left.cookies.href}
              target={
                constantContent.footer.left.cookies.target ? "_blank" : ""
              }
            >
              {constantContent.footer.left.cookies.text}
            </a>
          </div>
        </section>
        <section class="md:flex md:flex-col md:justify-self-center text-center md:row-span-2">
          <label for="newsletter" class="max-w-[40ch]">
            {constantContent.footer.middle.newsletter.text}
          </label>
          <div class="flex justify-center mt-4 pb-8">
            <Form
              class="bg-transparent flex"
              onSubmitCompleted$={() =>
                alert(
                  "This form isn't yet connected to any backend yet. In the real version you would get a confimartion mail."
                )
              }
            >
              <input
                class="text-white border-white border-0 border-b-[1px] bg-transparent px-4 py-2"
                name={constantContent.footer.middle.newsletter.input.name}
                id={constantContent.footer.middle.newsletter.input.id}
                type="text"
                placeholder={
                  constantContent.footer.middle.newsletter.input.placeholder
                }
              />
              <Button
                color="whiteBorder"
                formAction={
                  constantContent.footer.middle.newsletter.button.action
                }
                class="ml-2"
              >
                {constantContent.footer.middle.newsletter.button.text}
              </Button>
            </Form>
          </div>
        </section>
        <section class="md:justify-self-center self-end pb-8 flex gap-2 justify-center md:row-span-2">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-music-note"
              viewBox="0 0 16 16"
            >
              <path d="M9 13c0 1.105-1.12 2-2.5 2S4 14.105 4 13s1.12-2 2.5-2 2.5.895 2.5 2z" />
              <path fill-rule="evenodd" d="M9 3v10H8V3h1z" />
              <path d="M8 2.82a1 1 0 0 1 .804-.98l3-.6A1 1 0 0 1 13 2.22V4L8 5V2.82z" />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </a>
        </section>
      </div>

      <p class="text-center">Made by fire squad | {serverTime.value.year}</p>
    </footer>
  );
});
