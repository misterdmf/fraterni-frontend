$(document).ready(function () {
  const profiles = [
    {
      id: 1,
      name: "Fulano",
      cpf: "12341412",
      email: "dsadas@afas.com",
      saldo: 12,
    },
    {
      id: 2,
      name: "Sicrano",
      cpf: "12341412",
      email: "dsadas@afas.com",
      saldo: 23,
    },
  ];

  const id = getUrlParameter("id");

  loadProfile(profiles[id - 1]);
});

function loadProfile(profile) {
  $("#name").append(profile.name);
}
