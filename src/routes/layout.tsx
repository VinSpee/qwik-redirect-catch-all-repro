import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div class="flex flex-col h-screen relative bg-neutral-100 text-blue-800 self-center justify-self-center  w-screen overflow-hidden">
      <section class="flex-grow items-center justify-center">
        <Slot />
      </section>
    </div>
  );
});
