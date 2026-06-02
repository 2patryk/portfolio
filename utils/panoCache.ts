let preloadedSlug: string | null = null;
const inProgress = new Map<string, Promise<void>>();

export const preloadPano = (src: string): Promise<void> => {
  if (inProgress.has(src)) return inProgress.get(src)!;

  const promise = new Promise<void>((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });

  inProgress.set(src, promise);
  return promise;
};

export const markPreloaded = (slug: string) => {
  preloadedSlug = slug;
};

export const consumePreloaded = (slug: string): boolean => {
  if (preloadedSlug === slug) {
    preloadedSlug = null;
    return true;
  }
  return false;
};
