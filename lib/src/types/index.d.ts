declare module '*.scss' {
  const content: { [key: string]: any };
  export = content;
}

declare module '*.png' {
  const content: any;
  export = content;
}
