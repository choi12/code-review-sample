declare global {
  declare module '*.png' {
    const content: number;
    export default content;
  }

  declare module '*.jpg' {
    const content: number;
    export default content;
  }
}

export {};
