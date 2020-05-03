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
    },
    {
      id: 2,
      name: "Instituto Ayrton Senna",
      city: "São Paulo",
      state: "Sao Paulo",
      img: "../public/logo-senna2.png",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Mé faiz elementum girarzis, nisi eros vermeio. Quem num gosta di mim que vai caçá sua turmis!",
    },
  ];

  loadCards(instuicoes);
});

function loadCards(instuicoes) {
  const listInstuicoes = $("#listInstituicoes");

  for (let inst of instuicoes) {
    const { id, name, city, state, img, description } = inst;

    const card = $("<div>", { class: "card mt-2" });
    const cardBody = $("<div>", { class: "card-body" });
    const mainRow = $("<div>", { class: "row" });
    const divImg = $("<div>", { class: "col my-auto" }).append(
      `<img src="${img}" alt="..." class="img-thumbnail mx-auto d-block" />`
    );
    const divRightCard = $("<div>", { class: "col-12 col-lg-10 mr-4" });

    const headerRightCard = $("<div>", { class: "row my-4" });
    const headerTitle = $("<div>", { class: "col-12 col-sm-10" })
      .append(`<h4>${name}</h4>`)
      .append(`<h5>${city}, ${state}</h5>`);

    const button = $(`<button>`, { class: "btn btn-success mx-auto" })
      .click(function () {
        location.href = `../perfilInstituicao/instituicao.html?id=${id}`;
      })
      .append("DOAR");

    const donnationDiv = $("<div>", { class: "col text-center" }).append(
      button
    );

    const descriptionDiv = $("<h6>").append(description);

    card.append(cardBody);
    cardBody.append(mainRow);
    mainRow.append(divImg);

    mainRow.append(divRightCard);
    divRightCard.append(headerRightCard);
    headerRightCard.append(headerTitle);
    headerRightCard.append(donnationDiv);

    divRightCard.append(descriptionDiv);

    listInstuicoes.append(card);
  }
}
