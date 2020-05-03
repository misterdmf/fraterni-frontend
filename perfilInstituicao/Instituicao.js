$(document).ready(function () {
  const id = getUrlParameter("id");

  $.get(`https://api.fraterni.com.br/api/institutions/${id}/show/`, function (
    data
  ) {
    loadProfile(data.institution);
  });

  $("#btnDonation").click(function () {
    location.href = `../gateway/gateway.html?id=${id}`;
    console.log("click");
  });
});

function loadProfile(instuicao) {
  $("#name").text(instuicao.name);
  $("#location").text(`${instuicao.city}, ${instuicao.state}`);
  $("#mainImg").attr("src", instuicao.image);
  $("#mainDescription").text(instuicao.description);
  $("#subDescription").text(instuicao.description);

  for (let item of instuicao.items) {
    const li = $(`<li id='item'>${item}</li>`);
    $("#itens").append(li);
  }

  for (let img of instuicao.gallery) {
    const li = $(
      `<img src=${img} id='item-img' class='img-thumbnail mx-2 my-2 col-2'/>`
    );
    $("#img-list").append(li);
  }

  console.log(instuicao);
}
