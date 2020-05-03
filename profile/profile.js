$(document).ready(function () {
  $.get(`https://api.fraterni.com.br/api/profile`, function (data) {
    loadProfile(data.profile);
  });
});

function loadProfile(profile) {
  $("#name").append(profile.name);
  $("#cpf").append(profile.cpf);
  $("#email").append(profile.email);
  $("#balance").append(`${profile.balance}`);
  $("#balanceMenu").append(`${profile.balance}`);
  $("#avatar").attr("src", profile.image);

  for (const tran of profile.transations) {
    const value = $("<span>", {
      class: "badge badge-primary badge-pill",
    }).append(tran.value);
    const elem = $("<li>", {
      class:
        "list-group-item d-flex justify-content-between align-items-center",
    })
      .append(tran.institution)
      .append(value);
    $("#transations").append(elem);
  }
}
