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
  message: "/message",
  start: "/start",
  kaart: "/kaart",
  souvenirWall: "/souvenirWall",
  quiz: "/quiz"
};

export { ROUTES };
