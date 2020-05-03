$(document).ready(function () {
  const instuicoes = [
    {
      id: 1,
      name: "Comunidade Católica Shalom",
      city: "Fortaleza",
      state: "Ceará",
      img: "../public/logo-shalom.png",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Mé faiz elementum girarzis, nisi eros vermeio. Quem num gosta di mim que vai caçá sua turmis!",
      itens: ["item1", "item2", "item3", "item1", "item2", "item3", "item1"],
      imgList: [
        "../public/logo-shalom.png",
        "../public/logo-shalom.png",
        "../public/logo-shalom.png",
        "../public/logo-shalom.png",
        "../public/logo-shalom.png",
      ],
    },
    {
      id: 2,
      name: "Instituto Ayrton Senna",
      city: "São Paulo",
      state: "Sao Paulo",
      img: "../public/logo-senna2.png",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Mé faiz elementum girarzis, nisi eros vermeio. Quem num gosta di mim que vai caçá sua turmis!",
      itens: ["item1", "item2", "item3"],
      imgList: [
        "../public/logo-senna2.png",
        "../public/logo-senna2.png",
        "../public/logo-senna2.png",
        "../public/logo-senna2.png",
        "../public/logo-senna2.png",
      ],
    },
  ];

  const id = getUrlParameter("id");

  loadProfile(instuicoes[id - 1]);

  $("#btnDonation").click(function () {
    location.href = `../gateway/gateway.html?id=${id}`;
    console.log("click");
  });
});

function loadProfile(instuicao) {
  $("#name").text(instuicao.name);
  $("#location").text(`${instuicao.city}, ${instuicao.state}`);
  $("#mainImg").attr("src", instuicao.img);
  $("#mainDescription").text(instuicao.description);
  $("#subDescription").text(instuicao.description);

  for (let item of instuicao.itens) {
    const li = $(`<li id='item'>${item}</li>`);
    $("#itens").append(li);
  }

  for (let img of instuicao.imgList) {
    const li = $(
      `<img src=${img} id='item-img' class='img-thumbnail mx-2 my-2 col-2'/>`
    );
    $("#img-list").append(li);
  }

  console.log(instuicao);
}
