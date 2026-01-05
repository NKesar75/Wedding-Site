export function SkipToContent() {
  return (
    <a
      href='#main-content'
      className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold z-[200] focus:z-[200]'
    >
      Skip to main content
    </a>
  );
}
