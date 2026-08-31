import { getRouteBackTarget, updateRouteHistory } from './useRouteBack';

describe('route back history helpers', () => {
  const originalBasePath = process.env.NEXT_PUBLIC_BASE_PATH;

  afterEach(() => {
    if (originalBasePath === undefined)
      delete process.env.NEXT_PUBLIC_BASE_PATH;
    else process.env.NEXT_PUBLIC_BASE_PATH = originalBasePath;
  });

  it('returns the previous in-app page for a normal route stack', () => {
    expect(
      getRouteBackTarget(['/home', '/explore', '/people'], '/people')
    ).toBe('/explore');
  });

  it('uses the fallback when the current page is the only remembered route', () => {
    expect(getRouteBackTarget(['/people'], '/people')).toBe('/home');
  });

  it('treats the logged-in root redirect as a replacement', () => {
    expect(updateRouteHistory(['/'], '/home')).toEqual(['/home']);
  });

  it('strips the GitHub Pages base path from remembered routes', () => {
    process.env.NEXT_PUBLIC_BASE_PATH = '/not-twitter';

    expect(
      updateRouteHistory(['/not-twitter/home/'], '/not-twitter/people/')
    ).toEqual(['/home', '/people']);
    expect(
      getRouteBackTarget(
        ['/not-twitter/home/', '/not-twitter/people/'],
        '/not-twitter/people/'
      )
    ).toBe('/home');
  });

  it('collapses the remembered stack on browser history traversal', () => {
    expect(
      updateRouteHistory(['/home', '/explore', '/people'], '/explore', {
        browserTraversal: true
      })
    ).toEqual(['/home', '/explore']);
  });

  it('does not duplicate the current route', () => {
    expect(updateRouteHistory(['/home', '/explore'], '/explore')).toEqual([
      '/home',
      '/explore'
    ]);
  });

  it('drops Next.js dynamic route templates from remembered routes', () => {
    expect(
      updateRouteHistory(['/home', '/krouss.net', '/[id]/'], '/[id]/status/123')
    ).toEqual(['/home', '/krouss.net']);
    expect(
      getRouteBackTarget(['/home', '/[id]/'], '/krouss.net/status/123')
    ).toBe('/home');
    expect(
      getRouteBackTarget(['/[id]/'], '/krouss.net/status/123', '/krouss.net')
    ).toBe('/krouss.net');
  });
});
