export const LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://avatars.githubusercontent.com/u/54761552?v=4";

export const API_OPTIONS = {
  method: 'GET',
   headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_AUTHORIZATION_KEY,
  },
};

export const MOVIE_URL = "https://api.themoviedb.org/3/movie/{movie_id}/videos";

export const IMAGE_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const BG_IMAGE_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/bf6f5dab-8a85-48af-be22-de3a0cfd4ea7/PK-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const GPT_API_KEY = process.env.REACT_APP_GPT_API_KEY;

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/bf6f5dab-8a85-48af-be22-de3a0cfd4ea7/PK-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg";
