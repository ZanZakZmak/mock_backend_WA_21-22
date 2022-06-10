import express from "express";
import cors from "cors";

const app = express(); // instanciranje aplikacije
const port = 3000; // port na kojem će web server slušati
app.use(cors()); // omogući CORS na svim rutama

//dohvati sve korisnike
app.get("/korisnici", (req, res) => {
  let Users = [
    {
      user_id: "1",
      email: "MarkoBrankovic@gmail.com",
      name: "Marko",
      lastname: "Branković",
      profile_picture_url: "url",
      username: "Usamljen pesekan",
      password: "1237hjdsa7",
      favorites_info_posts: [
        { post_id: "1" },
        { post_id: "2" },
        { post_id: "3" },
      ],
      friend_list: [
        { username: "patak za zadatak", user_id: "6" },
        { username: "mobius", user_id: "4" },
        { username: "šumarić", user_id: "9" },
      ],
    },
    {
      user_id: "2",
      email: "StipePavlovic@gmail.com",
      name: "Stipe",
      lastname: "Pavlović",
      profile_picture_url: "url",
      username: "ŠumskiPatuljak",
      password: "12575jf77fdj",
      favorites_info_posts: [
        { post_id: "1" },
        { post_id: "2" },
        { post_id: "3" },
      ],
      friend_list: [
        { username: "patak za zadatak", user_id: "6" },
        { username: "mobius", user_id: "4" },
        { username: "šumarić", user_id: "9" },
      ],
    },
  ];
  res.send(Users);
});
//dohvati jednog korisnika
app.get("/korisnici/:id", (req, res) => {
  res.send({
    user_id: "1",
    email: "MarkoBrankovic@gmail.com",
    name: "Marko",
    lastname: "Branković",
    profile_picture_url: "url",
    username: "Usamljen pesekan",
    password: "1237hjdsa7",
    favorites_info_posts: [
      { post_id: "1" },
      { post_id: "2" },
      { post_id: "3" },
    ],
    friend_list: [
      { username: "patak za zadatak", user_id: "6" },
      { username: "mobius", user_id: "4" },
      { username: "šumarić", user_id: "9" },
    ],
  });
});
//dodavanje novog korisnika
app.post("/korisnici", (req, res) => {
  console.log("podatci", req.body);
  res.status(201);
  res.send();
});
//mjenjanje nformacija osbnih o korisniku
app.patch("/korisnici/:id", (req, res) => {
  console.log("podatci", req.params.id, req.body);
  res.status(201);
  res.send();
});

//dohvati sve social postove
app.get("/postovi/social", (req, res) => {
  let Post_social = [
    {
      post_id: "1",
      title: "lagani ulov za jake momke",
      text: "lagane zazubice za sve koji nisu na moru ...",
      date: "2022-06-02",
      social_post_picture: "URL",
      type_of_ingridient: "Ribe",
      creator_info: { created_by: "MarkoBrankovic@gmail.com", user_id: "1" },
      likes: 17,
      coments: [
        {
          text: "vidi ih kako vade momci",
          date: "2022-06-04",
          created_by: "Usamljen pesekan",
        },
        {
          text: "je uopće dopusteno tako male ribice lovit hahaha",
          date: "2022-06-04",
          created_by: "Usamljen pesekan",
        },
        {
          text: "ljepo je to ali nema do gljiva za čorbicu",
          date: "2022-06-04",
          created_by: "ŠumskiPatuljak",
        },
      ],
    },
    {
      post_id: "2",
      title: "Bit ce gozba",
      text: "pre jaki smo kao da smo vilenjaci iz šume ...",
      date: "2021-11-02",
      social_post_picture: "URL",
      type_of_ingridient: "Gljive",
      creator_info: { created_by: "StipePavlovic@gmail.com", user_id: "2" },
      likes: 25,
      coments: [
        {
          text: "ljepo",
          date: "2022-06-04",
          created_by: "Usamljen pesekan",
        },
        {
          text: "svaka čast",
          date: "2022-06-04",
          created_by: "ŠumskiPatuljak",
        },
      ],
    },
  ];
  res.send(Post_social);
});
//dohvati jedan social post
app.get("/postovi/social/:id", (req, res) => {
  res.status(200);
  res.send({
    post_id: "1",
    title: "lagani ulov za jake momke",
    text: "lagane zazubice za sve koji nisu na moru ...",
    date: "2022-06-02",
    social_post_picture: "URL",
    type_of_ingridient: "Ribe",
    creator_info: { created_by: "MarkoBrankovic@gmail.com", user_id: "1" },
    likes: 17,
    coments: [
      {
        text: "vidi ih kako vade momci",
        date: "2022-06-04",
        created_by: "Usamljen pesekan",
      },
      {
        text: "je uopće dopusteno tako male ribice lovit hahaha",
        date: "2022-06-04",
        created_by: "Usamljen pesekan",
      },
      {
        text: "ljepo je to ali nema do gljiva za čorbicu",
        date: "2022-06-04",
        created_by: "ŠumskiPatuljak",
      },
    ],
  });
});
//dodavanje socijal post
app.post("/postovi/social", (req, res) => {
  console.log("podatci", req.body);
  res.status(201);
  res.send();
});
//brisanje socijal post
app.delete("/postovi/social/:id", (req, res) => {
  console.log("podatci", req.params.id, req.body);
  res.status(200);
  res.send();
});

//dohvati sve info postove
app.get("/postovi/info", (req, res) => {
  let Post_info = [
    {
      post_id: "1",
      title: "vrsta ribe u jadranskom moru",
      text: "evo htijo sam zanti dali neko zna koja je ješka najbolja za ovo doba godine ...",
      date: "2022-06-02",
      social_post_picture: "URL",
      type_of_ingridient: "Ribe",
      type_of_infopost: "Pitanje",
      creator_info: { created_by: "MarkoBrankovic@gmail.com", user_id: "1" },
      coments: [
        {
          text: "morski crv",
          date: "2022-06-04",
          created_by: "Usamljen pesekan",
        },
        {
          text: "ja bi probao sa dagnjama na tvom mjestu",
          date: "2022-06-04",
          created_by: "ŠumskiPatuljak",
        },
      ],
    },
    {
      post_id: "2",
      title: "evo par savjeta za nove gljivare",
      text: "kao hobi ici u gljve je vrlo opuštajuć no evo par savjeta koji će vam pomoći ...",
      date: "2021-11-02",
      social_post_picture: "URL",
      type_of_ingridient: "Gljive",
      type_of_infopost: "Savjet",
      creator_info: { created_by: "StipePavlovic@gmail.com", user_id: "2" },
      coments: [
        {
          text: "ljepo",
          date: "2022-06-04",
          created_by: "Usamljen pesekan",
        },
        {
          text: "svaka čast",
          date: "2022-06-04",
          created_by: "ŠumskiPatuljak",
        },
      ],
    },
  ];
  res.send(Post_info);
});
//dohvati jedan info post
app.get("/postovi/info/:id", (req, res) => {
  res.send({
    post_id: "2",
    title: "evo par savjeta za nove gljivare",
    text: "kao hobi ici u gljve je vrlo opuštajuć no evo par savjeta koji će vam pomoći ...",
    date: "2021-11-02",
    social_post_picture: "URL",
    type_of_ingridient: "Gljive",
    type_of_infopost: "Savjet",
    creator_info: { created_by: "StipePavlovic@gmail.com", user_id: "2" },
    coments: [
      {
        text: "ljepo",
        date: "2022-06-04",
        created_by: "Usamljen pesekan",
      },
      {
        text: "svaka čast",
        date: "2022-06-04",
        created_by: "ŠumskiPatuljak",
      },
    ],
  });
});
//dodavanje info post
app.post("/postovi/info", (req, res) => {
  console.log("podatci", req.body);
  res.status(201);
  res.send();
});
//brisanje info post
app.delete("/postovi/info/:id", (req, res) => {
  console.log("podatci", req.params.id, req.body);
  res.status(200);
  res.send();
});

//dohvati sve ingridients
app.get("/ingridients", (req, res) => {
  let Ingridients = [
    {
      ingridient_id: "1",
      name: "Orada",
      latin_name: "Sparus Aurata",
      lokalnl_name: ["Podlanica", "Komarča"],
      url_slike: "url",
      text: "pripada koštjunjavim ribama iz porordice...",
      warning:
        "kao i ostale ribe pripaziti na kičmenu kost sa bodljama nije otrovna",
      type_of_ingridient: "Ribe",
      jestivost: "Jestiva",
    },
    {
      ingridient_id: "2",
      name: "Vrganj",
      latin_name: "Boletus edulis",
      lokalnl_name: ["Brezov djed"],
      url_slike: "url",
      text: "jedna od najboljih gljiva, na našim područiju raste u ...",
      warning: "ima par vrsta sličnog izgleda koje nisu jestive",
      type_of_ingridient: "Gljive",
      jestivost: "Jestiva",
    },
  ];
  res.send(Ingridients);
});
//dohvati jedan ingridient
app.get("/ingridients/:id", (req, res) => {
  res.send({
    ingridient_id: "2",
    name: "Orada",
    latin_name: "Sparus Aurata",
    lokalnl_name: ["Podlanica", "Komarča"],
    url_slike: "url",
    text: "pripada koštjunjavim ribama iz porordice...",
    warning:
      "kao i ostale ribe pripaziti na kičmenu kost sa bodljama nije otrovna",
    type_of_ingridient: "Ribe",
    jestivost: "Jestiva",
  });
});
//dodavanje ingridient?
app.post("/ingridients", (req, res) => {
  console.log("podatci", req.body);
  res.status(201);
  res.send();
});

app.get("/", (req, res) => {
  res.send("Hello World, ovaj puta preko browsera!");
});

app.listen(port, () => console.log(`Slušam na portu ${port}!`));
