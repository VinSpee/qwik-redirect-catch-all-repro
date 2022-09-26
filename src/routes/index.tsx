import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <main class="flex px-4">
      <section class="w-full justify-self-center self-center flex flex-col bg-white p-12 justify-center items-center">
        <img
          width="278"
          height="29"
          src="/logo.svg"
          class="bg-gray-50"
          alt="logo"
        />
        <img
          width="512"
          height="512"
          class="bg-gray-50"
          src="/images/head.png"
          alt="head"
        />
      </section>
    </main>
  );
});

export const head: DocumentHead = {
  title: 'Hello!',
};
