$(document).ready(function () {
  const profiles = [
    {
      id: 1,
      name: "Fulano",
      cpf: "12341412",
      email: "dsadas@afas.com",
      saldo: 12,
      img: "../public/avatar.jpg",
    },
    {
      id: 2,
      name: "Sicrano",
      cpf: "12341412",
      email: "dsadas@afas.com",
      saldo: 23,
      img: "",
    },
  ];

  const id = getUrlParameter("id");

  loadProfile(profiles[0]);
});

function loadProfile(profile) {
  $("#name").append(profile.name);
  $("#cpf").append(profile.cpf);
  $("#email").append(profile.email);
  $("#saldo").append(`${profile.saldo} fraterni's`);

  $("#avatar").attr("src", profile.img);
}
