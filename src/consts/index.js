const ROUTES = {
  home: "/",
  detailLand: { path: "/detailLand/:id", to: "/detailLand/" },
  messages: { path: "/messages/:id", to: "/messages/" },
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
  addContact: '/addContact',
  start: "/start",
  kaart: "/kaart",
  souvenirWall: "/souvenirWall",
  quiz: "/quiz"
};

export { ROUTES };
