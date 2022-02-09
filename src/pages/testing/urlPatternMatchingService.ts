interface urlPatternMatchingServiceInterface {
  match: (value: string) => boolean;
}

/**
 * @since 1.0.0
 * @summary Returns true or false if the url passed in matches
 * the currently supported URL patterns (Youtube, Vimeo)
 * @example
 * const matchService = urlPatternMatchingService();
 * const validUrl = matchService.match('https://vimeo.com/524933864')
 * @returns Boolean
 */
const urlPatternMatchingService = (): urlPatternMatchingServiceInterface => {
  const match = (value: string) => {
    let matchesPattern = false;
    const youtubeUrlExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;

    const youtubeUrl = value.match(youtubeUrlExp);

    const vimeoUrlExp =
      /^(http\:\/\/|https\:\/\/)?(www\.)?(vimeo\.com\/)([0-9]+)$/.test(value);

    if (youtubeUrl && youtubeUrl[2].length === 11) {
      console.log('youtubeUrlExp', youtubeUrlExp);
      matchesPattern = true;
    } else {
      console.log('not valid youtube');
    }

    if (vimeoUrlExp) {
      matchesPattern = true;
      console.log('vimeoUrlExp', vimeoUrlExp);
    } else {
      console.log('Not a valid vimeo');
    }

    return matchesPattern;
  };
  return {
    match,
  };
};

export default urlPatternMatchingService;
