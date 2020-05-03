$(document).ready(function () {
  const message = getUrlParameter("message");
  const hash = getUrlParameter("hash");
  const total = getUrlParameter("total");

  $("#message").append(message);
  $("#hash").append(hash);
  $("#total").append(`Saldo: ` + total);
});
