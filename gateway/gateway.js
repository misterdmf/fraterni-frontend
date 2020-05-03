$(document).ready(function () {
  $("#payBtn").click(function () {
    const name_card = $("#cc-name").val();
    const number_card = $("#cc-number").val();
    const expiration_date = $("#cc-expiration").val();
    const cvv = $("#cc-cvv").val();
    const value = $("#value").val();

    const payload = {
      name_card,
      number_card,
      cvv,
      value,
      expiration_date,
    };
    $.post("https://api.fraterni.com.br/api/payment/donation", payload).done(
      function (data) {
        console.log(data);
        const { message, total, hash } = data;
        location.href = `done.html?message=${message}&total=${total}&hash=${hash}`;
      }
    );
  });
});

function loadProfile(profile) {
  $("#name").append(profile.name);
}
