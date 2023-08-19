export const myPlugin = (editor: any) => {
  // Use the API: https://grapesjs.com/docs/api/
  editor.Blocks.add("my-first-block", {
    label: "Simple block",
    content: '<div class="my-block">This is a simple block</div>',
  });
};
