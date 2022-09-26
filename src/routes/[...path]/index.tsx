import { RequestHandler } from '@builder.io/qwik-city';

export const onGet: RequestHandler = ({ response }) => {
  throw response.redirect('/');
};

// Hack to make it work in a gross way
// export default component$(() => {
//   useClientEffect$(() => {
//     window.location.replace(document.location.origin);
//   });

//   return <div />;
// });
