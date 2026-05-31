import { getRouteBackTarget, updateRouteHistory } from './useRouteBack';

describe('route back history helpers', () => {
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
});
