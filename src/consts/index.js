const ROUTES = {
  home: "/",
  detailLand: { path: "/detailLand/:id", to: "/detailLand/" },
  camera: "/camera",
  qr: "/qr",
  manier: "/manier",
  ontvanger: "/ontvanger",
  video: "/:id",
  detailSouvenir: { path: "/detailSouvenir/:landId/:id", to: "/detailSouvenir/" },
  login: "/login",
  register: "/register",
  locatie: "/locatie",
  scan: "/scan",
  chat: "/chat",
  start: "/start",
  kaart: "/kaart",
  souvenirWall: "/souvenirWall",
  quiz: "/quiz"
};

export { ROUTES };
