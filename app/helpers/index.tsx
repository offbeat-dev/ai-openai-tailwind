const replaceContent = (obj: any, components: any) => {
  if (obj.type === "textnode") {
    const result = components.find((c1: any) => c1.field === obj.field);

    if (result) {
      obj.content = result.content;
      return result;
    }
  } else if (obj.type === "image") {
    components.find((c1: any) => {
      if (c1.field === obj.field) {
        obj.attributes.src = c1.attributes.src;
      }
    });
  } else {
    if (obj.components) {
      obj.components = obj.components.map((c: any) => {
        return replaceContent(c, components);
      });
    }
  }
  // }
  return obj;
};

export { replaceContent };
